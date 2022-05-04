const body=new Element(document.body)
app.body=body


css.theme(app.manifest.theme||"light")

const script = scriptFactory()
script(app.manifest.main,{prepend:"body.parent().add(app.globalCSS)",append:"app.load='complete';"}).then(e=>e!==undefined?console.log(e):"").catch(console.error)
