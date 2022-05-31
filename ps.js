/*declare app*/const app={}
/*application code is wrapped in a function to be dynamically generated when using app.page*/function psStartFunction(){
/*get currentScript to parse manifest*/app.scope=document.currentScript.getAttribute("scope")||location.href
/*parse manifest*/app.manifest=JSON.parse(document.currentScript.innerHTML.trim()||"{}")
/*app flags*/app.manifest.flags=(app.manifest.flags||"").split(" ").filter(e=>e)
/*library root*/app.manifest.root=new URL(document.currentScript.src).origin+"/"
/*entry path*/app.manifest.currentEntry=location.href
/*packages*/app.manifest.packages=Object.assign(app.manifest.packages||{},{
  psui:app.manifest.root+"psui/core.js",
  icons:app.manifest.root+"icons/core.js",
  experiments:app.manifest.root+"experiments/core.js",
})

/*theme map, invert and contrast are for reading apps e.g books*/app.themeMap={
  light:{
    bg:"#fcfcfc",
    fg:"#fafafa",
    txt:"#454545",
    shd:"#00000015"
  },
  dark: {
    bg: "#232323",
    fg: "#303030",
    txt: "#bbbbbb",
    shd: "#00000030"
  },
  oled: {
    bg: "#000000",
    fg: "#121212",
    txt: "#bbbbbb",
    shd: "#ffffff15"
  }
}
/*set theming and hue*/document.documentElement.setAttribute("style",`--hue:${app.manifest.hue||"#e91e63"};--bg:${app.themeMap[app.manifest.theme||"light"].bg};--fg:${app.themeMap[app.manifest.theme||"light"].fg};--txt:${app.themeMap[app.manifest.theme||"light"].txt};--shd:${app.themeMap[app.manifest.theme||"light"].shd};background:${app.manifest.flags.includes("transparent")?"transparent":"var(--bg)"};color:var(--txt);user-select:none;font-family:sans-serif`)
document.documentElement.innerHTML+=`<style>load{width:35px;height:35px;border-radius:100%;border:5px solid var(--shd);border-top:5px solid var(--hue);transform:rotate(0deg);animation:spin 800ms linear infinite;margin:20px auto}@keyframes spin{to{transform:rotate(359deg)}}</style><style global></style>`

/*create splash screen*/
let splashScreen=document.createElement("splash-screen")
splashScreen.setAttribute("style",`position:fixed;z-index:999999999;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background:${app.manifest.flags.includes("transparent")?"transparent":"var(--bg)"}`)
splashScreen.innerHTML=app.manifest.splash||`<load></load>`
document.documentElement.appendChild(splashScreen)
splashScreen=undefined;


/*enable responsive design*/
let mt=document.createElement("meta")
  mt.setAttribute("charset","UTF-8")
  document.head.appendChild(mt)
  mt=document.createElement("meta")
  mt.setAttribute("name","viewport")
  mt.setAttribute("content","width=device-width, initial-scale=1")
  document.head.appendChild(mt)
  mt=undefined


app.loadState="pending"
function stallDom(){
  let script=document.createElement("script")
  script.src=app.manifest.root+"/ping"
  script.id="stallDom"
  script.onload=e=>{
    script=undefined
    document.querySelector("#stallDom").remove()
    app.loadState=="complete"?document.querySelector("splash-screen").remove():stallDom()}
  script.onerror=e=>{
    script=undefined
    document.querySelector("#stallDom").remove()
    app.loadState=="complete"?document.querySelector("splash-screen").remove():stallDom()}
  document.head.appendChild(script)
}
stallDom()



if(app.manifest.flags.includes("fresh")||(!sessionStorage.getItem("psjs")))Promise.all([
  /*fetches all building blocks of the framework and binds them as a blob script*/
 "setup/pre-setup",
 /*engines*/"engine/script","engine/request","engine/scripts",...(app.manifest.flags.includes("console")?["engine/eruda"]:[]),
 
 /*element*/"ui/element/core","ui/element/html","ui/element/text","ui/element/add","ui/element/remove","ui/element/children","ui/element/attr","ui/element/css","ui/element/query","ui/element/on","ui/element/misc","ui/element/list","ui/element/insert","ui/element/array",
 
 /*helpera*/"ui/helper/modal","ui/helper/page","ui/helper/load","ui/helper/toast",
 
 /*misc*/"ui/css",
 
 /*utilities*/"util/uuid","util/after","util/every","util/repeat",
 "setup/event","setup/post-setup","setup/body-ready",
 ].map(e=>fetch(app.manifest.root+e+".js")))
  .then(e=>Promise.all(e.map(e=>e.text())))
  .then(e=>/*run code globally*/{sessionStorage.setItem("psjs",e.join("\n"));setTimeout(e.join("\n"),0)})
  .catch(e=>/*if a resource fails to load, the page will refresh until all resources load successfully*/location.href=location.href)
else /*if app pre scripts are cached, run from cache*/setTimeout(sessionStorage.getItem("psjs"),0)}

/*url to cache startup*/sessionStorage.setItem("prep",URL.createObjectURL(new Blob(["const app={};"+String(psStartFunction)+";psStartFunction()"],{type:"application/javascript"})))
psStartFunction()
