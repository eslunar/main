/*declare app*/const app={}
/*get currentScript to parse manifest*/app.script=document.currentScript
/*parse manifest*/app.manifest=JSON.parse(app.script.innerHTML||"{}")
/*app flags*/app.manifest.flags=(app.manifest.flags||"").split(" ").filter(e=>e)
/*library root*/app.manifest.root=new URL(app.script.src).origin+"/"
/*entry path*/app.manifest.currentEntry=location.href
/*create body*/document.body=document.body||document.createElement("body")
/*create splash screen*/document.body.innerHTML=app.manifest.splash||`<style>load{width:35px;height:35px;border-radius:100%;border:5px solid #00000011;border-top:4px solid #e91e63;transform:rotate(0deg);animation:spin 800ms linear infinite}body{border:0;padding:0;margin:0;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;}@keyframes spin{to{transform:rotate(359deg)}}</style><load></load>`

Promise.all([
  /*fetches all building blocks of the framework and binds them as a blob script*/
 "setup/pre-setup",
 /*engines*/"engine/script","engine/fetch",
 
 /*element*/"ui/element/core","ui/element/html","ui/element/text","ui/element/add","ui/element/remove","ui/element/parent","ui/element/children","ui/element/attr","ui/element/css","ui/element/query","ui/element/on",
 
 /*modals*/"ui/modal/core","ui/modal/page","ui/modal/alert",
 
 /*misc*/"ui/selector/core","ui/css/core",
 
 /*css*/...(app.manifest.flags.includes("ui")?["ui/css/global.css","ui/css/bar.css","ui/css/button.css","ui/css/image.css","ui/css/modal.css","ui/css/text.css","ui/css/flex.css","ui/css/edit.css"]:[]),
 
 /*utilities*/"util/uuid","util/after","util/every","util/repeat",
 "setup/event","setup/post-setup","setup/body-ready"].map(e=>fetch(app.manifest.root+e+".js")))
  .then(e=>Promise.all(e.map(e=>e.text())))
  .then(e=>setTimeout(e.join("\n"),0))
  .catch(e=>/*if a resource fails to load, the page will refresh until all resources load successfully*/location.href=location.href)
