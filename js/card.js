let buyButtons = document.querySelectorAll(".article_button-buy");
let popupInBasket = document.querySelector(".popup-in-the-basket");
let closePopupInBasket = document.querySelector(".popup-in-the-basket-close");




for (let buyButton of buyButtons) {
  buyButton.onclick = function () {
  popupInBasket.classList.add("popup-in-the-basket-show")
  };
}


closePopupInBasket.addEventListener("click", function (evt) {
  popupInBasket.classList.remove("popup-in-the-basket-show");
});


