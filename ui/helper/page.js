function pageGen(scope){return function Page(url="index",opt={}){
  let iu = new RegExp('^([a-z]+://|//)', 'i')
    /*set intent data*/sessionStorage.intent=opt.intent||""
    /*traverse relative paths*/url=new URL(/*append .js extention*/iu.test(url)?url:url.split("/").pop().includes(".")?url:url+".js",scope).href
    /*set the new pages' manifest*/
    let mn=opt.manifest||{}
    mn.main=url
    sessionStorage.manifest=JSON.stringify(mn)
    
  this.frame=new Element(`<iframe src="${location.origin}${location.pathname}?${app.uuid(80)}">`)
  .css({width:"100%",height:"100%",border:0,...(opt.css||{})})
  
  
  this.open=function(){
    new Modal(this.frame).open()
    return this
  }
  return this
}}
