app.body=new Element("<body></body>")

app.add=function(...args){return app.body.add(...args)}
app.remove=function(...args){return app.body.remove(...args)}
app.clone=function(){return app.body.clone()}
