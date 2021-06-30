const contactLink = document.querySelector(".contact-form-link");
const contactPopup = document.querySelector(".contact-form-container");
const closeBtn = document.querySelector(".button-close");
const contactName = document.querySelector(".contact-form_input_name");
const contactEmail = document.querySelector(".contact-form_input_email");
const contactForm = document.querySelector(".contact-form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("contact-show");
  if (storage) {
    contactName.value = storage;
    contactEmail.focus();
  } else {
  contactName.focus();}
});

closeBtn.addEventListener("click", function (evt) {
  contactPopup.classList.remove("contact-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value)
  {evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");}
  else { if (isStorageSupport) {
    localStorage.setItem("name", contactName.value); }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("contact-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("contact-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});





