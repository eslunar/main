function _event(e,x,m){
  let el=new Element(e)
  el.lastEvent=app.events[x]
  if(typeof el.lastEvent=="function")el.lastEvent(m)
}

