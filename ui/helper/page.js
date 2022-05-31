function pageGen(scope){return function Page(url="index",opt={}){
  let iu = new RegExp('^([a-z]+://|//)', 'i')
    /*set intent data*/sessionStorage.intent=opt.intent||""
    /*traverse relative paths*/url=new URL(/*append .js extention*/iu.test(url)?url:url.split("/").pop().includes(".")?url:url+".js",scope).href
    /*set the new pages' manifest*/
    let mn=opt.manifest||{}
    mn.main=url
    mn=JSON.stringify(mn)
    
  this.frame=new Element(`<iframe>`)
  .css({width:"100vw",height:"100vh",border:0,...(opt.css||{})})
  
  
  this.open=function(){
    this.frame.attr("srcdoc",`<html>
  <base href="${url}" />
  <script src=${app.manifest.root}/ps.js scope="${url}">${mn}</script>
  </html>
  `)
    new Modal(this.frame).open()
    return this
  }
  return this
}}
