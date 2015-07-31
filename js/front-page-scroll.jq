$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var height = $(window).height() - 200;

  $('.page-1-article, .page-1-footer').css({
    'opacity': ((height - scroll) / height)
    });
});

$(document).ready(function() {
  $('#nav1').click(function(event) {
    // window.height has to be the same height as the fixed page header; this is documented in the scss file for that element.
    var targetOffset = $('.page2').offset().top;

    event.preventDefault();
    $('html, body').animate({ scrollTop: targetOffset }, 1000);
  });
});

$(document).ready(function() {
  $('#nav2').click(function(event) {
    var targetOffset2 = $('.page3').offset().top;

    event.preventDefault(); // stop the a href click from doing anything
    $('html, body').animate({scrollTop: targetOffset2}, 1000);
  });
});

$(document).ready(function() {
  $('#nav3').click(function(event) {
    var targetOffset2 = $('.page4').offset().top;

    event.preventDefault(); // stop the a href click from doing anything
    $('html, body').animate({scrollTop: targetOffset2}, 1000);
  });
});