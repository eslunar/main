PlayScript - Modules
---
To export a module, just return the exposed value at the end of your script.
```javascript
return person=>console.log(`hello ${person}`)
```
To import a module, assign a variable to an async `script` function refering to the modules path.
```javascript
const greet=await script("path/to/module.js")//imports the function above
greet("bob")//logs hello bob
greet("castiel")//logs hello castiel
```

All modules (including the entry module) are async functions, which gives all modules top level async/await.

---
### Importing multiple scripts
Use the async `scripts` function to load multiple scripts
```javascript
const mods = await scripts("mod1.js","mod2.js")
```
Returns an object collection of the imported modules, if the value is a function with a name,
---
[Continue to manifest](./manifest.md)

