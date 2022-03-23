function alert(...args){
  let data=args.map(e=>typeof e=="object"?JSON.stringify(e):String(e)).join(" ")
  app.send("alert",data)
}
