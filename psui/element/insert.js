Element.prototype.insert=function ListInsert(el,pos,rep){
  this.raw.list.splice(pos,rep?1:0,el)
  this.list(this.raw.list)
  return this
}