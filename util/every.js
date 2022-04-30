app.every=function TimeLoop(every=0,func=console.log,delay=0){
  const time={}
  let tr=setTimeout(e=>e,0)
  let loop=0
  let ret;
  
  time._func=func
  time._every=every
  
  time.func=async function(){
    await time._func(loop)
    loop++
    tr=setTimeout(time.func,time._every)
  }
  
  time.clear=function(after=0){
    setTimeout(e=>clearTimeout(tr),after)
    return this
  }
  
  tr=setTimeout(time.func,delay)
  return time
}
