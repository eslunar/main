Element.prototype.on=function(event,val){
  if(val){
    if(!event.startsWith("on"))event="on"+event
    let id=app.uuid(50)
    app.events[id]=val
    this.raw.setAttribute(event,`_event(this,"${id}")`)
  } else return app.events[(this.raw.getAttribute(event)||"").split("\"")[1]]
  return this
}
