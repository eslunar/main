function scriptFactory(scope=location.href.split("?")[0]){
  return (path="index",opt={})=>new Promise((res,rej)=>{
   /*require data based on where the file was found, like in nodejs */path=new URL(path,scope).href
  /*appends a .js extension to files without extensions*/path.split("/").pop().includes(".")?"":opt.extend===true||opt.extend===undefined?path+=".js":""
  
  if(app.manifest.flags.includes("dev"))console.log("require "+path)
  
  if(app.scripts[path]===undefined){
    let x = new XMLHttpRequest()
    x.onerror=()=>console.error(`Importing ${path} failed`)
    x.onload=()=>x.status>=200&&x.status<=299?(app.scripts[path]=x.responseText,new Function(`
  return async function Module(){
    const script=scriptFactory("${path}")
    ${opt.prepend||""}
    ${app.scripts[path]}
    ${opt.append||""}
    return {}
  }
`)()(...(opt.args||opt.arguments||[])).then(res).catch(rej)):rej(x)
    x.open("GET",path)
    x.send()
  } else {
    new Function(`
      return async function Module(){
        const script=scriptFactory("${path}")
        ${opt.prepend||""}
        ${app.scripts[path]}
        ${opt.append||""}
        return {}
      }
    `)()(...(opt.args || opt.arguments || [])).then(res).catch(rej)
  }
  })
}
