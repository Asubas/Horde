const guide = document.querySelector('.main-navigation__list-button');
const guide_vusually = document.querySelector('.modal-table');
const hidden = document.querySelector('.visually_hidden');
const button_close = document.querySelector('.modal-table__button-close');
const pet_watch = document.querySelector('.pet-page')


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


button_close.addEventListener('click', function (evt) {
  evt.preventDefault();
  guide_vusually.classList.remove('modal_show');
  guide_vusually.classList.add('visually_hidden');
});


// window.addEventListener('click', function (event) {
//   if ((window.innerWidth < 768) && guide_vusually.classList.contains('modal_show') ) {
//     console.log('andrey');
//       if(event.target !== guide_vusually){
//       guide_vusually.classList.remove('modal_show');
//       guide_vusually.classList.add('visually_hidden');
//       console.log('andrey2');
//   }
//   }
// });

// function handleClickOutside(event) {
//   if (!guide_vusually?.current?.contains(event.target)) {
//     if ((window.innerWidth < 768) && guide_vusually.classList.contains('modal_show') ) {
//       console.log('ne yspel')
//         if(event.target !== guide_vusually){
//         guide_vusually.classList.remove('modal_show');
//         guide_vusually.classList.add('visually_hidden');
//         console.log('rabotaem')
//     }
//     }
//   }
//  }

//  document.addEventListener('mousedown', handleClickOutside);

// const modal = document.querySelector('.modal-table');
// console.log(modal)