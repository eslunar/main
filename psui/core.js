body.attr({
  type:"flex",
}).css({margin:0,overflow:"auto"})

css.selector("html,body",{
  position:"relative",
  height:"100%",
  width:"100%",
})

return await scripts("css/base","css/global","css/flex","css/text","css/button","css/img","css/input",...[...arguments].map(e=>"css/"+e))
