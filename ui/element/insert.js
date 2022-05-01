Element.prototype.insert=function(el,pos){
  if(pos===undefined)pos=this.children().length
  el=new Element(el)
  if(this.children().length<pos+1){
    this.add(el)
  } else this.raw.insertBefore(el.raw,this.children()[pos].raw)
  return this
}
