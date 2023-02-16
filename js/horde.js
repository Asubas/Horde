const guide = document.querySelector('.button_guide');
const guide_vusually = document.querySelector('.prioriti');
const hidden = document.querySelector('.visually_hidden');
const close_window = document.querySelector('.close_window');

const pet_watch = document.querySelector('.div_pets')


guide.addEventListener('click', function () {
  if(pet_watch.classList.contains('modal_show')){
    pet_watch.classList.remove('modal_show');
    pet_watch.classList.add('visually_hidden')
  }
  guide_vusually.classList.remove('visually_hidden');
  guide_vusually.classList.add('modal_show');
});


  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (guide_vusually.classList.contains('modal_show') && modal.classList.contains('visually_hidden')) {
        evt.preventDefault();
        guide_vusually.classList.remove('modal_show');
        guide_vusually.classList.add('visually_hidden');
      }
    }
  });


close_window.addEventListener('click', function (evt) {
  evt.preventDefault();
  guide_vusually.classList.remove('modal_show');
  guide_vusually.classList.add('visually_hidden');
});



