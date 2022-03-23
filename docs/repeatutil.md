PlayScript - Repeat Utility
---
Repeats a function a desired amount of times, provides an index parameter and a last returned item parameter.

###### Syntax:
```javascript
app.repeat(function(index,lastReturn),repeatCount)
```
###### Example:
```javascript
app.repeat(amount=>app.print(`logged ${amount+1} time(s)`),10)
```
