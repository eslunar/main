Element.prototype.attr=function(prop,val){
  if(typeof prop=="object")Object.keys(prop).forEach(e=>this.attr(e,prop[e]))
  else if(prop&&val!==undefined){
    if(val===null)this.raw.removeAttribute(prop)
    else if(prop.startsWith("on"))this.on(prop,val)
    else {if(this.raw.hasAttribute(prop))this.raw[prop]=val
    else this.raw.setAttribute(prop,val)}
  } else if(prop&&val===undefined)return prop in this.raw?this.raw[prop]||"":this.raw.getAttribute(prop)||""
  
  return this
}

Elements.prototype.attr=function(...args){
  this.raw.forEach(e=>e.attr(...args))
  return this
}





Element.prototype.hasAttr=function(prop){
  return this.raw.hasAttribute(prop)
}

