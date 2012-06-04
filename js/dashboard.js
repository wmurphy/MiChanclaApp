$('#tf_page_dashboard').live('pageshow',function(){
  try {
    // BEGIN: drupal services system connect (warning: don't use https if you don't have ssl setup)
    $.ajax({
      url: "http://michancla.es/rest/system/connect.json",
        type: 'post',
        dataType: 'json',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert('tf_page_login_submit - failed to login');
          console.log(JSON.stringify(XMLHttpRequest));
          console.log(JSON.stringify(textStatus));
          console.log(JSON.stringify(errorThrown));
        },
        success: function (data) {
          var tf_user = data.user;
          if (tf_user.uid == 0) { // user is not logged in, show the login button, hide the logout button
            $('#tf_login_button').show();
            $('#tf_logout_button').hide();
          }
          else { // user is logged in, hide the login button, show the logout button
            $('#tf_login_button').hide();
            $('#tf_logout_button').show();
          }
       }
    });
    // END: drupal services system connect
  }
  catch (error) { alert("tf_page_dashboard - " + error); }
});

$('#tf_logout_button').live("click",function(){
try {
  // BEGIN: drupal services user logout (warning: don't use https if you don't have ssl setup)
  $.ajax({
      url: "http://michancla.es/rest/user/logout.json",
      type: 'post',
      dataType: 'json',
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert('tf_logout_button - failed to logout');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
        alert("You have been logged out.");
        document.location.href = "../index.html#tf_page_dashboard";
      }
  });
  // END: drupal services system connect
}
catch (error) { alert("tf_logout_button - " + error); }
return false;
});