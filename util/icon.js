function InjectIcon(type,css){
  let res = Fetch(app.manifest.root+"/icons/"+String(type).trim()+".svg")
  if(res.status==200)return res.body
  return "Invalid icon"
}
