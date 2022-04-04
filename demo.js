app.body.html(`
<bar>hello</bar><button>default</button>
<button matte>matte</button>
<button silent>silent</button>
<button outline>outline</button>
<img src="full.png"/>
`)

console.log(app.fetch("/index.html"))
