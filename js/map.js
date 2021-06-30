const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".modal-map");
const mapCloseBtn = document.querySelector(".button-close-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-show");
});

mapCloseBtn.addEventListener("click", function (evt) {
  mapPopup.classList.remove("map-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("map-show");
     }
  }
});
