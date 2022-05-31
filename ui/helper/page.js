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
    this.frame.attr("src",URL.createObjectURL(new Blob([`
  <html>
  <base href="${url}" />
  <script src="${sessionStorage.getItem("prep")}" scope="${url}">${mn}</script>
  </html>
  `],{type:"text/html"})))
    .raw.onload=e=>URL.revokeObjectURL(this.frame.attr("src"))
    new Modal(this.frame).open()
    return this
  }
  return this
}}
