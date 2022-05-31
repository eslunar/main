app.after=function TimeAfter(delay,func){
  const time={}
  let tr=setTimeout(()=>{},0)
  
  time._func=func
  time.clear=function(after=0){
    setTimeout(e=>clearTimeout(tr),after)
  }
  tr=setTimeout(time._func,delay)
  return time
}
