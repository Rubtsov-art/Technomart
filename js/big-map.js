var openBigMap = document.querySelector(".mini-map");
var bigMap = document.querySelector(".big-map");
var closeBigMap = document.querySelector(".close-map");

openBigMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.remove("visually-hidden");
});

closeBigMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("visually-hidden");
});
