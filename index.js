body.html(`<flex></flex>
<bar class=" ve x "></bar>
<div><div>`)

console.log(body.query({sibling:{
  class:"ve"
}}).raw)
