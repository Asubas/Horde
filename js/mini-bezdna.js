
const mini = document.querySelectorAll('.mini-bezdna');


pm_visually[2].addEventListener('click', function(){
    for (let i = 0; i < mini.length; i++){
    if (mini[i].classList.contains('mini-bezdna-visually') ){
        mini[i].classList.remove('mini-bezdna-visually');
    }else{
        mini[i].classList.add('mini-bezdna-visually')
    }
}
})
