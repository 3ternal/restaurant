$(document).ready(function() {
  $("#menu-text, #contact-text").hide();
  $("#content").append("<img src='restaurant.jpg'>")
  $("#content > img").css('max-width', '500px');
  $("#content").append("<h1>This is the best restaurant. Proudly serving food since 1901.</h1>");
  $("#content").append("<p>Hooray for restaurants! You can count on us to provide you with all forms of nourishment.</p>");

  $("#about").click(function() {
    $(".body-text p").hide();
    $("#about-text").show();
    tabColor();
  });
  $("#menu").click(function() {
    $(".body-text p").hide();
    $("#menu-text").show();
    tabColor();
  });
  $("#contact").click(function() {
    $(".body-text p").hide();
    $("#contact-text").show();
    tabColor();
  });

  function tabColor() {
    if ($("#about-text").is(":visible")) {
      $("#about").css('background-color', '#F3F3F3');
    }
    else {
      $("#about").css('background-color', '#DFDFDF');
    }

    if ($("#menu-text").is(":visible")) {
      $("#menu").css('background-color', '#F3F3F3');
    }
    else {
      $("#menu").css('background-color', '#DFDFDF');
    }

    if ($("#contact-text").is(":visible")) {
      $("#contact").css('background-color', '#F3F3F3');
    }
    else {
      $("#contact").css('background-color', '#DFDFDF');
    }
  }

});
