module.exports.attach = function() {
  var $contactForm = $('.contact-form');
  if($contactForm) {
    $contactForm.submit(function(event) {
      event.preventDefault();

      var $email = $('#email-field');
      var $name = $('#name-field');
      var $text = $('#text-field');

      if ($email.val() == '') {
        $email.focus();
        return alert('Please enter your e-mail');
      } else if ($name.val() == '') {
        $name.focus();
        return alert('Please enter your name');
      } else if ($text.val() == '') {
        $text.focus();
        return alert('Please leave us a message');
      }

      var message = {
        email: $email.val(),
        name: $name.val(),
        text: $text.val()
      };

      $.ajax({
        type: "POST",
        url: '/contact',
        data: JSON.stringify(message),
        contentType: 'application/json',
        crossDomain: 'true',
        success: function(data) {
          $('.contact-form').hide();
          $('.on-submit').show();
        },
        dataType: 'json'
      });
    });
  }
};
