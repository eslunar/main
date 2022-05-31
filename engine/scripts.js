function scriptsFactory(scope=app.scope.split("?")[0]){
  return async function scripts(...paths){
    /*check if is full path*/let iu = new RegExp('^([a-z]+://|//)', 'i')
    /*connect packages*/paths=paths.map(e=>Object.keys(app.manifest.packages).includes(e)?app.manifest.packages[e]:e)
    /*traverse relative paths*/paths=paths.map(e=>new URL(/*append .js extention*/iu.test(e)?e:e.split("/").pop().includes(".")?e:e+".js",scope).href)
    
    /*set module default name if is anonymous or non-function*/let dn=paths.map(e=>e.split("/").pop().split(".")[0])
    paths=await Promise.all(paths.map(e=>script(e)))
    
    return Object.assign({},...paths.map((e,i)=>{
      return {[typeof e=="function"&&e.name?e.name:dn[i]]:e}
    }).filter(e=>Object.entries(e)[0][1]!==undefined))
  }
}
