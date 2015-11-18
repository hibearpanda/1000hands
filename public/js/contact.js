module.exports.attach = function() {
  var $contactForm = $('.contact-form');
  if($contactForm) {
    $('.contact-form').submit(function(event) {
      event.preventDefault();
      var message = {
        email: $('#email-field').val(),
        name: $('#name-field').val(),
        text: $('#text-field').val()
      };
      console.log('sending message', message);

      $.ajax({
        type: "POST",
        url: '/contact',
        data: JSON.stringify(message),
        contentType: 'application/json',
        crossDomain: 'true',
        success: function(data) {
          console.log(data);
        },
        dataType: 'json'
      });

      $('.contact-form').hide();
      $('.on-submit').show();
    });
  }
};
