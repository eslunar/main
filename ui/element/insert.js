Element.prototype.insert=function(el,pos){
  if(pos===undefined)pos=this.children().length
  el=new Element(el)
  if(typeof pos=="number"){if(this.children().length<pos+1){
    this.add(el)
  } else this.raw.insertBefore(el.raw,this.children()[pos].raw)} else {
    if(pos=="before")this.raw.parent().raw.insertBefore(el.raw,this.raw)
    if(pos=="after")this.raw.parent().raw.insertAfter    (el.raw,this.raw)
  }
  return this
}

