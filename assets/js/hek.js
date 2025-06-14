(function(){
  let trap=new Image();
  Object.defineProperty(trap,'id',{
    get:function(){
      setTimeout(function(){document.body.innerHTML='';},10);
      throw new Error();
    }
  });

  setInterval(function(){console.dir(trap);},500);

  setInterval(function(){
    let t=performance.now(); debugger;
    if(performance.now()-t>100){window.close();}
  },2000);

  ['keydown','keyup','keypress','contextmenu','selectstart','dragstart','copy'].forEach(e=>{
    document.addEventListener(e,f=>f.preventDefault());
  });

  setInterval(function(){
    try{navigator.clipboard.writeText('');}catch(e){}
  },1500);

  window.addEventListener("keydown",function(e){
    if(e.ctrlKey&&['s','u','p','i','j','c'].includes(e.key.toLowerCase())){
      e.preventDefault();
    }
  },false);

  if(window.top!==window.self){
    window.top.location=window.self.location;
  }

  document.onkeydown=function(e){
    if(e.ctrlKey&&e.key.toLowerCase()==='u'){
      window.location.replace("https://http.cat/403");
      return false;
    }
  };

  setInterval(function(){
    console.clear();
    console.log=function(){};
    console.warn=function(){};
    console.error=function(){};
    console.info=function(){};
  },300);

  document.addEventListener("DOMContentLoaded",function(){
    document.body.innerHTML='';
  });

})();
