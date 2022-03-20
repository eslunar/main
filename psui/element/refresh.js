module.exports=function RefreshNodes(type){
  let elems=this.nodes()
  elems.splice(0,0,this.raw)
  
  elems.forEach(e=>{
    /*set ID*/e.attributes._=e.attributes._||"id"+app.uuid(10)
    let id=e.attributes._
    /*create events instance*/app.events[id]=app.events[id]||{}
    /*parse events*/Object.keys(e.attributes).filter(e=>e.startsWith("on")).forEach(x=>{
      
      /*Save events with registrars*/app.events[id][x]={
        exec:typeof e.attributes[x]=="string"?new Function(`return ${e.attributes[x]}()`):e.attribtutes[x],
        registrar:e
      }
      delete e.attributes[x]
      /*register event on ui thread*/self.postMessage(["events",{id:id,type:x}])
    })
    
    e.children.filter(e=>typeof e=="object").forEach(n=>n.parent=e)
    
    
    
    if(type=="html"){
    /*check if element is added to body*/
    if(this.raw==app.body.raw)/*add straight to body*/self.postMessage(["dom",{ body:true, html:this.html() }]);
    else if(__query__([this.raw],{root:{tag:"body"}}))/*add to a query selected element*/self.postMessage(["dom",{stamp:this.attr("_"),html:this.html()}])
    
    }
    
    if(type=="attr"){
      if(this.raw==app.body.raw)/*add straight to body*/self.postMessage(["dom",{ body:true,attr:this.attr()}]);
    else if(__query__([this.raw],{root:{tag:"body"}}))/*add to a query selected element*/self.postMessage(["dom",{stamp:this.attr("_"),attr:this.attr()}])
    }
    
  })
  
  return this
}
