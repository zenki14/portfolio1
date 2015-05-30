(function() {
  "use strict"

  //background color
  $(window).scroll(function () {
    var scroll = $(document).scrollTop();
    if ( scroll > 517 ) {
      $('header').css({"background": "#394053"});
    } else {
      $('header').css({"background": "none"});
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

}());