$(function() {
  $('#mc-embedded-subscribe-form').submit(function() {
    setTimeout(function() {
      if ($('#mce-success-response:visible').length) {
        fbq('track', 'Lead');
      }
    }, 1000);
  });
});
