function Element(elem,opt){
  this.raw=typeof elem=="string"?app.html.parse(elem)[0]:(elem.raw||elem)
  
  
  /*clones element*/this.clone=()=>app.html.stringify([this.raw])
  
  this.refresh("create")
}
