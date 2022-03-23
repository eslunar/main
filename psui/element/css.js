Element.prototype.css=function NodeCSS(prop,val){
  let css=this.raw.attributes.style||""
  css=Object.assign({},...css.split(";").filter(e=>e).map(e=>{return {[e.split(":")[0]]:e.split(":")[1]}}))
  
  if(typeof prop=="object") Object.assign(css,prop)
  else if(prop&&val!==undefined)css[prop]=val
  else if(prop&&val===undefined)return css[String(prop).split("").map(e=>/[A-Z]/.test(e)?" "+e.toLowerCase():e).join("").trim().replaceAll(" ","-")]||""
  else if(!prop&&!val)return css
  else return this
  
  /*cleans up css before packaging*/Object.keys(css).forEach(e=>{
    let key=e
    let value=css[e]
    delete css[e]
    
    key=key.split("").map(e=>/[A-Z]/.test(e)?" "+e.toLowerCase():e).join("").trim().replaceAll(" ","-")
    css[key]=value
  })
  
   /*convert css to string types*/Object.keys(css).forEach(e=>css[e]===null?delete css[e]:css[e]=String(css[e]))
  this.attr("style",Object.keys(css).map(e=>e+=":"+css[e]).join(";")||null)
  return this
  /*the css module does not refresh because its only a sub extend of the attr module*/
}
