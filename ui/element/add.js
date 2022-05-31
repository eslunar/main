Element.prototype.add=function(...args){
  args.forEach(e=>typeof e=="object"&&e instanceof Array?e.forEach(e=>this.add(e)):this.raw.appendChild(new Element(e).raw))
  return this
}
