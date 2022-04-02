const butt = new Element("<button onclick=\"alert('hey')\">Press me!</button>")
butt.on("click", () => alert("HELLO MOM!"))

app.body.add(butt)