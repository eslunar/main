app.metadata=function(md={}){
  const head=new Element(document.head)
  head.add(
    `<meta name="title" content="${(md.title||app.manifest.name||"PlayScript").replaceAll('"',"'")}">`,`
<meta name="description" content="${(md.desc||app.manifest.desc||"PlayScript").replaceAll('"',"'")}">`,`<meta property="og:type" content="${(md.type||"website")}">`,`<meta property="og:url" content="${md.url||location.href}">`,`<meta property="og:title" content="${(md.title||app.manifest.name||"PlayScript").replaceAll('"',"'")}">`,`<meta property="og:description" content="${(md.desc||app.manifest.desc||"PlayScript").replaceAll('"',"'")}">`,`<meta property="og:image" content="${md.icon||app.manifest.icon||"/favicon.ico"}">`,`<meta property="twitter:card" content="summary_large_image">`,`<meta property="twitter:url" content="${md.url||location.href}">`,`<meta property="twitter:title" content="${(md.title||app.manifest.name||"PlayScript").replaceAll('"',"'")}">`,`<meta property="twitter:description" content="${(md.desc||app.manifest.desc||"PlayScript").replaceAll('"',"'")}">`,`<meta property="twitter:image" content="${md.icon||app.manifest.icon||"/favicon.ico"}">`
    )
}
