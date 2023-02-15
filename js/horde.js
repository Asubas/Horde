const guide = document.querySelector(".button_guide");
const guide_vusually = document.querySelector(".prioriti");
const hidden = document.querySelector(".visually_hidden");
const close_window = document.querySelector(".close_window");



guide.addEventListener("click", function () {
  guide_vusually.classList.remove("visually_hidden");
  guide_vusually.classList.add("modal_show");
  console.log("qweqwe");
});


  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      if (guide_vusually.classList.contains("modal_show") && modal.classList.contains("visually_hidden")) {
        evt.preventDefault();
        guide_vusually.classList.remove("modal_show");
        guide_vusually.classList.add("visually_hidden");
      }
    }
  });


close_window.addEventListener("click", function (evt) {
  evt.preventDefault();
  guide_vusually.classList.remove("modal_show");
  guide_vusually.classList.add("visually_hidden");
});



