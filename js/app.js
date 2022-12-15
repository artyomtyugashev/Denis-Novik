$(document).ready(function () {
   $('.burger').click(function () {
      $('.burger').toggleClass('open-menu');
      $('.nav').toggleClass('open-menu');
      $('.nav').toggleClass('nav__menu ');
   });
});

$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.burger, .nav__menu').toggleClass('active');
      $('body').toggleClass('fixed-page');
   });
});