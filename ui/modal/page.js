app.page=function Page(url,opt={}){
  x=new Modal(`<iframe style="width:100%;height:100%;border:0;padding:0;margin:0;" src="${url+(url.includes("?")?"&":"?")+Object.keys(opt.query||{}).filter(e=>e).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(opt.query[e])}`).join("&")}">iframe not supported</iframe>`)
  x.open()
  return this
}
