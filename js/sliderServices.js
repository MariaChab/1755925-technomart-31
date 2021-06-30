
const deliveryBtn = document.querySelector(".services_item_link--delivery");
const guaranteeBtn = document.querySelector(".services_item_link--guarantee");
const creditBtn = document.querySelector(".services_item_link--credit");
const deliveryBox = document.querySelector(".services_box--delivery");
const guaranteeBox = document.querySelector(".services_box--guarantee");
const creditBox = document.querySelector(".services_box--credit");


deliveryBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliveryBtn.classList.add("services_item_link_current");
  guaranteeBtn.classList.remove("services_item_link_current");
  creditBtn.classList.remove("services_item_link_current");
  deliveryBox.classList.add("services_box_current");
  guaranteeBox.classList.remove("services_box_current");
  creditBox.classList.remove("services_box_current");
});

guaranteeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  guaranteeBtn.classList.add("services_item_link_current");
  deliveryBtn.classList.remove("services_item_link_current");
  creditBtn.classList.remove("services_item_link_current");
  guaranteeBox.classList.add("services_box_current");
  deliveryBox.classList.remove("services_box_current");
  creditBox.classList.remove("services_box_current");
});

creditBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditBtn.classList.add("services_item_link_current");
  deliveryBtn.classList.remove("services_item_link_current");
  guaranteeBtn.classList.remove("services_item_link_current");
  creditBox.classList.add("services_box_current");
  deliveryBox.classList.remove("services_box_current");
  guaranteeBox.classList.remove("services_box_current");
});
