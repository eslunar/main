const body=new Element(document.body)
app.body=body


css.theme(app.manifest.theme||"light")

const script = scriptFactory()
script(app.manifest.main,{prepend:"body.parent().add(app.globalCSS);"+(app.manifest.flags.includes("dev")?"await script('https://cdn.jsdelivr.net/npm/eruda@2.4.1/eruda.min.js',{extend:false});eruda.init()":""),append:"app.loadState='complete';"}).then(e=>e!==undefined?console.log(e):"").catch(console.error)
