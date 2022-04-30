css.selector("flex",{
  display:"flex",
  position:"relative",
  overflow:"auto",
  flex:"0 0 auto",
  alignItems:"flex-start",
  justifyContent:"flex-start",
  flexDirection:"column",
})

css.selector("flex[flow=column]",{
  flexDirection:"column"
}).selector("flex[flow=row]",{
  flexDirection:"row"
}).selector("flex[flow=column-reverse]",{
  flexDirection:"column-reverse"
}).selector("flex[flow=row-reverse]",{
  flexDirection:"row-reverse"
})

css.selector("flex[snap]",{
  scrollSnapType:"y mandatory"
}).selector("flex[snap]>*",{
  scrollSnapAlign:"start"
})

css.selector("flex[align=center]",{
  alignItems:"center",
  justifyContent:"center"
}).selector("flex[align=start]",{
  alignItems:"flex-start",
  justifyContent:"flex-start"
}).selector("flex[align=end]",{
  alignItems:"flex-end",
  justifyContent:"flex-end"
})
