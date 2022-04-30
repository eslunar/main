Element.prototype.push=function ListPush(...args){
  let all=(this.raw.list||[]).concat(args.flat(9))
  this.list(all)
  return this
}