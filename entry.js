/*Get the current active script*/const cs=document.currentScript
var events=[]
const eventHandler=function(data){
  console.log("new function")
  return function(){
    worker.postMessage(["events",data])
  }
}
try{
  man=JSON.parse(cs.innerHTML)||{}}catch(e){
  throw new Error("Error parsing manifest, please review it.")
}
document.body=document.createElement("body")
/*create splash screen*/document.body.innerHTML=man.splash||`
<style>
load{
  width:50px;
  height:50px;
  border-radius:100%;
  border:4px solid #00000010;
  border-top:4px solid #e91e63;
  animation:spin 600ms linear infinite;
}

load-body{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}

@keyframes spin{
 from{
    transform:rotate(0deg)
  }
 to{
    transform:rotate(359deg)
  }
}
</style>
<load-body>
<load></load>
</load-body>`
/*get the current psjs host*/let root = cs.getAttribute("src").split("/")
root.pop()
root=root.join("/")

function setAttr(client,val){
  if(client=="body")client=document.body
  else client=document.body.querySelector(`[_=${client}]`)||document.createElement("div")
  
  Object.keys(val).forEach(e=>{
    if(e in client)client[e]=val[e]
    client.setAttribute(e,val[e])
  })
}




/*main worker*/const worker = new Worker((root=="/"?"":root)+"/setup.js")

/*sends the app manifest to setup*/worker.postMessage(["setup",{
    type:"main",
    manifest:man,
    root:root=="/"?"":root,
    
    }])
    
/*portal to front-end*/worker.onmessage=e=>{
  const data=e.data[1]
  const ev=e.data[0]
  
  if(ev=="dom"){
    /*body painting*/if(data.body&&data.html)document.body.innerHTML=data.html
    /*specific painting*/if(data.stamp&&data.html)(document.body.querySelector(`[_=${data.stamp}]`)||{}).innerHTML=data.html;
    
    /*body attributes*/if(data.body&&data.attr)setAttr("body",data.attr)
    /*specific atrr*/if(data.stamp&&data.attr)setAttr(data.stamp,data.attr)
    
    /*refresh event listeners if parent rerenders*/if(data.html)events.forEach(e=>{
      if(e.id==data.stamp||data.html.includes(e.id))(document.body.querySelector(`[_=${e.id}]`)||{})[e.type]=eventHandler(e)
    })
  }
  
  if(ev=="events")events.push(data)
 
  
  if(ev=="c-log")console.log(...data)
  
  
}

worker.onerror=e=>{
  console.log("%cFatal Error","color:red;font-weight:600","\n"+e.message+"\nat line:"+e.lineno+" charno:"+e.colno+"\n in file "+e.filename)
  worker.terminate()
}

