app.body.html(`
<button>default</button>
<button matte>matte</button>
<button silent>silent</button>
<button outline>outline</button>
<img src="full.png"/>
`)

app.body.query({attr:{silent:""}}).on("click",()=>alert("hi"))
