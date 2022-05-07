app.page=function Page(url,opt={}){
  localStorage.temp_cache=JSON.stringify(opt)
  x=new Modal(`<iframe style="width:100%;height:100%;border:0;padding:0;margin:0;" src="${url+(url.includes("?")?"&":"?")+Object.keys(opt.query||{}).filter(e=>e).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(opt.query[e])}`).join("&")}">iframe not supported</iframe><flex fill x=center y=center style="position:fixed;z-index:6;background:var(--shadow);top:0;left:0;"><load></load></flex>`)
  x.element.query({type:"iframe"}).on("load",function(){this.nextSibling().remove()})
  x.open()
  return this
}
