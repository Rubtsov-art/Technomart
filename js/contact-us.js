var contactUs = document.querySelector(".write-us-field");
var chatButton = document.querySelector(".chat");
var close = document.querySelector(".close-write-us");

chatButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUs.classList.remove("visually-hidden");
} );

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUs.classList.add("visually-hidden");
} );
