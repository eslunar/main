function Modal(child){
  this.element=new Element(`<flex style="background:#00000020;top:0;bottom:0;left:0;right:0;z-index:3;position:fixed;" x=center y=center type=modal ></flex>`)
  this.element.on("click",function(e){e.target==this.raw?history.back():""})
  
  typeof child=="string"?this.element.html(child):this.element.add(child)
  this.open=function(opt){
    body.add(this.element)
    history.pushState(null,null,null)
    return this
  }
  
  return this
}
