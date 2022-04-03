Element.prototype.list=function List(list){
  if(!this.attr("template"))this.attr("template",encodeURIComponent(this.html()))
  
  this.html(...list.map(e=>{
    let str = decodeURIComponent(this.attr("template"))
    
    Object.keys(e).forEach(x=>str=str.replaceAll(`{${x}}`,e[x]))
    return str
  }))
  return this
}
