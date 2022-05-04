css.selector("p,h1,h2,h3,h4,h5,h6,text,paragraph,input,textarea,input::placeholder,textarea::placeholder",{
  padding:0,
  border:0,
  margin:"5px",
  background:"transparent",
  color:"var(--text)",
  outline:"none",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
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
