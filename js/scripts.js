//backend logic
function toggle(element, imageContent) {
  $(element || this).animate({opacity: 0}, 500, function() {
    $(element).hide();
    $(imageContent).show().animate({opacity:1}, 500,);
  });
}


//user logic
$(document).ready(function() {
  $('.img-content').click(function(event) {

    const toggledElement = $(event.target).hasClass('img-content') ? $(event.target) : $(event.target).parent();
    toggle(toggledElement, $(toggledElement).prev());
  });

  $('.img-cont').click(function() {
    toggle(this, $(this).next());
  });

  $('#myForm').submit(function(e) {
    e.preventDefault();

    const myForm = e.target;
    
    const formData = new FormData(myForm);
    $(myForm).find('.myAlert').addClass('alert-success').
    html(`** ${myForm.fname.value} we have received your message. Thank you for reaching out to us. **`).show();
  });

  $('.overlay-wrapper').mouseover(function() {
    $(".overlay-cont").show();
  });
  
  $('.overlay-wrapper').mouseout(function() {
    $(".overlay-cont").hide();
  });
});