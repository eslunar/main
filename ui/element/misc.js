Element.prototype.previousSibling=function(){
  return this.raw.previousElementSibling?new Element(this.raw.previousElementSibling):undefined
}






Element.prototype.nextSibling=function(){
  return this.raw.nextElementSibling?new Element(this.raw.nextElementSibling):undefined
}



Element.prototype.index=function(){
  if(this.parent()){
    let pos=this.parent().children().map(e=>e.raw).indexOf(this.raw)
    if(pos==-1)pos=0
    return pos
  }
  else return 0
}



Element.prototype.parent=function(){
  return this.raw.parentNode?new Element(this.raw.parentNode):undefined
}



Element.prototype.focus=function(){
  this.raw.focus()
  return this
}

Element.prototype.blur=function(){
  this.raw.blur()
  return this
}
Element.prototype.scroll = function(a,b) {
  this.raw.scroll(a,b)
  return this
}
