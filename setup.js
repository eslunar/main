/*set aliases to engines*/const app={
  html:txml,
  store:store,
  fetch:Fetch,
  
  /*ui thread communication*/
  send:(type="default",data="")=>self.postMessage([type,data]),
  
  /*inter thread communication*/
  post:(data="",thread="main")=>app.send("message",{from:app.manifest.id,to:thread,data:data}),
  listeners:[],
  listen:res=>app.listeners.push(res),
  
  /*utilities*/
  uuid:UtilUUID,repeat:UtilRepeat,print:UtilPrint,icon:InjectIcon,
  
  /*data registers*/
  interfaces:{},
  anchors:[],
  events:{},
  
}




self.onmessage=e=>{
  let ev=e.data[0]
  let data=e.data[1]
  
  if(ev=="setup"){
    app.manifest=data
    app.manifest.async==undefined?app.manifest.async=true:""
    app.moduleCache=app.manifest.moduleCache
    let require=requireFactory(data.origin)
    /*bind body to ui thread*/app.body=new Element("<body></body>")
    /*set theme*/css.theme(app.manifest.theme||"light")
    app.send("bind-body",[app.manifest.id,app.body.attr("_")])
    require(data.main||"/index.js",app.manifest)
  }
  
  if(ev=="message")app.listeners.forEach(e=>e(data))
  
  if(ev=="interface")app.interfaces[data.id]=data.data
  
  if(ev=="body-ready");
  
  if(ev=="event")if(app.body.query({stamp:data.id})){
    let ref = app.body.query({stamp:data.id})
    ref.lastEvent=ref.raw.events[data.type]
    ref.lastEvent({target:ref.query({stamp:data.target})||ref})
  }
  
  /*removes the last modal from the app on back pressed, native push*/if(ev=="back")app.body.remove({tag:"modal",position:"last"})
  
  if(ev=="store")store.raw=data
  
  
  /*pushes input changes to their pre*/if(ev=="reflect-input")(app.body.query({stamp:data.id})||new Element("input")).raw.attributes.value=data.val
}

