Element.prototype.text=function(...args){
  if(args.length)this.raw.innerText=args.join("")
  else return this.raw.innerText
  return this
}

