async function request(url,opt={}){
  const q = (url.includes("?") ? "&" : "?") + Object.entries(opt.query || {}).map(e => `${encodeURIComponent(e[0])}=${encodeURIComponent(String(e[1]))}`).join("&")

  let req=await fetch(url+q).catch(e=>{return {offline:true}})
  const {status}=req
  
  
  if(req.offline)return await request(url,opt)
  if(!req.ok)return {error:status}
  req=await req.arrayBuffer().catch(e=>null)
  if(req===null)/*body fetching failed but headers are true so... retry*/return await request(url,opt)
  const blob=new Blob([req])
  const text=await blob.text().catch(e=>"")
  let json;
  try{json=JSON.parse(text)}catch(e){json={}}
  const res={
    status,
    blob,
    text,
    json,
    buffer:req,
  }
  
  return res
}
