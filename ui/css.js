app.globalCSS=new Element("<style global>")
const css ={
  selectors:{},
  queries:{},
  keyframes:{},
  raw:"",
  
  selector(prop,val={},bind=false){
    if(val){if(bind)this.selectors[prop]=Object.assign(this.selectors[prop]||{},val);else this.selectors[prop]=val}
    else return this.selectors[prop]||{}
    this.compile()
    return this
  },
  query(prop,val,bind){
    if (val) this.queries[prop] = val
    else return this.queries[prop]||{}
    this.compile()
    return this
  },
  keyframe(prop,val,bind){
    if (val) this.keyframes[prop] = val
    else return this.keyframes[prop]||{}
    this.compile()
    return this
  },
  compile(opt={}){
    let s=""
    /*parse selectors*/Object.keys(this.selectors).filter(e=>e).map(e=>s+=`${e}{${this.convert(this.selectors[e])}}`)
    
    let k=""
    /*parse keyframes*/
    Object.keys(this.keyframes).filter(e=>e).map(e=>k+=`@keyframes ${e}{${Object.keys(this.keyframes[e]).map(n=>`${n}{${this.convert(this.keyframes[e][n])}}`).join("")}}`)
    
    let m=""
    /*parse keyframes*/
    Object.keys(this.queries).filter(e=>e).map(e=>m+=`@media ${e}{${Object.keys(this.queries[e]).map(n=>`${n}{${this.convert(this.queries[e][n])}}`).join("")}}`)
    this.raw=s+k+m
    document.querySelector("style[global]").innerHTML=this.raw
    return this
  },
  convert(obj={}){
    return Object.keys(obj).filter(e=>e).map(e=>`${e.split("").map(e=>/[A-Z]/.test(e)?" "+e.toLowerCase():e).join("").trim().replaceAll(" ","-")}:${e=="content"?`"${String(obj[e])}"`:String(obj[e])}`).join(";")
  }
}

app.theme=function(theme="light",hue="#e91e63"){
  document.documentElement.setAttribute("style",`--hue:${hue||"#e91e63"};--bg:${app.themeMap[theme].bg};--fg:${app.themeMap[theme].fg};--txt:${app.themeMap[theme].txt};--shd:${app.themeMap[theme].shd};background:${app.manifest.flags.includes("transparent")?"transparent":"var(--bg)"};color:var(--txt);user-select:none;font-family:sans-serif`)
return app
}
