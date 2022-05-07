/*declare app*/const app={}
/*get currentScript to parse manifest*/app.script=document.currentScript
/*parse manifest*/eval("app.manifest="+(app.script.innerHTML||"{}"))
app.manifest=Object.assign(app.manifest,JSON.parse(localStorage.temp_cache||"{}"))
delete localStorage.temp_cache5
/*app flags*/app.manifest.flags=(app.manifest.flags||"").split(" ").filter(e=>e)
/*library root*/app.manifest.root=new URL(app.script.src).origin+"/"
/*entry path*/app.manifest.currentEntry=location.href


/*create splash screen*/
let splashScreen=document.createElement("splash-screen")
if(window.top===window.self){splashScreen.setAttribute("style",`position:fixed;z-index:999999999;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;background:${app.manifest.theme=="dark"?"#232323":app.manifest.theme=="oled"?"#000000":"#fcfcfc"}`)
splashScreen.innerHTML=app.manifest.splash||`<style>load{width:35px;height:35px;border-radius:100%;border:5px solid #00000011;border-top:4px solid #e91e63;transform:rotate(0deg);animation:spin 800ms linear infinite}@keyframes spin{to{transform:rotate(359deg)}}</style><load></load>`}
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


app.loadState="pending"
function stallDom(){
  const script=document.createElement("script")
  script.src=app.manifest.root+"/ping"
  script.id="stallDom"
  script.onload=e=>{
    document.querySelector("#stallDom").remove()
    app.loadState=="complete"?document.querySelector("splash-screen").remove():stallDom()}
  script.onerror=e=>{
    document.querySelector("#stallDom").remove()
    app.loadState=="complete"?document.querySelector("splash-screen").remove():stallDom()}
  document.head.appendChild(script)
}
stallDom()


Promise.all([
  /*fetches all building blocks of the framework and binds them as a blob script*/
 "setup/pre-setup",
 /*engines*/"engine/script","engine/metadata","engine/fetch",
 
 /*element*/"ui/element/core","ui/element/html","ui/element/text","ui/element/add","ui/element/remove","ui/element/children","ui/element/attr","ui/element/css","ui/element/query","ui/element/on","ui/element/misc","ui/element/list","ui/element/insert",
 
 /*modals*/"ui/modal/core","ui/modal/page",
 
 /*misc*/"ui/selector/core","ui/css/core",
 
 /*css*/...(app.manifest.flags.includes("ui")?["ui/css/global.css","ui/css/bar.css","ui/css/button.css","ui/css/image.css","ui/css/modal.css","ui/css/text.css","ui/css/flex.css","ui/css/load.css","ui/modal/load","ui/modal/snack"]:[]),
 
 /*utilities*/"util/uuid","util/after","util/every","util/repeat",
 "setup/event","setup/post-setup","setup/body-ready"].map(e=>fetch(app.manifest.root+e+".js")))
  .then(e=>Promise.all(e.map(e=>e.text())))
  .then(e=>setTimeout(e.join("\n"),0))
  .catch(e=>/*if a resource fails to load, the page will refresh until all resources load successfully*/location.href=location.href)
