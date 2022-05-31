const ui=await script("psui","code")
body.add(
  `<flex id=base block scroll snap scrollbar=hidden align justify=around >
  <img src=full.png style=width:80%;height:100px;max-width:300px />
  <text align size=large style=width:80%;max-width:700px >A <text type=bold hue>Tiny</text> and <text type=bold hue>Powerful</text> front-end JavaScript framework for building amazing web apps, fast!</text>
  
  <flex flow=row style=width:86%; card>
    <code style=width:50%;height:100%;color:white >const ui = await script("psui")
butt = new Element("&ltbutton&gtpress me&lt/button&gt")
 .on("click",e=>alert("Hello there"))
body.add(butt) </code>
    <iframe src=preview.html style=width:50%;height:100px;border:0 >
    </iframe>
  </flex>
  <flex flow=row>
    <button type=silent >Get Started</button>
    <button id=learn type=outline >Learn More</button>
  </flex>
  
  
  </flex>`
  )
  
  
  body.queryAll({type:"code"}).highlight()
