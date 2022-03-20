/*A function factory for the require function*/

const requireFactory=function(scope){
  let request;
  scope=scope.split("/");scope.pop();scope=new URL(scope.join("/"),self.location.origin)
  return function(path,opt={}){
    path=String(path)
    /*auto append .js to file*/if(path.startsWith("/")||path.startsWith("."))if(!path.split("/").pop().includes("."))path+=".js";
    
    /*Manage current path*/
    path=/*default rooted paths*/path.startsWith("/")||path.startsWith("./")||path.startsWith("../")?new URL(path,scope.href).href:
    /*direct urls*/path.startsWith("http://")||path.startsWith("https://")?path:
    /*modules*/manifest.modules[path]||self.origin;
    
    if(opt.record==undefined||opt.record==true)console.debug("require "+path)
    
    
    if(__cache__[path]){
      request={
        responseText:__cache__[path],
        responseURL:path,
        status:200
      }
    } else {
    request=new XMLHttpRequest()
    request.open('GET',path, false);
    request.send(null)}
    
    /*add request to cache*/__cache__[path]=request.responseText;
    
    /*support redirects changing the scope of the script*/path=request.responseURL
    
    if (request.status==200){
    if(opt.async)return new Function(`return async function(){try{let module={};let require=requireFactory("${path}");${request.responseText};return module.exports||{}}catch(e){console.log("%cModule Error","color:red;font-weight:600",\`\n\${e.name}: \${e.message}\nin file ${path}\`);self.close()}}`)(/*double exec due to child func*/)(...(opt.args||opt.arguments||[]));
    else return new Function(`try{let module={};let require=requireFactory("${path}");${request.responseText};return module.exports||{}}catch(e){console.log("%cModule Error","color:red;font-weight:600",\`\n\${e.name}: \${e.message}\nin file ${path}\`);self.close()}`)(...(opt.args||opt.arguments||[]))
    
    }
    
   /* try{return eval(`(${opt.async?"async":""} function(){
  const module={}
  let require=requireFactory("${path}")
  ${request.responseText}
  
  return module.exports||{}
})(...(opt.arguments||[]))`)}catch(e){console.log("%cModule Error","color:red;font-weight:600",`\n${e.name}: ${e.message}\nin file ${path}`)}*/
else console.log("%cModule Error","color:red;font-weight:600",`\nCannot require module ${path}`)

  }
}











