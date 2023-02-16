const pets = [
    {
      dataId: 'lion',
      src: 'img/pets/lion_guide.png',
    },
    {
      dataId: 'fire_dragon',
      src: 'img/pets/fire_dragon_guide.png',
    },
    {
      dataId: 'shield',
      src: 'img/pets/shield_beast_guide.png',
    },
    {
      dataId: 'fire_beast',
      src: 'img/pets/fire_beast_shield_guide.png',
    },
    {
      dataId: 'yasher',
      src: 'img/pets/stone_guide.png',
    },
    {
      dataId: 'ice',
      src: 'img/pets/ice_beast_guide.png',
    },
    {
      dataId: 'owl',
      src: 'img/pets/owl_guide.png',
    },
    {
      dataId: 'night_cat',
      src: 'img/pets/night_cat_guide.png',
    },
    {
      dataId: 'bamby',
      src: 'img/pets/bamby_guide.png',
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


  const containerButtonsPets = document.querySelectorAll('.button_pet');
 
  function showPictures(src = '') {
    
    let img = modal?.querySelector('img');
    img.src = src;
    modal?.classList.remove('visually_hidden');
    modal?.classList.add('modal_show');
  }

  containerButtonsPets.forEach(elem => {
    const elemDataId = elem.getAttribute('data-id') || null; // вытаскиваещь значение дата атрибута
    const imgSrc =
      pets.find(({ dataId }) => dataId === elemDataId)?.src || // проходишься по массиву с данными , в нем ищещь картинку у которой dataId  как у кнопки data-id
      '/ссылка на ТАКОЙ КАРТИНКИ НЕ НАЙДЕНО'; // добавляешь ссылку на заглушуку если такой картинки у тебя в массиве нет
    elem.addEventListener('click', () => showPictures(imgSrc)); // добавляешь эвент на кнопку в котором прокидываешь в функцию параметр src для картинки
  });