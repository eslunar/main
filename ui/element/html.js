Element.prototype.html=function(...args){
  if(args.length)this.raw.innerHTML=args.join("")
  else return this.raw.innerHTML
  return this
}