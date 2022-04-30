/*on document ready*/function app_first_launch(){
  (document.querySelectorAll("body")[1]||document.createElement("body")).remove()
  /*register dynamic web manifest and service worker*/
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

  let tt = document.createElement("title")
  tt.innerText = app.manifest.name || "PlayScript App"
  document.head.appendChild(tt)
  
  let mt=document.createElement("meta")
  mt.setAttribute("charset","UTF-8")
  document.head.appendChild(mt)
  mt=document.createElement("meta")
  mt.setAttribute("name","viewport")
  mt.setAttribute("content","width=device-width, initial-scale=1")
  document.head.appendChild(mt)
  

  if ("serviceWorker" in navigator) navigator.serviceWorker.register(app.manifest.worker || "/sw.js")
}
if(document.readyState=="complete")app_first_launch()
else window.addEventListener("load",app_first_launch)


/*on app back pressed*/window.addEventListener("popstate",function(){
  (body.query({type:"modal",position:"last"})||new Element("<e/>")).remove()
})