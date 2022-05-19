// Toggle Hide or Show onclick event.

let btn= document.getElementById('btnPrimary');
btn.addEventListener("click",displayToggle);

// function bgRed starts
function displayToggle(){
  let para= document.getElementById("para");
  if(para.style.display!="none"){
    para.style.display="none";
  }
  
  else{
    para.style.display="block";
  }
}

// Mouseover or mouseout event

var para= document.getElementById("para");
para.addEventListener("mouseover", bgRed);
function bgRed(){
  para.style.background="red";
  para.style.color="white";
}

var para= document.getElementById("para");
para.addEventListener("mouseout", bgNormal);
function bgNormal(){
  para.style.background="white";
  para.style.color="black";
}