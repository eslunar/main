Element.prototype.parent=function(){
  return this.raw.parentNode?new Element(this.raw.parentNode):undefined
}
