css.selector(`[fill=""],[fill="both"]`,{
  minWidth:"100%",
  minHeight:"100%"
}).selector(`[fill="width"]`,{
  minWidth:"100%"
}).selector(`[fill="height"]`,{
  minHeight:"100%"
})

css.selector(`[block=""],[block="both"]`,{
  width:"100vw",
  height:"100vh"
}).selector(`[block="width"]`,{
  width:"100vw"
}).selector(`[block="height"]`,{
  height:"100vh"
})

css.selector(`[sticky=""],[sticky="top"]`,{
  position:"sticky",
  top:0
}).selector(`[sticky="bottom"]`,{
  position:"sticky",
  bottom:0
})

.selector("[hue]",{
  color:"var(--hue)"
})

return undefined
