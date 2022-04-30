function _event(e,x){
  let el=new Element(e)
  el.lastEvent=app.events[x]
  if(typeof el.lastEvent=="function")el.lastEvent()
}

