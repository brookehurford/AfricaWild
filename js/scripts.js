$(document).ready(function() {
  $(".mobileMenu").hide();
  $(".navIcon").click(function() {
    $(".mobileMenu").slideToggle();
  })
  $(".closeX").click(function() {
    $(".mobileMenu").slideUp();
  })
});
