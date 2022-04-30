const body=new Element(document.body)
app.body=body
const mutant=new MutationObserver(e=>e.forEach(e=>{}))
mutant.observe(body.raw,{attributes:true,childList:true,subtree:true})


css.theme(app.manifest.theme||"light")

const script = scriptFactory()
script(app.manifest.main,{prepend:"body.html('').parent().add(app.globalCSS)"}).then(e=>e!==undefined?console.log(e):"").catch(console.error)
