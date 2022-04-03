PlayScript - Modules
---
### Exporting code

You can export a value by simply returning it or by passing it to the `module.exports` property like nodeJS, this is to support commonJS libraries

##### create an `exports.js` file:
```javascript
module.exports=function Greet(person){
  return `hello ${person}`
}
```
##### or:
```javascript
return function Greet(person){
  return `hello ${person}`
}
```
---
### Importing code
You can import values using the `require` function, but bare in mind these rules:

- Scoped, based on the location of the current active file calling the function.
- Automatically appends the `.js` extension to paths without extensions.
- Synchronous by default, but can be async by passing `async:true` to the options argument.

##### create an `entry.js` file:
```javascript
const greet=require("./exports.js")
console.log(greet("bob"),greet("wayne"))
```
##### or:
```javascript
const greet=require("./exports")
console.log(greet("bob"),greet("wayne"))
```

You can also require a full, root or double dot url, but only `http://` and `https://` are currently supported.

---
### Manifest.modules

In your app's manifest, add `modules` key that accepts an object, here you can add key value pairs of libraries with their paths, purpose of this is to serve as a shortcut for library imports.

##### edit your manifest:
```javascript
{
  "name":"My awesome app",
  "main":"./entry.js",
  "modules":{
    "d3":"https://unpkg.com/d3/dist/d3.min.js"
  }
}
```
##### require the module in other script:
```javascript
const d3=require("d3")
```

---

**[continue to threads](./threads.md)**
