// Attaches event listeners for behind the scenes page
// Checks password, reveals bonus content on success
module.exports.attach = function() {
  var $passwordForm = $('.password-form');
  if($passwordForm) {
    $passwordForm.submit(function(event) {
      event.preventDefault();

      $.ajax({
        type: 'post',
        url: '/backer_login',
        data: JSON.stringify({ password: $('#password-field').val() }),
        contentType: 'application/json',
        success: function(data) {
          if (data.success) {
            $passwordForm.hide();
            $('.backer-content').show();
          } else {
            return alert('Incorrect Password!');
          }
        },
        dataType: 'json'
      });

    });
  }
};
