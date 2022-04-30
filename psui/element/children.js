Element.prototype.children=function ElementChildren(e){
  return this.raw.children.filter(e=>typeof e=="object").map(e=>new Element(e))
}