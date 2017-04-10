var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var subbtn = document.getElementById("subbtn");

// user clicks the button, open the modal
$(document).mouseleave(function () {
  modal.style.display = "block";
	$(document).unbind("mouseleave");
});

// user clicks on x, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

$('.form-inline').submit(function(e) {
  var $this = $(this);
  var newWindow = window.open();
  $.ajax({
      type: "GET",
      url: "https://doloops.us13.list-manage.com/subscribe/post-json?c=?",
      data: $this.serialize(),
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Error, unable to connect to registration server."); },
      success     : function(data) {
          if (data.result != "success") {
              $( ".formp" ).hide();
              $( ".formh1" ).text("Failure, please try again.")
          } else {
              $( ".form-img" ).hide();
              $( ".form-content" ).hide();
              // Change http://link.com/file.doc
              $( ".formp" ).text("http://link.com/file.doc")
              $( ".formh1" ).text("Success, thanks for subscribing.")
              // Change test.doc to same as above.
              newWindow.location = 'test.doc';
          }
      }
  });
  return false;
});
