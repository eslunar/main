/*setup events system
temp={
  stamp:{
    event:{
      extensions:array,
      exec:function,
    }
  }
}
*/
app.events={}

function Element(elem,opt){
  this.raw=typeof elem=="string"?app.html.parse(elem)[0]:(elem.raw||elem)
  
  /*gets a list of all node values and||or texts inside element*/this.nodes=require(app.lib+"/psui/element/node",{record:false})
  /*refresh an elements status*/this.refresh=require(app.lib+"/psui/element/refresh",{record:false})
  
  /*adds Elements as children*/this.add=require(app.lib+"/psui/element/add",{record:false})
  /*removes Elements from children*/this.remove=require(app.lib+"/psui/element/remove",{record:false})
  
  /*converts html strings to Elements and adds them to this*/this.html=require(app.lib+"/psui/element/html",{record:false})
  /*adds text to this, overides children*/this.text=require(app.lib+"/psui/element/text",{record:false})
  /*clones element*/this.clone=()=>app.html.stringify([this.raw])
  
  /*sets the attribute of an element*/this.attr=require(app.lib+"/psui/element/attr",{record:false})
  /*sets the style of an element*/this.css=require(app.lib+"/psui/element/css",{record:false})
  
  
  this.refresh("create")
}
