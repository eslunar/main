PlayScript - Element
---
The `new Element()` class creates a representation of a node. A node is created by passing an HTML string as the first argument.

###### Example:
```javascript
const img = new Element("<img/>")
img.attr("src","favicon.ico")
.css({
  width:400,
  height:400,
  backgroundColor:"blue"
})

app.body.add(img)
```