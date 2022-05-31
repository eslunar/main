PlayScript - Setting up
---
Create an html file and refer to https://playscriptjs.github.io/ps.js in a script tag. Add an empty object into the script tag, this is your app's [manifest](./manifest.md), it defines your app and its entry point.

### `index.html`
```javascript
<html>
  <script src="//playscript.dev/ps.js" >
  {
    "main":"index.js"
  }
  </script>
</html>
```
The `main` property points to the first file ran when setup is complete. Create `index.js` in the same directory scope and add your code to it, 

### `index.js`
```javascript
console.log("hello there!")
```
During setup, PlayScript automatically does the following:
- Adds meta charset and viewport tags
- Adds title and favicon tags
- Generates a web manifest
- Registers a service worker
- Imports dependencies

---
**[Continue to modules](./modules.md)**
