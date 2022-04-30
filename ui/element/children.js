Element.prototype.children=function(deep){
  return [...(deep?this.raw.querySelectorAll("*")||[]:this.raw.children||[])].map(e=>new Element(e))
}
