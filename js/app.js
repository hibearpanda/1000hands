$(document).ready(function() {
  $('.hamburger-icon').click(function() {
    if($('.menu-items').hasClass('menu-slideup')) {
      $('.menu-items').removeClass('menu-slideup');
      $('.menu-items').addClass('menu-slidedown');
    }

    else {
      $('.menu-items').removeClass('menu-slidedown');
      $('.menu-items').addClass('menu-slideup');
    }
  });
});