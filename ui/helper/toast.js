app.toast=function(text,opt){
  body.queryAll({type:"toast"}).remove()
  const toast=new Element(`<toast>${text}</toast>`).css({
    position:"fixed",
    zIndex:7,
    bottom:"20px",
    right:"20px",
    marginLeft:"100px",
    padding:"12px 10px",
    background:"#303030",
    borderRadius:"12px",
    color:"white",
    boxShadow:"0 0 4px 4px #00000025",
    opacity:.78
  })
  body.add(toast)
  app.after(2800,e=>toast.remove())
  return app
}
