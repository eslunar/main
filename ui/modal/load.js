app.load=function(state){
  if(state){
    if(!body.query({id:"loading-modal"}))body.add(`<flex id=loading-modal fill x=center y=center style="position:fixed;z-index:6;background:var(--shadow);top:0;left:0;"><load></load></flex>`)
  } else {
    body.queryAll({id:"loading-modal"}).forEach(e=>e.remove())
  }
  return this
}
