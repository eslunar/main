PlayScript - Setup
---
Playscript is originally available at `https://playscript.co/ps.js` but you can also access it from **UNPKG**, **JSDELIVR**, **CDNJS** according to their respective formats.


###### create an `index.html` file:
```html
<!DOCTYPE HTML>
<html>
  <meta charset="UTF-8">
  <script src="//playscript.co/ps.js">
    {
      "name":"My awesome app",
      "main":"./entry.js"
    }
  </script>
</html>
```
The structure depends on you, but a manifest in the script tag is required.

###### create an `entry.js` file:
```javascript
console.log("hello from MAIN thread!")
```

And thats about it, run via localhost in your browser and see results.

---
### Basic Manifest Features
- name - sets the name of the app in the web manifest and document title.
- description - sets the web manifest description.
- icon - sets the favicon and web manifest icon.
- main - path to the entry javascript file.
- flags - string of app flags [explained in detail here](./flags.md)
- worker - sets the path to the service worker.

---
**[continue to modules](./modules.md)**
