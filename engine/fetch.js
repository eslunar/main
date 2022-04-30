app.fetch=(path="index.js",opt={})=>new Promise((res,rej)=>{
  let req=new XMLHttpRequest()
  path=new URL(path,location.href)
  req.open(opt.method||"GET",path,false,opt.username,opt.password)
  req.onload=()=>res({
    status:req.status,
    body:req.response,
    text:req.responseText,
  })
  req.onerror=()=>rej
  req.send(opt.body)
})
