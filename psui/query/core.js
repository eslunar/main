Element.prototype.query=function QueryLang(query){
  return __query__(this.nodes(),query)[0]
}

Element.prototype.queryAll=function QueryLangAll(query){
  return __query__(this.nodes(),query)
}

const __query__ = function(children,query){
  let kids=children;
  
  /*checks for rx or direct matches between two values*/const test=(sub,testr)=>{
    //console.warn(sub,testr)
    if(testr instanceof RegExp)return testr.test(sub); else if(typeof testr=="boolean")return !!sub; else return testr==sub}
  
  /*id attribute*/if(query.id)kids=kids.filter(e=>test(e.attributes.id,query.id))
  
  /*tag name*/if(query.tag)kids=kids.filter(e=>test(e.tagName,query.tag))
  
  /*class values*/if(query.class)kids=kids.filter(e=>test(e.attributes.class,query.class))
  
  /*common attributes*/if(query.attr)kids=kids.filter(e=>{
    let r=true
    Object.keys(query.attr).forEach(x=>test(e.attributes[x],query.attr[x])?"":(r=false))
    return r
  })
  
  /*common css*/if(query.css)kids=kids.filter(e=>{
    let r=true
    Object.keys(query.css).forEach(x=>test(new Element(e).css(x),query.css[x])?"":(r=false))
    return r
  })
  
  
  /*get the direct parent of an element*/if(query.parent)kids=kids.filter(e=>{
    if(e.parent){
      if(__query__([e.parent],query.parent).length)return true
      return false
    }
    return false
  })
  
  /*get all ascending parents of an element*/if(query.ancestor)kids=kids.filter(e=>{
    let prnt=[]
    let fndr=function(e){
      if(e.parent){
        prnt.push(e.parent)
        fndr(e.parent)
      } }
      fndr(e)
      if(__query__(prnt,query.ancestor).length)return true
    return false
  })
  
  /*get the root parent of an element*/if(query.root)kids=kids.filter(e=>{
    let prnt=[]
    let fndr=function(e){
      if(e.parent){
        prnt.push(e.parent)
        fndr(e.parent)
      } }
      fndr(e)
      let root=prnt.pop()
      if(root)if(__query__([root],query.root).length)return true
    return false
  })
  
  /*get all direct children of an element*/if(query.child)kids=kids.filter(e=>{
    if(__query__(e.children.filter(e=>typeof e=="object"),query.child).length)return true
    return false
  })
  
  /*get all descending children*/if(query.descendant)kids=kids.filter(e=>{
    if(__query__(new Element(e).nodes(),query.descendant).length)return true
    return false
  })
  
  /**/
  
  if(query.text)kids=kids.filter(e=>test(new Element(e).text(),query.text))
  
  if(query.html)kids=kids.filter(e=>test(new Element(e).html(),query.html))
  
  kids=kids.map(e=>new Element(e))
  return kids
}
