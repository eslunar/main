function Modal(child){
  this.element=new Element(`<modal style="background:#00000020;top:0;bottom:0;left:0;right:0;z-index:3;position:fixed;"></modal>`)
  
  typeof child=="string"?this.element.html(child):this.element.add(child)
  this.open=function(opt){
    body.add(this.element)
    history.pushState(null,null,null)
    return this
  }
  
  return this
}
