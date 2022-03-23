const console={
  log(...args){
    args.push(` [ ${app.manifest.id} ]`)
    app.send("log",args)
    return this
  },
  
  debug(...args){
    if((app.manifest.flags||"").includes("dev"))this.log("%c🔧 DevLog - ","color:cyan;font-weight:600",...args)
  },
  warn(...args) {
    this.log("%cWarning - ","color:orange;font-weight:600",...args)
    return this
  },
  error(...args) {
    this.log("%cError - ","color:red;font-weight:600",...args)
    return this
  },
  
}
