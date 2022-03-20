app.listeners=[]
app.listen=function ThreadListener(id,func){
  app.listeners.push({id,func})
  return this
}

app.post=function ThreadPoster(id,data){
  if(app.threads){
    if(!data){
    data=id;
    id="main";
  }
  app.threads.filter(e=>e.id==id).map(e=>e.worker.postMessage(["post",data,id]))
  }
  else {
  if(!data){
    data=id;
    id="main";
  }
  self.postMessage(["post",data,id])
  }
}
