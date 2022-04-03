function Modal(children="",opt){
  let elem=this 
  elem= new Element("<modal/>")
  elem.css({
    background:"#00000015",
    position:"fixed",
    zIndex:3,
    top:0,bottom:0,left:0,right:0,
    
  })
  elem.add(children)
  app.body.add(elem)
  app.send("push-state",app.manifest.id)
  return elem
}
