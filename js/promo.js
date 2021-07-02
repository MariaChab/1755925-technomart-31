
const SliderPerforator = document.querySelector(".promo-slider_item_perforator");
const SliderDrill = document.querySelector(".promo-slider_item_drill");
const nextBtn = document.querySelector(".promo-slider_button-next");
const backBtn = document.querySelector(".promo-slider_button-back");
const slideOne = document.querySelector(".promo-slide-one");
const slideTwo = document.querySelector(".promo-slide-two");



slideOne.addEventListener("click", function (evt) {
  slideOne.classList.add("current");
  SliderDrill.classList.add("promo-slider_item_current");
  slideTwo.classList.remove("current");
  SliderPerforator.classList.remove("promo-slider_item_current");
});

slideTwo.addEventListener("click", function (evt) {
  slideTwo.classList.add("current");
  SliderPerforator.classList.add("promo-slider_item_current");
  slideOne.classList.remove("current");
  SliderDrill.classList.remove("promo-slider_item_current");
});

nextBtn.addEventListener("click", function (evt) {
  SliderPerforator.classList.toggle("promo-slider_item_current");
  SliderDrill.classList.toggle("promo-slider_item_current");
  slideTwo.classList.toggle("current");
  slideOne.classList.toggle("current");
});

backBtn.addEventListener("click", function (evt) {
  SliderPerforator.classList.toggle("promo-slider_item_current");
  SliderDrill.classList.toggle("promo-slider_item_current");
  slideTwo.classList.toggle("current");
  slideOne.classList.toggle("current");
});
