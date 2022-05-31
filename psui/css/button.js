css.selector("button",{
  margin:"8px",
  padding:"8px",
  borderRadius:"8px",
  border:"2px solid var(--hue)",
  background:"var(--hue)",
  color:"white",
  fontWeight:"bold",
})

.selector("button:hover",{
  boxShadow:"0px 0px 3px 3px var(--shd)",
  opacity:.9
})

.selector(`button[type="silent"]`,{
  background:"transparent",
  border:"2px solid transparent",
  color:"var(--hue)",
})

.selector(`button[type="outline"]`,{
  background:"transparent",
  color:"var(--hue)",
})


.selector(`button[type="pill"]`,{
  borderRadius:"35px",
})


.selector(`button[type="shadow"]`,{
  background:"transparent",
  border:"2px solid var(--shd)",
  boxShadow:"0px 0px 2px 2px var(--shd)",
  color:"var(--hue)",
})

.selector(`button[fab=""],button[fab="dafault"],button[fab="true"]`,{
  borderRadius:"100%",
  width:"50px",
  height:"50px"
}).selector(`button[fab="small"]`,{
  borderRadius:"100%",
  width:"35px",
  height:"35px"
}).selector(`button[fab="tiny"]`,{
  borderRadius:"100%",
  padding:"2px",
  width:"20px",
  height:"20px"
}).selector(`button[fab="large"]`,{
  borderRadius:"100%",
  width:"65px",
  height:"65px"
}).selector(`button[fab="jumbo"]`,{
  borderRadius:"100%",
  width:"75px",
  height:"75px"
}).selector("button[fab] *",{
  margin:"auto",
  padding:"0px"
})


return function button(text="button",type="default",css={}){
  const el = new Element(`<button>`).attr({type}).css(css)
  typeof text=="object"?el.add(text):el.html(text)
  return el
}
