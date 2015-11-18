module.exports.attach = function() {
  var $contactForm = $('.contact-form');
  if($contactForm) {
    $contactForm.submit(function(event) {
      event.preventDefault();

      if ($('#email-field').val() == '') {
        $('#email-field').focus();
        return alert('Please enter your e-mail');
      }

      else if ($('#name-field').val() == '') {
        $('#name-field').focus();
        return alert('Please enter your name');
      }

      else if ($('#text-field').val() == '') {
        $('#text-field').focus();
        return alert('Please leave us a message');
      }

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
