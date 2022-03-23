/*set aliases to engines*/const app={
  html:txml,
  db:name=>new Dexie(name),
  
  /*ui thread communication*/
  send:(type="default",data="")=>self.postMessage([type,data]),
  
  /*inter thread communication*/
  post:(data="",thread="main")=>app.send("message",{from:app.manifest.id,to:thread,data:data}),
  listeners:[],
  listen:res=>app.listeners.push(res),
  
  /*utilities*/
  uuid:UtilUUID,repeat:UtilRepeat,print:UtilPrint,
  
  /*data registers*/
  moduleCache:{},
  interfaces:{},
  anchors:[],
  events:{},
  
}




self.onmessage=e=>{
  let ev=e.data[0]
  let data=e.data[1]
  
  if(ev=="setup"){
    app.manifest=data
    let require=requireFactory(data.origin)
    /*bind body to ui thread*/app.body=new Element("<body></body>")
    app.send("bind-body",[app.manifest.id,app.body.attr("_")])
    require(data.main||"/index.js",{async:true})
  }
  
  if(ev=="message")app.listeners.forEach(e=>e(data))
  
  if(ev=="interface")app.interfaces[data.id]=data.data
  
  if(ev=="body-ready");
  
  if(ev=="event")if(app.events[data.id])if(app.events[data.id][data.type]){
    let ref = app.events[data.id][data.type]
    let ce = new Element(ref.ref)
    
    ce.lastEvent=ref.exec
    ce.lastEvent()
  }
}

