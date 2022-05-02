css.selector("bar",{
  display:"flex",
  flex:"0 0 auto",
  alignItems:"center",
  background:"var(--bg)",
  boxShadow:"0px 0px 4px 4px var(--shadow)",
  zIndex:2,
  color:"var(--hue)",
  opacity:.9,
  
  width:"calc(100% - 24px)",
  padding:"20px 12px",
  
  fontWeight:"bold",
  fontSize:"20px",
  
  position:"sticky",
  top:"0px"
})

css.selector("bar input,bar text",{
  padding:"0px",
  margin:"0 8",
  marginRight:"auto",
  color:"var(--hue)",
  fontSize:"20px",
  maxWidth:"65%"
})

css.selector("bar svg",{
  width:"25px",
  height:"25px",
  margin:"0px 5px",
  background:"transparent"
  
})
