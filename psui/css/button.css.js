css.selector("button",{
  color:"white",
  background:"var(--hue)",
  border:"2px solid transparent",
  
  padding:"8px 10px",
  borderRadius:"12px",
  position:"relative",
  overflow:"hidden",
  transform:"translate3d(0,0,0)",
  margin:"5px"
  
})

css.selector("button:hover",{
  boxShadow:"0px 0px 4px 4px var(--shadow)",
  transition:"all .3s"
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


/*
.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .5s, opacity 1s;
}
.ripple:active:after {
  transform: scale(0, 0);
  opacity: .2;
  transition: 0s;
}
*/
