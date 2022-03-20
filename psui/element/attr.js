module.exports=function NodeAttr(prop,val){
  let stamp=this.raw.attributes._
  if(typeof prop=="object") Object.assign(this.raw.attributes,prop)
  else if(prop&&val!=undefined)this.raw.attributes[prop]=val
  else if(prop&&val==undefined)return this.raw.attributes[prop]||""
  else if(!prop&&!val)return this.raw.attributes
  else return this
  this.raw.attributes._=stamp
  this.refresh("attr") 
  return this
}
