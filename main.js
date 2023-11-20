function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("Learn More").removeClass("active");
  } else {
    $(target).html("Show Less").addClass("active");
  }

  const item = $(target).parents(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");

  $(detail).slideToggle();
}

function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#inp-email");
  const subject = $("#inp-subj");
  const message = $("#inp-mess");

  if (!email.val()) {
    alert("Email is required");
  } else if (!subject.val()) {
    alert("Subject is required");
  } else if (!message.val()) {
    alert("Message is required");
  } else {
    $(email).val("");
    $(subject).val("");
    $(message).val("");
    alert("Form Submitted");
  }
}
