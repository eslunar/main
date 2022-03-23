app.listen(post=>{
  if(post.from=="main")app.post(app.body.clone())
})