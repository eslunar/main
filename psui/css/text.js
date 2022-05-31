css.selector("text,input",{
  boxSizing:"border-box",
  outline:"none",
  background:"transparent",
  border:0,
  color:"inherit",
  padding:"8px",
}).selector("text text",{
  padding:"0px"
})


css.selector("text[size=\"tiny\"]",{
  fontSize:"0.5rem"
}).selector("text[size=\"xxxsmall\"]", {
  fontSize: "0.6rem"
}).selector("text[size=\"xxsmall\"]", {
  fontSize: "0.7rem"
}).selector("text[size=\"xsmall\"]", {
  fontSize: "0.8rem"
}).selector("text[size=\"small\"]", {
  fontSize: "0.9rem"
}).selector("text[size=\"default\"]", {
  fontSize: "1rem"
}).selector("text[size=\"large\"]", {
  fontSize: "1.2rem"
}).selector("text[size=\"xlarge\"]", {
  fontSize: "1.4rem"
}).selector("text[size=\"xxlarge\"]", {
  fontSize: "1.6rem"
}).selector("text[size=\"xxxlarge\"]", {
  fontSize: "1.8rem"
}).selector("text[size=\"huge\"]", {
  fontSize: "2rem"
}).selector("text[size=\"jumbo\"]", {
  fontSize: "3rem"
}).selector("text[size=\"hero\"]", {
  fontSize: "4rem"})

.selector("text[type=\"h1\"]",{
  fontWeight:"bold",
  fontSize:"3.8rem"
}).selector("text[type=\"h2\"]",{
  fontWeight:"bold",
  fontSize:"3.2rem"
}).selector("text[type=\"h3\"]", {
  fontWeight: "bold",
  fontSize: "2.8rem"
}).selector("text[type=\"h4\"]", {
  fontWeight: "bold",
  fontSize: "2.2rem"
}).selector("text[type=\"h5\"]", {
  fontWeight: "bold",
  fontSize: "1.8rem"
}).selector("text[type=\"h6\"]", {
  fontWeight: "bold",
  fontSize: "1.2rem"
}).selector("text[type=\"bold\"]", {
  fontWeight: "bold",
}).selector("text[type=\"thin\"]", {
  fontWeight: "200"
})

/*align font*/
css.selector("text[align=\"\"]",{
  textAlign:"center"
}).selector("text[align=\"right\"]",{
  textAlign:"right"
}).selector("text[align=\"left\"]", {
  textAlign: "left"
})
  
return function text(text="text",type="paragraph",css={}){
  const el = new Element(`<text>`).attr({type}).css(css)
  typeof text=="object"?el.add(text):el.html(text)
  return el
}
