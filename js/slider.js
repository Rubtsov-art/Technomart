var firstSlider = document.querySelector(".slider-1");
var secondSlider = document.querySelector(".slider-2");
var buttonNext = document.querySelector(".slider-next");
var buttonBack = document.querySelector(".slider-back");

buttonNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstSlider.classList.toggle("currant");
  secondSlider.classList.toggle("currant");
} );

buttonBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstSlider.classList.toggle("currant");
  secondSlider.classList.toggle("currant");
} );
