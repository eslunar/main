Element.prototype.remove=function Remove(...args){
  if(args.length==0){
    if(this.raw.parent)this.raw.parent.children.splice(this.raw.parent.children.indexOf(this.raw),1)
  } else {
    let el=this.raw.children.filter(e=>typeof e=="object")
    args.forEach(e=>el[e]?el[e].del=true:"")
    this.raw.children=this.raw.children.map(e=>typeof e=="object"?e.del?(delete e.parent,delete e.del,""):e:e).filter(e=>e)
  }
  this.refresh("html")
  return this
}
