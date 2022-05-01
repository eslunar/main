body.html(`<flex></flex>
<bar></bar>
<div><div>`)

console.log(body.query({sibling:{
  type:"div"
}}).raw)
