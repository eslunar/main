css.selector("img",{
  margin:"5px auto",
  width:"100%",
  height:"auto",
})

css.query("all and (orientation:landscape)",{
  img:{
  margin:"auto",
  width:"40%",
  height:"auto",
  }
},"bind")
