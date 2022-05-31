Element.prototype.css=function(prop,val){
  if(typeof prop=="object")Object.keys(prop).filter(e=>e).forEach(e=>this.css(e,prop[e]))
  else if(val!==undefined)this.raw.style[prop.trim().replaceAll(" ","-")]=String(val)
  else return this.raw.style[prop.trim().replaceAll(" ","-")]||""
  return this
}

Elements.prototype.css = function(...args) {
  this.raw.forEach(e => e.css(...args))
  return this
}
