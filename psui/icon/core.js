function Icon(path="alarm",css={},opt=""){
  let obj=new Element("<icon></icon>")
  obj.icon=function(path="alarm"){
    obj.html(Fetch(app.manifest.root+"/icons/"+String(path).trim()+".svg").body||"xxx")
    return this
  }
  
  obj.icon(path).css(css)
  return obj
}
