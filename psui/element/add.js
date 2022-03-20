module.exports=function Add(...args){
  args.forEach(e=>{
    if(!this.raw.children.includes(e.raw||e))this.raw.children.push(e.raw||e)
  })
  this.refresh("html")
  return this
}
