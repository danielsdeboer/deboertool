$(document).ready(function() {
  $('textarea').textareaAutoSize();

  $('.grow').focus(function() {
    $(this).animate({'width': '30em'}, 250);
  });

  $('.grow').blur(function() {
    $(this).animate({'width': '20em', 'height': 'auto', 'min-height': '1em'}, 250);
  });

  $('#throughfeed-button').click(function() {
    $.get('_component_inline-process.html', function(html_payload) {
      $(html_payload).hide().appendTo('#throughfeed-load-target').fadeIn();
    });
  });
});


