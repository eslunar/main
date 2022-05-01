Element.prototype.queryAll=function(q){
  return __queer__(this.children(true),q)

}

Element.prototype.query=function(q){
  return this.queryAll(q)[0]
}

const __queer__ = function(ref,query){
  ref=ref.filter(e=>e)
  let test=function(prop,val){
    if(prop instanceof RegExp)return prop.test(val)
    else return val==prop
  }
  
  /*check type*/if("type" in query)ref=ref.filter(e=>test(query.type,e.raw.tagName.toLowerCase()))
  
  /*check id*/if("id" in query)ref=ref.filter(e=>test(query.type,e.attr("id")))
  
  /*check class*/if("class" in query)ref=ref.filter(e=>test(query.class,e.attr("class")))
  
  /*check text*/if("text" in query)ref=ref.filter(e=>test(query.text,e.text()))
  
  /*check html*/if("html" in query)ref=ref.filter(e=>test(query.text,e.html()))
  
  /*check style*/if("css" in query)Object.keys(query.css).forEach(e=>ref=ref.filter(x=>test(query.css[e],x.css(e))))
  

  /*check attr*/if("attr" in query)Object.keys(query.attr).forEach(e=>ref=ref.filter(x=>test(query.attr[e],x.attr(e))))
  
  /*direct parent*/if("parent" in query)ref=ref.filter(e=>__queer__([e.parent()],query.parent)[0])
  
  /*direct child*/if("child" in query)ref=ref.filter(e=>__queer__(e.children(),query.child)[0])
  
  /*all decsendent children*/if("children" in query)ref=ref.filter(e=>__queer__(e.children(true),query.children)[0])
  
  /*previous and next sibling*/if("sibling" in query)ref=ref.filter(e=>__queer__([e.previousSibling(),e.nextSibling()],query.sibling)[0])
  
  
  if(query.position=="first")ref=[ref[0]]
  if(typeof query.position == "number")ref=[ref[query.position]||ref.pop()]
  if(query.position=="last")ref=[ref.pop()]
  
  ref=ref.filter(e=>e)
  return ref
}
