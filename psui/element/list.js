Element.prototype.list=function List(list){
  if(!this.raw.template)return console.error("Creating a list without a template")
  this.html(...list.map(e=>{
    let str = typeof this.raw.template=="obj"?app.html.stringify(this.raw.template.raw||this.raw.template):String(this.raw.template)
    
    Object.keys(e).forEach(x=>str=str.replaceAll(`{${x}}`,e[x]))
    return str
  }))
  this.raw.list=list
  return this
}
