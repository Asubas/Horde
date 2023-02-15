const pets = [
    {
      dataId: 'lion',
      src: 'img/pets/lion.png',
    },
    {
      dataId: 'snow',
      src: 'img/zolik.png',
    },
    {
      dataId: 'dragon',
      src: 'img/estra.png',
    },
];


const pets_show = document.querySelector(".button_pets");
const pets_back = document.querySelector(".div_pets");
const pets_close = document.querySelector(".close_pets")
pets_show.addEventListener("click", function () {
    pets_back.classList.remove("visually_hidden");
    pets_back.classList.add("modal_show");
    console.log("qweqwe");
  });

  pets_close.addEventListener('click',function(){
    pets_back.classList.remove("modal_show");
    pets_back.classList.add("visually_hidden");
  })