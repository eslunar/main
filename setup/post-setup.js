const body=new Element(document.body)
app.body=body
/*init console*/if(app.manifest.flags.includes("console")){
  let erudaC=new Element("<div>")
  body.parent().add(erudaC)
  eruda.init({container:erudaC.raw})
}

const script = scriptFactory()
script(app.manifest.main||"/index")
.then(e=>{
  app.loadState="complete"
})

