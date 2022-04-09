app.body.html(`<flex snap fill>
<flex stack="bottom" fill>
<img src="/images/cover.png" fill/>
<flex fill style="background:linear-gradient(transparent,var(--bg))"></flex>

<flex fill="x" align="center"><text hue bold size="jumbo">AudioLuv</text><edit><input bar blur placeholder="lets viibe..."/><submit>search</submit></edit><br/></flex>


</flex>
<flex fill>
<bar>AudioLuv</bar>
<button>view</button>
</flex>
</flex>`)

app.body.query({text:"view"}).on("click",e=>new Page("/index.html",{q:"hi boo"}))
