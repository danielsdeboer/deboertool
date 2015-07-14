$(document).ready(function() {
  var vh = $(window).height() * .01;

  $('.table-of-contents li').click(function(e) {
    var index_number = $(this).index() + 1;
    e.preventDefault();
        
    $('html, body').animate({
      scrollTop: $('.material-cards section:nth-of-type('+index_number+')').offset().top-(vh * 17)
    }, 1000);
  });
})
