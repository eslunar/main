function Page(url="/",query={}, options=""){
  let q=Object.keys(query).filter(e=>e).map(e=>`${decodeURIComponent(e)}=${decodeURIComponent(String(query[e]))}`).join("&")
  if(q&&!url.includes("?"))url+="?"+q
  else if(q)url+="&"+q
  
  let elem = new Element("<iframe>frames not supported</iframe>")
  elem.attr("src",url)
  .css({
    border:0,
    width:"100%",
    height:"100%",
  })
  
  return new Modal(elem)
  
}
