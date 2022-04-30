PlayScript
---
A **Tiny** and **Powerful** JavaScript framework for building amazing web apps fast!

##### Example:
```javascript
butt = new Element("<button>press me</button>")
butt.attr("onclick",e=>alert("HI MOM!"))
body.add(butt)
```

##### With PSUI:
```javascript
const ui = await script("//.../psui.js")
const butt = ui.button("press me")
butt.attr("click",e=>alert("HI AGAIN!"))
body.add(butt)
```

---
### Features
- Top level async await
- Simple module import / exports
- Easy DOM manipulation
- Extended DOM query system
- Auto PWA support
- Compatible with other libraries
- Extendable via plugins
- API Packed!

And so much more, all under `30kb`. **Interested?**

---
### Docs
##### Core
- [Setting up](./docs/setup.md)
- [Modules](./docs/modules.md)
- [Manifest](./docs/manifest.md)

##### UI
- [Element](./docs/element.md)
- [Queries](./docs/queries.md)
- [Modals](./docs/modals.md)
- [Pages](./docs/pages.md)

##### API
- [UUID](./docs/uuid.md)
- [Repeat](./docs/repeat.md)
- [After](./docs/after.md)
- [Every](./docs/every.md)

[Reference](./docs/ref.md).<br/>More sources [here](https://playscript.dev).

---
### Author
Faizel Dealdrey Garoeb

email - <dealdreygaroeb@gmail.com><br/>telegram - https://t.me/fjci9e

happy coding!
