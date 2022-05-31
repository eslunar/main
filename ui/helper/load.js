app.load=function(state){
  if(state){
    if(!body.query({type:"loader"}))body.add(`<loader style="background:#00000025;top:0;left:0;width:100vw;height:100vh;z-index:6;position:fixed;display:flex;align-items:center;align-content:center;justify-content:center;"><load></load></loader>`)
  } else {
    body.queryAll({type:"loader"}).forEach(e=>e.remove())
  }
  return this
}
