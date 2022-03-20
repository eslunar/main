

/*creates the worker for every thread*/app.threads=Object.keys(manifest.threads||{})
.map(e=>{
  return {
    id:e,
    path:manifest.threads[e],
    worker:new Worker(app.lib+"/setup.js"),
  }
})
/*activates the worker with a sub system*/app.threads.map(e=>{
  e.worker.postMessage(["setup",{
    type:"sub",
    manifest:manifest,
    thread:{
      path:e.path,
      id:e.id
    },
    root:app.lib
  }])
  
  /*handles messages sent from the threads to the network*/e.worker.onmessage=function(x){
    if(x.data[0]=="post"){
      /*if a thread creates a post*/
      /*if an id is passed reffering to other sub threads*/if(x.data[2]!="main"){
        let ctd=app.threads.filter(e=>e.id==x.data[2])[0]
        if(ctd)ctd.worker.postMessage(["post",{from:e.id,data:x.data[1]}])
        
      } else {
        /*was destined to be interpreted by main script*/self.onmessage({data:["post",{
          from:e.id,data:x.data[1]
        }]})
      }
        
        
    } else /*relay message to the UI thread*/self.postMessage(x.data)
  }
})

