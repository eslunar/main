function Element(elem,opt){
  this.raw=typeof elem=="string"?app.html.parse(elem)[0]:(elem.raw||elem)
  
  
  /*clones element*/this.clone=()=>app.html.stringify([this.raw])
  
  /*get stamp*/this.stamp=()=>this.raw.attributes._
  
  this.refresh("create")
  return this
}
