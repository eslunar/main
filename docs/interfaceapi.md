PlayScript - Interface API
---
Sends a function to run on the UI thread, and awaits a response. Made to have access to API's that are not yet available in web workers.

```javascript
let locationFinder=new Interface(e=>window.location.href)
let location = await locationFinder.run()
console.log(location)
```

---
Methods
- `run` - accepts:any, runs the function, and accepts parameters to pass through.
- `error` - accepts:function, assigns a function to run when an error occours.
