var diliverSelect = document.querySelector(".servises-diliver-item");
var diliverButton = document.querySelector(".deliver-button");
var garanteeSelect = document.querySelector(".servises-garantee-item");
var garanteeButton = document.querySelector(".garantee-button");
var creditSelect = document.querySelector(".servises-credit-item");
var creditButton = document.querySelector(".credit-button");

diliverButton.addEventListener("click", function(evt){
  evt.preventDefault();
  diliverSelect.classList.add("currant");
  garanteeSelect.classList.remove("currant");
  creditSelect.classList.remove("currant");
});

garanteeButton.addEventListener("click", function(evt){
  evt.preventDefault();
  diliverSelect.classList.remove("currant");
  garanteeSelect.classList.add("currant");
  creditSelect.classList.remove("currant");
});

creditButton.addEventListener("click", function(evt){
  evt.preventDefault();
  diliverSelect.classList.remove("currant");
  garanteeSelect.classList.remove("currant");
  creditSelect.classList.add("currant");
});
