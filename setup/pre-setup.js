app.version={
  beta:"0.0.1",
  alpha:"0.0.1"
}

/*queries sent with url*/
app.query=Object.assign({},...location.search.slice(1).split("&").filter(e=>e).map(function loop(e){return {[decodeURIComponent(e.split("=")[0])]:decodeURIComponent(e.split("=")[1]||"")}}))


/*really idk 🤷😅*/app.selectors={}
app.selectScan=function(children){
  children=children.map(e=>new Element(e))
  Object.keys(app.selectors).forEach(e=>{
    __queer__(children,app.selectors[e].query).forEach(x=>app.selectors[e].func(x))
  })
}

app.events={}
app.scripts={}

app.local=location.hostname=="localhost"
app.back=history.back

/*register web manifest*/
let mn = document.createElement("link")
  mn.rel = "manifest"
  mn.href = "data:application/manifest+json," + encodeURIComponent(JSON.stringify({
    name: app.manifest.name || "Playscript App",
    short_name: app.manifest.name || "PlayScript App",
    start_url: app.manifest.entry || location.origin,
    display: "standalone",
    description: app.manifest.desc || "Some random PlayScript Application",
    background_color: "#fcfcfc",
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
        type: "image/png"
      }
      ]
  }))
  document.head.appendChild(mn)

/*app title*/
  let tt = document.createElement("title")
  tt.innerText = app.manifest.name || "PlayScript App"
  document.head.appendChild(tt)
  
  
  
/*service worker*/
  if ("serviceWorker" in navigator) navigator.serviceWorker.register(app.manifest.worker || "/sw.js")
