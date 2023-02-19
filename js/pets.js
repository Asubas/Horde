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


const pets_show = document.querySelector('.button_pets');
const pets_back = document.querySelector('.div_pets');
const pets_close = document.querySelector('.close_pets')
const hidden_table = document.querySelector('.prioriti')

pets_show.addEventListener('click', function () {
  if(hidden_table.classList.contains('modal_show')){
    hidden_table.classList.remove('modal_show');
    hidden_table.classList.add('visually_hidden');
    pets_back.classList.remove('visually_hidden');
    pets_back.classList.add('modal_show');
  }else{
    pets_back.classList.remove('visually_hidden');
    pets_back.classList.add('modal_show');
  }
  });

  pets_close.addEventListener('click',function(){
    pets_back.classList.remove('modal_show');
    pets_back.classList.add('visually_hidden');
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



  // кнопушки резонанса

  const button__pet_rez_6 = document.querySelector('.button__pet_rez_6');
  const button__pet_rez_9 = document.querySelector('.button__pet_rez_9');
  const button__pet_rez_12 = document.querySelector('.button__pet_rez_12');
  

  const pet_6rez = document.querySelectorAll('.button_pet')

  button__pet_rez_6.addEventListener('click', function(evt){
    evt.preventDefault();
    for( let b =0; b < pet_6rez.length; b++){
    if( pet_6rez[b].classList.contains('6-rez')){
      pet_6rez[b].classList.remove('visually_hidden');
      console.log('raborat blyat')
    }
    if(!pet_6rez[b].classList.contains('6-rez')){
      pet_6rez[b].classList.add('visually_hidden')
    }
  }
  })

  
  button__pet_rez_9.addEventListener('click', function(evt){
    evt.preventDefault();
    for( let b =0; b < pet_6rez.length; b++){
    if( pet_6rez[b].classList.contains('9-rez')){
      pet_6rez[b].classList.remove('visually_hidden');
      console.log('raborat blyat')
    }if(!pet_6rez[b].classList.contains('9-rez') ){
      pet_6rez[b].classList.add('visually_hidden')
    }
  }
  })

  button__pet_rez_12.addEventListener('click', function(evt){
    evt.preventDefault();
    for( let b =0; b < pet_6rez.length; b++){
    if( pet_6rez[b].classList.contains('12-rez')){
      pet_6rez[b].classList.remove('visually_hidden');
      console.log('raborat blyat')
    }
    if(!pet_6rez[b].classList.contains('12-rez') ){
      pet_6rez[b].classList.add('visually_hidden')
    }
  }
  })