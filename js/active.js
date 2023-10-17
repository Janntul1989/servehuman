// Sticky Header
$(window).scroll(function () {
  var window_top = $(window).scrollTop() + 1;
  if (window_top > 50) {
    $('.site-navigation').addClass('menu_fixed animated fadeInDown');
  } else {
    $('.site-navigation').removeClass('menu_fixed animated fadeInDown');
  }
});


// scroll to top
$(document).ready(function () {
  // Show or hide the sticky footer button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 300);
  })
});