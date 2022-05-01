Element.prototype.attr=function(prop,val){
  if(typeof prop=="object")Object.keys(prop).forEach(e=>this.attr(e,prop[e]))
  else if(prop&&val!==undefined){
    if(prop.startsWith("on"))this.on(prop,val)
    else {if(this.raw.hasAttribute(prop))this.raw[prop]=val
    else this.raw.setAttribute(prop,val)}
  } else if(prop&&val===undefined){
    if(this.raw.hasAttribute(prop))return this.raw[prop]||""
    else return this.raw.getAttribute(prop)||""
  }
  
  return this
}


Element.prototype.hasAttr=function(prop){
  return this.raw.hasAttribute(prop)
}