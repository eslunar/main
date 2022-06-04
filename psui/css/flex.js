css.selector(`flex, [type="flex"]`,{
  display:"flex",
  flexDirection:"column",
  alignItems:"flex-start",
  alignContent:"flex-start",
  justifyContent:"flex-start",
  overflow:"hidden",
  boxSizing:"border-box",
  flex:"none"
})


/*set direction which elements are stacked*/
.selector(`flex[flow="row"], [type="flex"][flow="row"]`, {
  flexDirection:"row"
}).selector(`flex[flow="column"], [type="flex"][flow="column"]`, {
  flexDirection:"column"
}).selector(`flex[flow="row-reverse"], [type="flex"][flow="row-reverse"]`, {
  flexDirection:"row-reverse"
}).selector(`flex[flow="column-reverse"], [type="flex"][flow="column-reverse"]`, {
  flexDirection:"column-reverse"
})


/*element scrollable, default false*/
.selector(`flex[scroll=""],flex[scroll="true"], [type="flex"][scroll=""],[type="flex"][scroll="true"]`,{
  overflow:"auto",
}).selector(`flex[scroll="false"], [type="flex"][scroll="false"]`,{
  overflow:"hidden",
})

/*snap to items*/
.selector(`flex[snap=""],flex[snap="true"],[type="flex"][snap=""],[type="flex"][snap="true"]`,{
  scrollSnapType:"both mandatory"
})
.selector(`flex[snap=""] *,flex[snap="true"] *,[type="flex"][snap=""] *,[type="flex"][snap="true"] *`,{
  scrollSnapAlign:"start",
})

/*justify short hand*/
.selector(`flex[justify=""], [type="flex"][justify=""]`, {
  justifyContent:"center"
}).selector(`flex[justify="center"], [type="flex"][justify="center"]`, {
  justifyContent:"center"
}).selector(`flex[justify="start"], [type="flex"][justify="start"]`, {
  justifyContent: "flex-start"
}).selector(`flex[justify="end"], [type="flex"][justify="end"]`, {
  justifyContent: "flex-end"
}).selector(`flex[justify="between"], [type="flex"][justify="between"]`, {
  justifyContent: "space-between"
}).selector(`flex[justify="around"], [type="flex"][justify="around"]`, {
  justifyContent: "space-around"
}).selector(`flex[justify="evenly"], [type="flex"][justify="evenly"]`, {
  justifyContent: "space-evenly"
})

/*stack items onto each other*/
.selector("flex[stack=\"\"] > *,fex[stack=\"top\"] > *",{
  position:"absolute"
}).selector("flex[stack=\"bottom\"] > *",{
  position:"absolute",
  bottom:0,
})

/*align short hand*/
.selector(`flex[align=""], [type="flex"][align=""]`, {
  alignItems:"center"
}).selector(`flex[align="center"], [type="flex"][align="center"]`, {
  alignItems:"center"
}).selector(`flex[align="start"], [type="flex"][align="start"]`, {
  alignItems: "flex-start"
}).selector(`flex[align="end"], [type="flex"][align="end"]`, {
  alignItems: "flex-end"
}).selector(`flex[align="between"], [type="flex"][align="between"]`, {
  alignItems: "space-between"
}).selector(`flex[align="around"], [type="flex"][align="around"]`, {
  alignItems: "space-around"
}).selector(`flex[align="evenly"], [type="flex"][align="evenly"]`, {
  alignItems: "space-evenly"
})

/*card*/
.selector(`flex[card=""], [type="flex"][card=""]`, {
  borderRadius:"12px",
  boxShadow:"0px 0px 4px 4px var(--shd)"
})
return function flex(text = "", attr = {}) {
  const el = new Element(`<flex>`).attr(attr)
  typeof text == "object" ? el.add(text) : el.html(text)
  return el
}
