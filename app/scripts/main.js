(function() {
  "use strict"

  //background color
  $(window).scroll(function () {
    var scroll = $(document).scrollTop();
    if ( scroll > 516 ) {
      $('header').css({"background": "#394053"});
    } else {
      $('header').css({"background": "none"});
    }
    if ( scroll > 100 ) {
      $('h1').css({"opacity": 0});
    } else { 
      $('h1').css({"opacity": 1});

    }
  });



  // menu button
  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
      e.preventDefault();
      menuButton.classList.toggle('is-active');
      if ($(".menu-button").hasClass("is-active") === true) {
        $('nav').show();
      } else {
        $('nav').hide();
      }
  });

  $(".goto").click(function(e) {
      var section = e.currentTarget.attributes[0].value
      var headerHeight = $('header').outerHeight();
      $('html, body').animate({
          scrollTop: $(section).offset().top - headerHeight
      }, 400);
  });

}());