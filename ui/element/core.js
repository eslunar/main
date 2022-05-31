function Element(root,opt){
  /*set raw element*/
  if(typeof root=="object")this.raw=root.raw||root
  if(typeof root=="string"){
    let el=document.createElement("e")
    el.innerHTML=root
    this.raw=el.children[0]
    el=undefined
  }
  return this
}

function Elements(root,opt){
  this.raw=root||[]
  return this
}
