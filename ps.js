/*
  PLAYSCRIPT v0.1
  build 1
  20.03.22
  by Faizel Garoeb
*/
const cs=document.currentScript;
/*web app manifest*/const manifest=JSON.parse(cs.innerHTML)||{}
manifest.origin=location.href
/*library host*/let csl=cs.src.split("/");csl.pop();const root=csl.join("/")
/*localStorage support*/let store;try{localStorage.test="true?";store=localStorage}catch(e){store={}}
/*current version*/const version=0.1
/*active event listeners*/var eventPool=[]


/*app loading screen*/document.body=document.body||document.createElement("body")
document.body.innerHTML=manifest.splash||`
<style>
load{
  width:35px;
  height:35px;
  border-radius:100%;
  border:5px solid #00000011;
  border-top:4px solid #e91e63;
  transform:rotate(0deg);
  animation:spin 800ms linear infinite;
}

body{
  border:0;padding:0;margin:0;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}

@keyframes spin{to{transform:rotate(359deg)}}</style><load></load>
`


/*libraries*/
let l_engines=["/engine/dixie.js","/engine/txml.js","/engine/require.js","/engine/interface.js"]
let l_util=["/util/repeat.js","/util/uuid.js","/util/print.js"]
let l_misc=["/misc/alert.js","/misc/console.js"]
let l_elem=["/psui/element/core.js","/psui/element/nodes.js","/psui/element/refresh.js","/psui/element/add.js","/psui/element/remove.js","/psui/element/html.js","/psui/element/text.js","/psui/element/attr.js","/psui/element/css.js","/psui/query/core.js","/psui/css/core.js","/psui/anchor/core.js"]

/*library builder*/if(version!=store.version||(manifest.flags||"").includes("dev"))Promise.all([...l_engines,...l_util,...l_misc,...l_elem,"/setup.js"].map(e=>fetch(root+e))).then(e=>Promise.all(e.map(e=>e.text()))).then(e=>{ /*successful build*/
   store.script=e.join("\n")
   store.version=version
   start()
}).catch(e=>location.href=location.href); else start()


/*When app is ready to start worker*/
function start(){
  /*create a url of the library to be used by the main thread and sub threads*/manifest.url=URL.createObjectURL(new Blob([store.script],{type:"application/javascript"}))
  
  /*threads spec*/manifest.threads=manifest.threads||{}
  delete manifest.threads.main
  manifest.threads.main=manifest.main||"/index.js"
  
  /*launch threads*/const threads=Object.assign({},...Object.keys(manifest.threads).map(e=>{
    manifest.id=e;
    manifest.main=manifest.threads[e]
    const worker = new Worker(manifest.url)
    worker.postMessage(["setup" ,manifest])
    worker.onmessage=(e)=>{
      let ev=e.data[0]
      let data=e.data[1]
      let eventHandler=(id,type)=>event=>worker.postMessage(["event",{id,type}])/*runs each time an event is fired, dont change*/
    
      if(ev=="log")console.log(...data)
      if(ev=="alert")alert(data)
      
      /*relays messages inbetween threads*/if(ev=="message")threads[data.to].postMessage(["message",data])
      
      /*evaluates code for the querying thread*/if(ev=="interface"){
        let respond=(e)=>worker.postMessage(["interface",{id:data.id,data:e===undefined?null:e}])
        if(data.function.startsWith("async"))new Function("return "+data.function)()(...data.arguments).then(respond).catch(respond);
        else respond(new Function("return "+data.function)()(...data.arguments))}
        
        /*binds document.body to main threads body*/if(ev=="bind-body")if(data[0]=="main")document.body.setAttribute("_",data[1])
        
        /*catch reflections*/if(ev=="reflect")if(data.from=="main"){
          let setAttr=(elem,attr)=>{Object.keys(attr).forEach(e=>{ if(e in elem)elem[e]=String(attr[e]); else elem.setAttribute(e,String(attr[e])) })}
          if(data.html!==undefined)(document.querySelector(`[_=${data.id}]`)||{}).innerHTML=String(data.html)
          if(data.attr!==undefined)setAttr(document.querySelector(`[_=${data.id}]`)||document.createElement("div"),data.attr)
          if(data.html!==undefined)eventPool.forEach(e=>{
            /*rerendering html unbinds event listeners affiliated with it, this is a refresher function*/if(String(data.html).includes(e.id))(document.querySelector(`[_=${e.id}]`)||{})[e.type]=eventHandler(e.id,e.type)
          })
        }
          
          /*register events*/if(ev=="event")if(data.from=="main"){
            /*delete old registrars*/eventPool=eventPool.filter(e=>e.id!=data.id&&e.type!=data.type)
            /*create a new one*/eventPool.push({id:data.id,type:data.type});
            /*activate it*/(document.querySelector(`[_=${data.id}]`)||{})[data.type]=eventHandler(data.id,data.type)
            
          }
        
      
    }
    worker.onerror=(e)=>{console.log("%cEngine Error","color:red;font-weight:600","\n"+e.message+"\nat line:"+e.lineno+" charno:"+e.colno+"\nps.beta.js v"+version);worker.terminate()}
    return {[e]:worker}
  }))
  
}
