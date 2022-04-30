Element.prototype.on=function(event,val){
  this.attr("on"+event,val)
  return this
}