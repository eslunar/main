PlayScript - Threads
---
Threads are an experimental feature that allows you to run non essential scripts in dedicated workers, all playscript API's are available in these threads, but they cannot make reflections to the UI thread.

edit your `manifest`:
```javascript
{
 "main":"/index.js",
 "threads":{
   "my-thread":"./thread.js"
 }
}
```
###### create your `index.js`:
```javascript
app.post("hows playscript?","my-thread")
```

###### create a `thread.js` file:
```javascript
app.listen(post=>{
  if(post.from=="main"&&post.message=="hows playscript?")alert("ITS HELLA AWESOME!!!!")
})
```


Threads can be used to parse large data, background sync, Google analytics, strainious operations, etc.

---

