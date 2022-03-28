PlayScript - Prebuilt modules
---
These are modules that you can import without referring to them in the [manifest](./manifest.md) .

---
### PSMD
Can convert a markdown file to html, useful for turning markdown docs into pages.

###### Usage:
```javascript
const md=require("psmd")

//parse from file
md.parseURL("/path/to/file.md")

//parse from string
md.parse("# Hello")
```
---
### PSUI
Adds styled elements to your app, filled with a large gallery of basic widgets.

###### Usage:
```javascript
const ui = require("psui")

butt = ui.button("hi there","matte")
app.body.add(butt)
```
A list of all available widgets are [here](./psui.md)

---
### XUI
Adds advanced styled elements to your app, filled with a large gallery of high level interactive widgets.

###### Usage:
```javascript
const xui = require("xui")

const slide = xui.slide([
  "<img src='...'/>",
  new Element("<button>hi</button")
  ])
app.body.add(slide)
```
A list of all available widgets are [here](./xui.md)

---
### Crypt
Encrypts and decrypts strings, self explainatory.

###### Usage: