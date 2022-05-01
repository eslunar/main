Element.prototype.template=function(str){
  if(str)this.attr("template",encodeURIComponent(str+""))
  else return decodeURIComponent(this.attr("template"))
  return this
}

Element.prototype.list=function(list){
  if(this.attr("template")){
    const temp=decodeURIComponent(this.attr("template"))
    
    
  }
  return this
}