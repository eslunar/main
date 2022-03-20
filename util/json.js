app.json={
  parse(obj){
    return JSON.parse(obj)
  },
  stringify(obj){
    return JSON.stringify(obj,function(key, val) {
      if(typeof val != "function")return val
      else {
        try{
          val = String(val)
        }catch(e){
          console.warn("error")
          return undefined
        }
      }
      
       },2)
  }
}

/*
JSON.stringify(myObject, function(key, val) { return (typeof val === 'function') ? '[function]' : val; }, 4);

*/
