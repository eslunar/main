module.exports=function NodeText(...args){
  if(args.length){
    this.raw.children=args.map(e=>String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"))
  } else {
    return this.nodes(true).filter(e=>typeof e!="object").map(e=>String(e).replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&amp","&")).join("")
  }
  
  this.refresh("html")
  return this
}
