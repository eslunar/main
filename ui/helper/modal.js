function Modal(child,css={}){
  this.element=new Element(`<modal uuid="${app.uuid(100)}" style="background:#00000025;top:0;left:0;bottom:0;right:0;z-index:3;position:fixed;display:flex;align-items:center;align-content:center;justify-content:center;"></modal>`).css(css)
  this.element.on("click",function(e){e.target==this.raw?app.back():""})
  
  typeof child=="string"?this.element.html(child):this.element.add(child)
  this.open=function(opt){
    body.add(this.element)
    history.pushState(this.element.attr("uuid"),null,location.href)
    return this
  }
  
  return this
}
