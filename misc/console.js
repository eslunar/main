const console={
  log(...args){
    self.postMessage(["c-log",args])
    return this
  },
  
  debug(...args){
    if(manifest.debug)this.log("%c🔧 Debug Message","color:cyan;font-weight:600","\n",...args)
  },
  warn(...args) {
    this.log("%cWarning","color:orange;font-weight:600","\n",...args)
    return this
  },
  error(...args) {
    this.log("%cError","color:red;font-weight:600","\n",...args)
    return this
  },
  
}
