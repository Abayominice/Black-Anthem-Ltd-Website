//This section of codes is for the hero image slider
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    //slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}


/***************************************************************************************************************************************
****************************************************************************************************************************************
***************************************************************************************************************************************/
//This section is for the three column section image slider

var slideIndex2 = 1;

var myTimer2;

var slideshowContainer2;

window.addEventListener("load",function() {
    showSlides2(slideIndex2);
    myTimer2 = setInterval(function(){plusSlides2(1)}, 3000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    //slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer2 = document.getElementsByClassName('isds')[0];
  
    slideshowContainer2.addEventListener('mouseenter', pause)
    slideshowContainer2.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides2(n){
  clearInterval(myTimer2);
  if (n < 0){
    showSlides2(slideIndex2 -= 1);
  } else {
   showSlides2(slideIndex2 += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer2 = setInterval(function(){plusSlides2(n + 2)}, 3000);
  } else {
    myTimer2 = setInterval(function(){plusSlides2(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide2(n){
  clearInterval(myTimer2);
  myTimer2 = setInterval(function(){plusSlides2(n + 1)}, 3000);
  showSlides2(slideIndex2 = n);
}

function showSlides2(n){
  var i;
  var slides2 = document.getElementsByClassName("img");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

pause = () => {
  clearInterval(myTimer2);
}

resume = () =>{
  clearInterval(myTimer2);
  myTimer2 = setInterval(function(){plusSlides2(slideIndex2)}, 3000);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  const menu_item = document.querySelector(".menuitems");
  const menu_toggler = document.querySelector(".icimg");
  menu_item.classList.toggle("show");

}


function hideNav(){
  const main_menu_is_visible  = document.querySelector(".show");
  if(main_menu_is_visible){
    const menu_item = document.querySelector(".menuitems");
    menu_item.classList.remove("show");
}
}



