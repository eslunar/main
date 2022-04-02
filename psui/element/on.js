Element.prototype.on=function EventOn(event,callback){
  /*save event as separate*/this.raw.events=this.raw.events||{}
  this.raw.events["on"+event]=callback
  /*register event on ui thread*/self.postMessage(["event",{from:app.manifest.id,id:this.raw.attributes._,type:"on"+event}])
  return this
}
