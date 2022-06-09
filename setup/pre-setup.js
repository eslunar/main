app.version="0.2.1"

/*queries sent with url*/
app.query=Object.assign({},...location.search.slice(1).split("&").filter(e=>e).map(function loop(e){return {[decodeURIComponent(e.split("=")[0])]:decodeURIComponent(e.split("=")[1]||"")}}))

/*intents set by new pages*/app.intent=sessionStorage.getItem("intent")
delete sessionStorage.intent

/*memory cache*/
app.events={}

/*misc info*/
app.local=app.scope.startsWith("http://localhost")
app.framed=!(window.top===window.self)
app.back=e=>history.back()

/*build manifest extra parts*/
let ext={}
app.manifest.shortcuts?ext.shortcuts=app.manifest.shortcuts:""
app.manifest.screenshots?ext.screenshots=app.manifest.screenshots:""

/*register web manifest*/
let mn = document.createElement("link")
  mn.rel = "manifest"
  mn.href = "data:application/manifest+json," + encodeURIComponent(JSON.stringify({
    name: app.manifest.name || "Playscript App",
    short_name: app.manifest.name || "PlayScript App",
    start_url: app.manifest.entry || location.origin,
    display: app.manifest.display||"standalone",
    description: app.manifest.desc || "Powered by PlayScript.",
    background_color: app.themeMap[app.manifest.theme||"light"].bg,
    theme_color: app.manifest.hue || "#e91e63",
    icons: [
      {
        src: app.manifest.icon || location.origin + "/favicon.ico",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: app.manifest.icon || location.origin + "/favicon.ico",
        sizes: "512x512",
        type: "image/png",
        purpose:"any maskable"
      }
      ],
      ...ext
  }))
  document.head.appendChild(mn)

/*app title*/
  let tt = document.createElement("title")
  tt.innerText = app.manifest.name || "PlayScript App"
  document.head.appendChild(tt)
  
  
  
/*service worker*/
  if ("serviceWorker" in navigator) navigator.serviceWorker.register(app.manifest.worker || "/sw.js").catch(e=>{})
