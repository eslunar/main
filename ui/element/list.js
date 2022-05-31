Element.prototype.template=function(str){
  if(str)this.attr("template",encodeURIComponent(str+""))
  else return decodeURIComponent(this.attr("template"))
  return this
}

Element.prototype.list=function(list){
  if(this.attr("template")){
    const temp=decodeURIComponent(this.attr("template"))
    this.html("")
    this.html(...list.map(e=>{
      let t=temp
      Object.keys(e).forEach(x=>t=t.replaceAll(`{${x}}`,String(e[x])))
      return t
    }))
    
  }
  return this
}


Element.prototype.push=function(obj,pos){
  let temp=decodeURIComponent(this.attr("template"))
  
  if(temp){
    Object.keys(obj).forEach(x=>temp=temp.replaceAll(`{${x}}`,String(obj[x])))
    this.insert(temp,pos)
  }
  return this
}


Element.prototype.select=function(handler){
  this.on("click",e=>{
    if(app.target.raw!=this.raw){
      let parent=[app.target]
    let rec=el=>el.parent()&&el.parent().raw==this.raw?"":(parent.push(el.parent()),rec(el.parent()))
    rec(app.target)
    parent=parent.pop()
    handler({
      parent,
      index:parent.index(),
      target:app.target
    })
    
    }})
  return this
}

