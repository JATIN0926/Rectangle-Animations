// Without Gsap
let container = document.getElementById("container");
let content = document.getElementById("content");
const { left, right } = container.getBoundingClientRect();
function changeBackgroundColor(){
   container.addEventListener("mousemove",(pos)=>{
      distanceFromCenter = (left+right)/2 - pos.x ; 
      distanceInpercentage = (distanceFromCenter /( right - (left+right)/2))*100;
      colorInpercentage = 255*(distanceInpercentage/100);
      if(pos.x <= (left+right)/2){
         container.style.backgroundColor = `rgb(${colorInpercentage},0,0)`
         content.innerHTML = `rgb(${colorInpercentage},0,0)`
      }
      else{
         container.style.backgroundColor = `rgb(0,0,${colorInpercentage * -1})`
         content.innerHTML = `rgb(0,0,${colorInpercentage * -1})`
      }
   })
   container.addEventListener("mouseleave",()=>{
      container.style.backgroundColor = 'white';
   })
}
changeBackgroundColor();
let container_2 = document.getElementById("container_2");
let main_container_2 = document.querySelector(".main-container-2")
main_container_2.addEventListener("mousemove",(pos)=>{
   container_2.style.left = pos.x - 120 + "px";
   container_2.style.top = pos.y + 400 + "px";
})
main_container_2.addEventListener("mouseleave",(pos)=>{
   container_2.style.left = 400+ "px";
   container_2.style.top = 800 + "px";
})

// with Gsap - not working

// let main_container =document.getElementById("container");
// main_container.addEventListener("mousemove",function(pos){
//    console.log(pos.x)
//    var container_location = main_container.getBoundingClientRect(); 
//    console.log(container_location.left);
//    console.log(container_location.right);

//    var inside_pos = pos.x - container_location.left;
//    if(inside_pos < (container_location.width)/2){
//     var redColor = gsap.utils.mapRange(0,(container_location.width)/2 , 255 , 0 , inside_pos);
//     gsap.to(main_container,{
//       backgroundColor : `rbg(${redColor},0,0)`,
//       ease : Power4,
//     });
//    }
//    else{
//       var blueColor = gsap.utils.mapRange((container_location.width)/2 ,(container_location.width), 0 , 255 , inside_pos);
//     gsap.to(main_container,{
//       backgroundColor : `rbg(0,0,${blueColor})`,
//       ease : Power4,
//     });
//    }
// });

