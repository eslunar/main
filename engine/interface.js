function Interface(func){
  this.function=String(func)
  
  this.errorEvent=e=>console.error(e)
  this.error=e=>this.errorEvent=e
  
  this.run=(...args)=>new Promise((res,rej)=>{
    let id=app.uuid(500)
    app.send("interface",{
      id:id,
      function:this.function,
      arguments:args
    })
    let int=setInterval(()=>{
      if(app.interfaces[id]!==undefined){
        clearInterval(int)
        let response=app.interfaces[id]
        if(response instanceof ReferenceError){
          this.errorEvent(response)
          response=null
        }
        delete app.interfaces[id]
        res(response)
      }
    },1)
    
  })
}
