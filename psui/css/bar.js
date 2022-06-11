css.selector("bar",{
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  overflow:"hidden",
  boxSizing:"border-box",
  flex:"none",
  
  width:"100%",
  height:"64px",
  boxShadow:"0px 0px 4px 4px var(--shd)",
  background:"var(--bg)",
  color:"var(--hue)",
  opacity:.9,
  zIndex:2,
  padding:"8px",
  
  position:"sticky",
  top:"0px",
  
  color:"var(--hue)",
  fontSize:"1.35rem",
  whiteSpace:"nowrap",
  textOverflow:"ellipsis",
  overflow:"hidden"
})

.selector(`bar[type="curved"]`,{
  margin:"0px 10px 10px 10px",
  width:"calc(100% - 20px)",
  borderRadius:"0px 0px 12px 12px",
})

.selector(`bar[type="matte"]`,{
  margin:"10px",
  width:"calc(100% - 20px)",
  borderRadius:"12px",
  top:"10px"
})

.selector(`bar[type="solid"]`,{
  color:"white",
  background:"var(--hue)"
})

.selector(`bar[type="outline"]`,{
  margin:"10px",
  width:"calc(100% - 20px)",
  borderRadius:"12px",
  borderBottom:"2px solid var(--hue)",
  top:"10px",
})

.selector("bar text,bar input",{
  marginRight:"auto"
})

.selector("svg",{
  height:"24px",
  width:"24px",
  margin:"0px 6px"
})

return undefined
