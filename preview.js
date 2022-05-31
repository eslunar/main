const ui = await script("psui")
  butt = new Element("<button>press me</button>")
  .on("click",e=>alert("Hello there"))
  body.add(butt)