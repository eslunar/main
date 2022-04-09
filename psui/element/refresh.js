Element.prototype.refresh=function RefreshNodes(type){
  let elems=this.nodes()
  elems.splice(0,0,this.raw)
  
  elems.filter(e=>e).forEach(function(e){
    let id=e.attributes._
    /*set ID*/e.attributes._=id||"_"+app.uuid(10)
    id=e.attributes._
    
    /*create parental binding*/e.children.filter(e=>typeof e=="object").forEach(n=>n.parent=e)
    
    /*save unvalued attributes*/Object.keys(e.attributes).forEach(c=>e.attributes[c]===null?e.attributes[c]="":"")
    
    
    /*EVENT MANAGER*/
    /*create event instance/app.events[id]=app.events[id]||{}
        /*parse events/Object.keys(e.attributes).filter(e=>e.startsWith("on")).forEach(x=>{
      
      /*Save events with registrars/app.events[id][x]={
        exec:typeof e.attributes[x]=="string"?new Function(`return ${String(e.attributes[x]).includes("(")?e.attributes[x]:e.attributes[x]+"()"}`):e.attribtutes[x],
        ref:e
      }
      delete e.attributes[x]
      /*register event on ui thread/self.postMessage(["event",{from:app.manifest.id,id:e.attributes._,type:x}])
    })*/
    
    /*bind to anchors*/
    
  })
  
  /*if reflection type is html*/if(type=="html")app.send("reflect",{from:app.manifest.id,id:this.attr("_"),html:this.html()})
  /*if reflection type is attr*/if(type=="attr")app.send("reflect",{from:app.manifest.id,id:this.attr("_"),attr:this.attr()})
  
  
  return this
}
