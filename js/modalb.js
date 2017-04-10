var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var spantwo = document.getElementsByClassName("close")[1];
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

spantwo.onclick = function() {
    modal.style.display = "none";
}

$('.form-pop').submit(function(e) {
  var $this = $(this);
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
              $( ".form-content" ).hide();
              $( ".formp" ).text("COUPON CODE")
              $( ".formh1" ).text("Success, thanks for subscribing.")
          }
      }
  });
  return false;
});
