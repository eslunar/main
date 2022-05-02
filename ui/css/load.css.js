
css.selector("load",{
  width:"35px",
  height:"35px",
  borderRadius:"100%",
  border:"5px solid var(--shadow)",
  borderTop:"5px solid var(--hue)",
  transform:"rotate(0deg)",
  animation:"spin 880ms linear infinite",
  margin:"20px auto 20px auto"
  
}).keyframe("spin",{
  to:{
    transform:"rotate(359deg)"
  }
})