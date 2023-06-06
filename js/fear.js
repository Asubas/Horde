
const fear = document.querySelectorAll('.fear');


pm_visually[9].addEventListener('click', function(){
    for (let i = 0; i < fear.length; i++){
    if (fear[i].classList.contains('fear-visually') ){
        fear[i].classList.remove('fear-visually');

    }else{
        fear[i].classList.add('fear-visually')
    }
}
})

