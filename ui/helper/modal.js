function Modal(child,css={}){
  this.element=new Element(`<modal style="background:#00000025;top:0;left:0;width:100vw;height:100vh;z-index:3;position:fixed;display:flex;align-items:center;align-content:center;justify-content:center;"></modal>`).css(css)
  this.element.on("click",function(e){e.target==this.raw?history.back():""})
  
  typeof child=="string"?this.element.html(child):this.element.add(child)
  this.open=function(opt){
    body.add(this.element)
    history.pushState(null,null,null)
    return this
  }
  
  return this
}
