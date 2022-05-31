function scriptFactory(scope=app.scope.split("?")[0]){
  return async function script(path,...args){
    /*check if is full path*/let iu = new RegExp('^([a-z]+://|//)', 'i')
    /*connect packages*/path=Object.keys(app.manifest.packages).includes(path)?app.manifest.packages[path]:path;
    /*traverse relative paths*/path=new URL(/*append .js extention*/iu.test(path)?path:path.split("/").pop().includes(".")?path:path+".js",scope).href
    
    
    /*init res for...*/let res;
    if(app.manifest.flags.includes("fresh")||(!sessionStorage.getItem(path))){
      /*scripts are cached in session storage and reused to save bandwidth and speed up cross referenced resources*/
    /*fetch script*/res=await fetch(path,{mode:"no-cors"}).catch(e=>{return {offline:true}})
    /*retry if offline*/if(res.offline)return await script(path)
    /*continue if online*/if(res.ok){
      res=await res.text().catch(e=>null)
      /*if retrieving body failed, maybe network changed*/if(res==null)return await script(path)
      /*if everything goes a ok*/
      sessionStorage.setItem(path,res)
      if(app.manifest.flags.includes("log"))console.log("importing",path)
    } else return {error:res.status}} else {
      res=sessionStorage.getItem(path)
      if(app.manifest.flags.includes("log"))console.log("stale importing",path)
    }
    
    
    
    try{
      /*check if data is a json object*/
      return JSON.parse(res)
    }catch(e){
      return await Function(`return async function Module(){
       const Page=pageGen("${path}")
       const script=scriptFactory("${path}")
       const scripts=scriptsFactory("${path}")
       ${res}
       return {}
     }`)()(...args)
    }
  }
}

