css.selector("*::-webkit-scrollbar",{
  width:"3px",
  height:"3px"
}).selector("*::-webkit-scrollbar-thumb",{
  background:"var(--hue)",
  borderRadius:"8px"
}).selector("*::-webkit-scrollbar-track",{
  background:"var(--shd)",
  borderRadius:"8px",
  margin:"8px"
})

.selector("[scrollbar=\"hidden\"]::-webkit-scrollbar",{
  display:"none"
}).selector("[scrollbar=\"gray\"]::-webkit-scrollbar-thumb",{
  background:"var(--txt)",
  borderRadius:"8px"
})

return undefined
