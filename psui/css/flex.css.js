css.selector("flex",{
  display:"flex",
  position:"relative",
  overflow:"auto",
  flex:"none",
  alignItems:"flex-start",
  justifyContent:"flex-start",
  flexDirection:"column",
})

css.selector("flex[flow=column]",{
  flexDirection:"column"
})

css.selector("flex[flow=row]",{
  flexDirection:"row"
})

css.selector("flex[flow=column-reverse]",{
  flexDirection:"column-reverse"
})

css.selector("flex[flow=row-reverse]",{
  flexDirection:"row-reverse"
})

css.selector("flex[snap]",{
  scrollSnapType:"y mandatory"
})

css.selector("flex[snap]>*",{
  scrollSnapAlign:"start"
})