/*const ui = await script("psui")
  butt = new Element("<button>press me</button>")
  .on("click",e=>alert("Hello there"))
  body.add(butt)
  new Page("index").open()*/

body.add(new Element("<button>help").on("click",e=>new Page("preview",{manifest:{flags:"console"}}).open()))
