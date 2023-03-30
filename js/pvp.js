
const pvp = document.querySelectorAll('.pvp');


pm_visually[4].addEventListener('click', function(){
    for (let i = 0; i < pvp.length; i++){
    if (pvp[i].classList.contains('pvp-visually') ){
        pvp[i].classList.remove('pvp-visually');
    }else{
        pvp[i].classList.add('pvp-visually')
    }
}
})
