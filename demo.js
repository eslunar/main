app.body.html(`<flex snap fill>
<flex stack="bottom" fill>
<img src="/images/cover.png" fill/>
<flex fill style="background:linear-gradient(transparent,var(--bg))"></flex>

<flex fill="x" align="center"><text hue bold size="jumbo">AudioLuv</text><edit><input bar blur placeholder="lets viibe..."/><submit>search</submit></edit><br/></flex>


</flex>
<flex fill>
<bar>${app.icon("back")}AudioLuv</bar>
<flex id="x"></flex>
</flex>
</flex>`)

t=app.body.query({id:"x"})
t.template("<li>{t}</li>")
t.list([{t:1},{t:2}])
t.push([{t:"whyy"},{t:"me"}])
t.select(alert)
t.insert({t:"penny vir dai kop"},2,true)
app.body.add(new Element("<button>press me</button>").on("click",()=>css.theme("dark    ")))
app.body.query({tag:"button"}).text("hello")
