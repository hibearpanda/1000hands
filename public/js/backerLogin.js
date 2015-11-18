// Attaches event listeners for behind the scenes page
// Checks password, reveals bonus content on success
module.exports.attach = function() {
  var $passwordForm = $('.passwordForm');
  if($passwordForm) {
    $passwordForm.submit(function(event) {
      event.preventDefault();

      $.ajax({
        type: 'post',
        url: '/backer_login',
        data: JSON.stringify({ password: $('#passwordField').val() }),
        contentType: 'application/json',
        success: function(data) {
          $passwordForm.hide();
          $('.backer-content').show();
        },
        dataType: 'json'
      });

    });
  }
};
