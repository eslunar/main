css.selector("button",{
  color:"white",
  background:"var(--hue)",
  border:"2px solid transparent",
  
  padding:"8px 10px",
  borderRadius:"12px",
  position:"relative",
  margin:"5px"
  
})

css.selector("button:hover",{
  boxShadow:"0 0 4px 4px var(--shadow)"
})

css.selector("button[silent]",{
  color:"var(--hue)",
  background:"transparent",
  border:"2px solid transparent",
})

css.selector("button[outline]",{
  color:"var(--hue)",
  background:"transparent",
  border:"2px solid var(--hue)",
})

css.selector("button[matte]",{
    color: "var(--hue)",
    background: "transparent",
    border: "2px solid transparent",
})

css.selector("button[matte]:before",{
  position: "absolute",
  content: "",
  background: "var(--hue)",
  border: "2px solid var(--hue)",
  borderRadius: "12px",
  top: "-2px",
  left: "-2px",
  width:"100%",
  height: "100%",
  opacity: .5
})
