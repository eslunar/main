css.selector("body",{
  padding:0,
  marginLeft:"80px",
  animation:"fade-in"
})

.keyframe("fade-in",{
  from:{
    opacity:0
  },
  to:{
    opacity:1
  }
})

.query("print",{
  body:{
    padding:8
  }
})
app.body.html("hello!")
console.log(css.raw)
