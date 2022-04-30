Element.prototype.add=function(...args){
  args.forEach(e=>this.raw.appendChild(new Element(e).raw))
  return this
}