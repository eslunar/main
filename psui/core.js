body.attr({
  type:"flex",
  scroll:true
}).css({
  border:0,
  padding:0,
  margin:0,
  minWidth:"100vw",
  minHeight:"100vh"
})

return await scripts("css/base","css/global","css/flex","css/text","css/button","css/img","css/input",...[...arguments].map(e=>"css/"+e))
