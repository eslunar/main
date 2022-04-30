body.html("<bar><input type=text placeholder='AudioLuv - search'/></bar><button>hello</button>")
body.query({type:"button"}).attr("onclick",e=>body.add("<p>hi</p>"))
x=new XMLHttpRequest()
x.open("GET","http://google.com")
x.send()
x.onload=console.log