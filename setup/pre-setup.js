app.version={
  beta:"0.0.1",
  alpha:"0.0.1"
}

app.query=Object.assign({},...location.search.slice(1).split("&").filter(e=>e).map(function loop(e){return {[decodeURIComponent(e.split("=")[0])]:decodeURIComponent(e.split("=")[1]||"")}}))

app.selectors={}
app.selectScan=function(children){
  children=children.map(e=>new Element(e))
  Object.keys(app.selectors).forEach(e=>{
    __queer__(children,app.selectors[e].query).forEach(x=>app.selectors[e].func(x))
  })
}

app.events={}
app.scripts={}

app.local=location.hostname=="localhost"
app.back=history.back