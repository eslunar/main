Element.prototype.attr=function NodeAttr(prop,val){
  let stamp=this.raw.attributes._
  if(typeof prop=="object") Object.assign(this.raw.attributes,prop)
  else if(prop&&val!==undefined)this.raw.attributes[prop]=val
  else if(prop&&val===undefined)return this.raw.attributes[prop]||""
  else if(!prop&&!val)return this.raw.attributes
  else return this
  this.raw.attributes._=stamp
  /*convert attributes to string types*/Object.keys(this.raw.attributes).forEach(e=>this.raw.attributes[e]===null?delete this.raw.attributes[e]:this.raw.attributes[e]=String(this.raw.attributes[e]))
  this.refresh("attr") 
  return this
}
