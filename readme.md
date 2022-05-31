PlayScript
---
A **Tiny** and **Powerful** front-end JavaScript framework for building amazing web apps fast!

##### Example:
```javascript
butt = new Element("<button>press me</button>")
 .on("click",e=>alert("HI MOM!"))
body.add(butt)
```

##### With PSUI:
```javascript
const ui = await script("psui")
const butt = ui.button("press me")
 .on("click",e=>alert("HI AGAIN!"))
body.add(butt)
```

---
### Features
- Top level async await
- Simple module import / exports
- Easy DOM manipulation
- Extended DOM query system
- in-built icon pack
- material ui pack
- Auto PWA support
- Compatible with other libraries
- Extendable via plugins
- in-built [console](//eruda.liriliri.com)
- API Packed!

And so much more, all under `50kb`. **Interested?**

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

##### EXTRAS
- [PSUI](./docs/psui/intro.md)
- [PSMD](./docs/psmd.md)
- [Icons](./docs/icons.md)

Learn more [here](https://playscript.dev).

---
### Author
Faizel Dealdrey Garoeb

email - <dealdreygaroeb@gmail.com><br/>telegram - https://t.me/PlayScriptJS

happy coding!
