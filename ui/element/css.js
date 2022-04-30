Element.prototype.css=function(prop,val){
  let css=this.attr("style")
  if(typeof prop=="object")Object.keys(prop).forEach(e=>this.css(e,prop[e]))
  else if(val!==undefined)css[prop.trim().replaceAll(" ","-")]=val
  else if(prop&&val===undefined)return css[prop.trim().replaceAll(" ","-")]
  return this
}
