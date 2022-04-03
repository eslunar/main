function Page(url, options){
  let elem = new Element("<iframe>frames not supported</iframe>")
  elem.attr("src",url)
  .css({
    border:0,
    width:"100%",
    height:"100%",
  })
  
  return new Modal(elem)
  
}