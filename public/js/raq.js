
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
