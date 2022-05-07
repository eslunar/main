app.snack=function(text,event){
  const snack=new Element(`<flex flow=row fill=x type=snack  ><text style=padding-left:10px;max-width:80%;margin-right:auto >${text||"shcnack"}</text><text style=padding-right:10px id=butt  hue >ok</text></flex>`).css({
    position:"fixed",
    zIndex:7,
    bottom:0,
    left:0,
    padding:"10px 0px",
    background:"var(--bg)",
    boxShadow:"0 0 4px 4px var(--shadow)"
  })
  body.add(snack)
  app.after(2800,e=>snack.remove())
  return app
}
