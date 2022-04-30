Element.prototype.select=function ListSelect(cb){
  this.on("click",e=>{
    let parent,index,item;
    parent=this.children().map((x,y)=>{
        
      
      if(x.raw==e.target.raw){
        return x
      } 
      return undefined
    }).filter(e=>e)
    cb(parent.length)
  })
}

function MorningRoutine(){
  if("depressed" in morning){
    start.coding && stay.awesome;
  }
}
