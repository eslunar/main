app.deepClone = function(obj,opt={}){
  let clone = {}
  clone.__proto__.deepseed=true
  let array = function(e){
    return e.map(e=>{
      if(typeof e=="function")return String(e)
      else if(e instanceof Array)return array(e)
      else if(typeof e=="object")return app.deepClone(e)
      else return e
    })
  }
  
  
  
  
  Object.keys(obj).forEach(e=>{
    if(typeof obj[e]=="function")clone[e]=String(obj[e])
    else if(obj[e] instanceof Array)clone[e]=array(obj[e])
    else if(typeof obj[e]=="object")clone[e]=app.deepClone(obj[e]);
    else clone[e]=obj[e]
  })
  return clone
}

