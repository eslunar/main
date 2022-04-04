const Fetch=function(url="https://google.com",opt={}){
  let res = {}
  try{
    let request=new XMLHttpRequest()
    request.open(opt.method||'GET',url, false);
    request.send(null)
    
    res.body=request.responseText
    res.status=request.status
  } catch(e){
    res.error=e
  }
  return res
}
