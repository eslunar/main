/*on document ready*/function app_first_launch(){
  (document.querySelectorAll("body")[1]||document.createElement("body")).remove()
}
if(document.readyState=="complete")app_first_launch()
else window.addEventListener("load",app_first_launch)


/*on app back pressed*/window.addEventListener("popstate",function(){
  (body.query({type:"modal",position:"last"})||new Element("<e/>")).remove()
})

/**/window.addEventListener("touchstart",e=>app.target=new Element(e.target))
