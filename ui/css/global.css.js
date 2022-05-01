/*variables*/css.selector(":root",{
  "--hue":"#e91e63",
  "width":"100%",
  "height":"100%",
})


css.selector("body",{
  padding:0,
  border:0,
  margin:0,
  
  width:"100%",
  height:"100%",
  overflow:"scroll",
  position:"relative",
  
  
  background:"var(--bg)",
  color:"var(--text)",
  
  display:"flex",
  flex:"0 0 auto",
  alignItems:"flex-start",
  justifyContent:"flex-start",
  flexDirection:"column",
  
})

css.selector("[fill]",{
  width:"100%",
  height:"100%"
}).selector("[fill=\"x\"]",{
  width:"100%"
}).selector("[fill=\"y\"]",{
  height:"100%"
})


css.selector("[hue]",{
  color:"var(--hue)"
}).selector("[bold]",{
  fontWeight:"bold"
})


