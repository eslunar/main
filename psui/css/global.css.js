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
  overflow:"auto",
  position:"relative",
  
  
  background:"var(--bg)",
  color:"var(--text)",
  
  display:"flex",
  flex:"none",
  alignItems:"flex-start",
  justifyContent:"flex-start",
  flexDirection:"column",
  
})

css.selector("[fill=\"\"]",{
  width:"100%",
  height:"100%"
}).selector("[fill=x]",{
  width:"100%"
}).selector("[fill=y]",{
  height:"100%"
})

css.selector("[stack=bottom] > *",{
  position:"absolute",
  bottom:0,
})

css.selector("[hue=\"\"]",{
  color:"var(--hue)"
}).selector("[bold]",{
  fontWeight:"bold"
})
