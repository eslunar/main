function Element(root,opt){
  /*set raw element*/
  if(typeof root=="object")this.raw=root.raw||root
  if(typeof root=="string"){
    let el=document.createElement("e")
    el.innerHTML=root
    this.raw=el.children[0]
  }
  return this
}
