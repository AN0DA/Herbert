function openNav() {
    document.getElementById("sideNav").style.width = "18vw";
    document.getElementById("sideNav").style.top = "18vw";
    document.getElementById("sideNav_hidden").style.width = "0";
    
    document.getElementById("logo_div").style.width = "18vw";
    document.getElementById("logo_div").style.height = "18vw";
    document.getElementById("logo_div").style.borderRadius = "0";
    
    document.getElementById("title").style.marginLeft = "18vw";
    
    document.getElementById("main").style.marginLeft = "23.5vw";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav").style.top = "13vw";
    document.getElementById("sideNav_hidden").style.width = "5vw";
    
    document.getElementById("logo_div").style.width = "13vw";
    document.getElementById("logo_div").style.height = "13vw";
    document.getElementById("logo_div").style.borderRadius = "0 0 10px 0";
    
    document.getElementById("title").style.marginLeft = "13vw";
    
<<<<<<< HEAD:Script.js
    document.getElementById("main").style.marginLeft = "18.5vw";
}

/* zmiana nav po zescrolowaniu, do zrobienia w wolnej chwili 
 * 
$(document).ready(function() {
    
  $(window).scroll(function () {
      
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});

*/
=======
    document.getElementById("main").style.marginLeft = "0";
}
<<<<<<< HEAD:Script.js
>>>>>>> 4785734f949daf5993519868ac56576a18f8e3aa:script.js
=======
>>>>>>> 4785734f949daf5993519868ac56576a18f8e3aa:script.js