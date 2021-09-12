function toggle(element, imageContent) {
  $(element || this).animate({ opacity: 0 }, 500, function () {
    $(element).hide();
    $(imageContent).show().animate({ opacity: 1 }, 500);
  });
}

const overlays = document.querySelectorAll(".overlay-wrapper");

overlays.forEach((overlay) => {
  overlay.addEventListener(
    "mouseover",
    function () {
      const overlay_cont = overlay.querySelector(".overlay-cont");
      overlay_cont.style.display = "block";
    },
    true
  );

  overlay.addEventListener(
    "mouseout",
    function () {
      const overlay_cont = overlay.querySelector(".overlay-cont");
      overlay_cont.style.display = "none";
    },
    true
  );
});


$(document).ready(function () {
  $(".img-content").click(function (event) {
    const toggledElement = $(event.target).hasClass("img-content")
      ? $(event.target)
      : $(event.target).parent();
    toggle(toggledElement, $(toggledElement).prev());
  });

  $(".img-cont").click(function () {
    toggle(this, $(this).next());
  });

  $("#myForm").submit(function (e) {
    e.preventDefault();

    const myForm = e.target;

    const formData = new FormData(myForm);
    $(myForm)
      .find(".myAlert")
      .addClass("alert-success")
      .html(
        `** ${myForm.fname.value} we have received your message. Thank you for reaching out to us. **`
      )
      .show();
  });
});
