function Modal(child){
  this.element=new Element("<modal></modal>")
  
  this.element.add(child)
  this.open=function(opt){
    body.add(this.element)
    history.pushState(null,null,null)
    return this
  }
  
  return this
}
