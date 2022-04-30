Element.prototype.pop=function ListPop(...args){
  args.forEach(e=>(this.raw.list||[])[e]=null)
  this.raw.list=(this.raw.list||[]).filter(e=>e)
  this.list(this.raw.list)
  return this
}
