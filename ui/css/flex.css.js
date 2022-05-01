css.selector("flex",{
  display:"flex",
  position:"relative",
  overflow:"auto",
  flex:"0 0 auto",
  alignItems:"flex-start",
  justifyContent:"flex-start",
  flexDirection:"column",
})

css.selector("flex[flow=\"column\"]",{
  flexDirection:"column"
}).selector("flex[flow=\"row\"]",{
  flexDirection:"row"
}).selector("flex[flow=\"column-reverse\"]",{
  flexDirection:"column-reverse"
}).selector("flex[flow=\"row-reverse\"]",{
  flexDirection:"row-reverse"
})

css.selector("flex[snap]",{
  scrollSnapType:"both mandatory"
}).selector("flex[snap]>*",{
  scrollSnapAlign:"start"
})

css.selector("flex[align=\"center\"]",{
  alignItems:"center",
  justifyContent:"center"
}).selector("flex[align=\"start\"]",{
  alignItems:"flex-start",
  justifyContent:"flex-start"
}).selector("flex[align=\"end\"]",{
  alignItems:"flex-end",
  justifyContent:"flex-end"
})

css.selector("[stack] > *",{
  position:"absolute"
}).selector("[stack=\"bottom\"] > *",{
  position:"absolute",
  bottom:0,
}).selector("[blur]",{
  backdropFilter:"blur(3px)"
})

css.selector("flex[card]",{
  borderRadius:"12px",
  boxShadow:"0 0 3px 3px var(--shadow)",
  padding:"8px",
  margin:"5px"
})

css.selector("flex[edge]",{
  width:"calc( 100% - 20px)",
  marginLeft:"auto",
  marginRight:"auto",
}).selector("flex[edge=\"2\"]", {
  width: "calc( 100% - 40px)",
  marginLeft: "auto",
  marginRight: "auto",
})
