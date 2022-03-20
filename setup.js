/*setup basics*/
const app={
 
}
let require;
const __scope__={root:"/",current:"/"}
/*caching required modules, uses stale data to save bandwidth and speedup response time, request fresh data by setting stale=false in options*/const __cache__={}
const manifest={}
const global=self



self.onmessage=e=>{
  const data=e.data
  
  if(data[0]=="post"){
    app.listeners.filter(e=>e.id==data[1].from).forEach(e=>e.func(data[1]))
  }
  
  if(data[0]=="events"){
    if(app.events[data[1].id])if(app.events[data[1].id][data[1].type]){
      var cv=app.events[data[1].id][data[1].type]
      cv.registrar.lastActiveEvent=cv.exec
      cv.registrar.lastActiveEvent()
    }
  }
  
  
  /*on app start*/if(data[0]=="setup"){
    /*get the root location of the playscript library, to support local development*/app.lib=data[1].root;
    /**/Object.assign(manifest,data[1].manifest)
    
    /*CORE IMPORTS*/
    /*utilities*/self.importScripts(app.lib+"/util/all.js")
    /*require factory for imports*/self.importScripts(app.lib+"/require.js")
    require=requireFactory("/")
    /*polyfill for console events*/self.importScripts(app.lib+"/misc/console.js")
    
    /*VDOM Parser*/importScripts(app.lib+"/engines/xml.js")
    
    
    if(data[1].type=="main"){
    /*only load virtual DOM manipulative functions on the main thread, sub thread access may cause conflicts*/
    /*VDOM core*/self.importScripts(app.lib+"/psui/element/core.js")
    /*VDOM query*/self.importScripts(app.lib+"/psui/query/core.js")
    /*Reflected body*/self.importScripts(app.lib+"/psui/body.js")
    /*Selector function*/self.importScripts(app.lib+"/psui/selector/core.js")
    
    self.importScripts(app.lib+"/threads/manager.js")
    
    } else {
      /*edit manifest to match sub thread info*/manifest.main=data[1].thread.path
    }
    self.importScripts(app.lib+"/threads/comms.js")
    /*launch entry module*/require(manifest.main||"/index.js",{
      async:true
    })
  }
  
  
  
}
