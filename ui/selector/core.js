function Selector(queer,event){
  this.id=app.uuid(50)
  app.selectors[this.id]={}
  this.query=function(queer){
    if(queer)app.selectors[this.id].query=queer
    else return app.selectors[this.id].query||{}
    return this
  }
  
  this.event=function(e){
    if(e)app.selectors[this.id].event=e
    else return app.selectors[this.id].event||{}
    return this
  }
  
  this.remove=function(){
    delete app.selectors[this.id]
    return this
  }
  
  this.query(queer,event)
  app.selectScan(body.children())
  return this
}
