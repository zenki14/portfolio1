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

  var winHeight = $(window).height();
  $('.banner').css({
    'min-height': winHeight,
  });

  $(window).bind("load resize", function() {
    $('.banner').css({
      'min-height': winHeight,
    });
  });



  // menu button
  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    menuButton.classList.toggle('is-active');
    if ($(".menu-button").hasClass("is-active") === true) {
      $('header').css({"background": "#394053"});
      $('nav').fadeIn(300);
    } else {
      $('nav').fadeOut(300);
      if ($(document).scrollTop() < 516) {
        $('header').css({"background": "none"});
      }
    }
  });

  $('#nav a').on('click', function(){
    if ($(".menu-button").hasClass("is-active") === true) {
      menuButton.classList.toggle('is-active');
      $('nav').fadeOut(300);
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