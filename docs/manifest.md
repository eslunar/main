PlayScript - Manifest
---
The manifest generaly controls the look and feel of your app, but it accepts much more options.

```javascript
 Manifest {
   main:String,//set app entry point (default = index.js)
   name:String,//title and web manifest title
   icon:URL,//path to favicon (default = favicon.ico)
   splash:HTML,//html string to show while setting up
   flags:String,//space divided list of flags
   theme:String,//app theme (default = light)
   
 }
```
