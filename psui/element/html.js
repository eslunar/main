Element.prototype.html=function NodeHTML(...args){
  if(args.length){
    this.raw.children=[]
    args.forEach(e=>this.raw.children=this.raw.children.concat(app.html.parse(e)))
  } else {
    return app.html.stringify(this.raw.children)
  }
  this.refresh("html")
  return this
}
