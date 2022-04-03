const store ={
  raw:{},
  get(prop){
    return this.raw[prop]
  },
  set(prop,val){
    this.raw[prop]=JSON.parse(JSON.stringify(val))
    app.send("store",{from:app.manifest.id,data:this.raw})
    return this
  }
}
