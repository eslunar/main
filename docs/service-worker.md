PlayScript - ServiceWorker
---
A service worker must be scoped to your app root, and therefore playscript cannot help automate this process, but it can help you cache important files by importing the helper script at `https://playscript.co/sw.js`.

Service workers are automatically detected and installed, all you need to do is create a `sw.js` or `serviceWorker.js` file alongside your `index.html` file.

###### Create a `sw.js` file:
```javascript
importScripts("//playscript.co/sw.js")
```
and your all good to go.

---
### Custom Worker
You can reference to a service worker with a custom name by passing its path to the `service-worker` option in your respective [manifest](./manifest.md).