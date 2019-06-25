window.onscroll = function() {
    scrollFunction()
};

$(document).ready(function() {

    // Transition effect for navbar and back-to-top icon
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 550) { 
          $('.main-nav').addClass('solid');
          $('.back-to-top').addClass('visible'); 
      } else {
          $('.main-nav').removeClass('solid');
          $('.back-to-top').removeClass('visible');  
      }

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("main-nav").style.fontSize = "16px";
      } else {
        document.getElementById("main-nav").style.fontSize = "20px";
      }
    
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("backtotop").style.display = "block";
      } else {
        document.getElementById("backtotop").style.display = "none";
      }

    });


    // Scrolling effect for Arrow icons
    $("#scrollIcon").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });


    //Scrolling effect for nav bar
    $("#nav-about").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });
    $("#nav-portfolio").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#portfolio"), 1000);
    });
    $("#nav-contact").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#contact"), 1000);
    });
    $(".nav-cheong").click(function(e) {
        e.preventDefault();
        $.scrollTo(0, 1000);
    });
  });

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $.scrollTo(0,1000);
}