function toggle(el){ 
  if (el.className == "col-sm-4 col-lg-4 col-md-4"){
    el.className = "hidden";      
  } else {
    el.className = "col-sm-4 col-lg-4 col-md-4";
  }
};

function toggleform(el){
  if (el.className == "col-sm-8 col-lg-8 col-md-8"){
    el.className = "hidden";
  } else {
    el.className = "col-sm-8 col-lg-8 col-md-8";
  }
};
            
function togglebig(el){
  if (el.className == "col-sm-4 col-lg-4 col-md-4"){
    el.className = "col-sm-12 col-lg-12 col-md-12";
  } else {  
    el.className = "col-sm-4 col-lg-4 col-md-4";
  }
};

function togglecase(){
  toggle(cat);
  toggle(dog);
  toggle(elephant);
  toggleform(hcase);
};

function togglecat(){
  toggle(cases);
  toggle(dog);
  toggle(elephant);
  toggleform(hcat);
};

function toggledog(){
  toggle(cases);
  toggle(cat);
  toggle(elephant);
  toggleform(hdog);
};

function toggleelephant(){
  toggle(cases);
  toggle(cat);
  toggle(dog);
  toggleform(helephant);
};
