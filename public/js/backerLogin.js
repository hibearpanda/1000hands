// Attaches event listeners for behind the scenes page
// Checks password, reveals bonus content on success
module.exports.attach = function() {
  var $passwordField = $('.passwordField');
  if($passwordField) {
    $passwordField.submit(function(event) {
      event.preventDefault();

      $.ajax({
        type: 'post',
        url: '/backer_login',
        data: JSON.stringify({ password: $passwordField.val() }),
        contentType: 'application/json',
        success: function(data) {
          $passwordField.hide();
          $('.backer-content').show();
        },
        dataType: 'json'
      });

    });
  }
};
