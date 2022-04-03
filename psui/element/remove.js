Element.prototype.remove=function Remove(...args){
  let parent=new Element(this.raw.parent||"<div/>")
  if(args.length==0&&this.raw.parent){
    this.raw.parent.children.splice(this.raw.parent.children.indexOf(this.raw),1)
    delete this.raw.parent;
  } else {
    if(typeof args[0]=="number"){
      let rm = new Element(this.raw.children.filter(e=>typeof e=="object")[args[0]]||"<div/>")
      rm.remove()
      
    } else if (typeof args[0]=="object"){
      this.queryAll(args[0]).forEach(e=>e.remove())
      
    }
    
    
    /*let el=this.raw.children.filter(e=>typeof e=="object")
    args.forEach(e=>el[e]?el[e].del=true:"")
    this.raw.children=this.raw.children.map(e=>typeof e=="object"?e.del?(delete e.parent,delete e.del,""):e:e).filter(e=>e)*/
  }
  parent.refresh("html")
  return this
}
