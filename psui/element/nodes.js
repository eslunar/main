Element.prototype.nodes=function NodeList(text){
  let kids=[]
  let rec=function(parent){
    parent.children.forEach(e=>{
      if(typeof e=="object"){
        kids.push(e)
        rec(e)
      } else {
        if(text)kids.push(e)
      }
    })
  }
  rec(this.raw)
  return kids
}
