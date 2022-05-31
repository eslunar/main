css.selector("*::-webkit-scrollbar",{
  width:"4px",
  height:"4px"
}).selector("*::-webkit-scrollbar-thumb",{
  background:"var(--hue)",
  borderRadius:"8px"
}).selector("*::-webkit-scrollbar-track",{
  background:"var(--shd)",
  borderRadius:"8px",
  margin:"5px"
})

.selector("[scrollbar=\"hidden\"]::-webkit-scrollbar-thumb",{
  background:"transparent"
}).selector("[scrollbar=\"hidden\"]::-webkit-scrollbar-track",{
  background:"transparent"
})

return undefined
