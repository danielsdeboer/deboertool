$(document).ready(function() {
  $('.table-of-contents li').click(function(e) {
    var vh = $(window).height() * .01;
    var index_number = $(this).index() + 1;
    e.preventDefault();
        
    $('html, body').animate({
      scrollTop: $('.material-cards section:nth-of-type('+index_number+')').offset().top-(vh * 17)
    }, 700);
  });
})
