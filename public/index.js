document.getElementsByClassName("hover")[0].addEventListener("mouseenter", () => {
   document.getElementById("catch").classList.remove("list");
   document.getElementById("catch").classList.add("some");
})


 
 document.getElementById("catch").addEventListener("mouseenter", () => {
    document.getElementById("catch").classList.remove("list");
   document.getElementById("catch").classList.add("some");
 })
 
 document.getElementById("catch").addEventListener("mouseleave", () => {
    document.getElementById("catch").classList.add("list");
   document.getElementById("catch").classList.remove("some");
 })

  document.getElementById("trueorfalse").addEventListener("click",()=>{
   var m=document.getElementById("trueorfalse").checked;
   if(m==1)
 {
   
      document.getElementById("menu").style.opacity="1";
    
 }
 else
 {
   
      document.getElementById("menu").style.opacity="0";
    
 }

  })
  
