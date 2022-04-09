/*variables*/css.selector(":root",{
  "--hue":"#e91e63",
  "--text":"#454545",
  "--bg":"#fcfcfc",
  "--bg2":"#dcdcdc",
  "--shadow":"#00000015",
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
})

css.selector("[stack=bottom] > *",{
  position:"absolute",
  marginTop:"auto"
})
