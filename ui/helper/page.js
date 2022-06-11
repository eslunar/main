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
  this.frame.raw.setAttribute("onload","this.nextElementSibling.remove()")
  
  
  this.open=function(){
    new Modal(`${this.frame.raw.outerHTML}<loader style="background:#00000025;top:0;left:0;width:100vw;height:100vh;z-index:6;position:fixed;display:flex;align-items:center;align-content:center;justify-content:center;"><load></load></loader>`).open()
    return this
  }
  return this
}}
