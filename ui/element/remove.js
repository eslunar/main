Element.prototype.remove=function(e){
  if(e===undefined)this.raw.remove()
  if(typeof e=="number")new Element(this.children()[e]||"<e>").remove()
  if(typeof e=="object")this.queryAll(e).forEach(e=>e.remove())
  return this
}

Elements.prototype.remove = function(...args) {
  this.raw.forEach(e => e.remove(...args))
  return this
}
