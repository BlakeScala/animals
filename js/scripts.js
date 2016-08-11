$(document).ready(function() {
  $("form").submit(function(event) {
      var animal = $("#animal1").val();
      event.preventDefault();
    if (animal === "Snake") {
      $("#snake").show();
      $("#turtle").hide();
      $("#monkey").hide();
    } else if (animal === "Turtle") {
      $("#turtle").show();
      $("#monkey").hide();
      $("#snake").hide();
    } else if (animal === "Monkey") {
      $("#monkey").show();
      $("#snake").hide();
      $("#turtle").hide();
    }
  });
});
