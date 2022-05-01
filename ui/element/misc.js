Element.prototype.previousSibling=function(){
  return this.raw.previousElementSibling?new Element(this.raw.previousElementSibling):undefined
}

Element.prototype.nextSibling=function(){
  return this.raw.nextElementSibling?new Element(this.raw.nextElementSibling):undefined
}
