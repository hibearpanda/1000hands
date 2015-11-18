var $ = require('jquery-browserify');
require('../../node_modules/slider-pro/dist/js/jquery.sliderPro.min.js');

var contactForm = require('./contact');
var backerLogin = require('./backerLogin');

$(document).ready(function() {
  // Mobile Menu
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

  // Hook up contact form
  contactForm.attach();

  // Hook up backer login form
  backerLogin.attach();

  //Run slide gallery
  $('#my-slider').sliderPro({
    width: '100%',
    height: 400,
    arrows: true
  });
});
