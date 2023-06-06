
const pm_visually = document.querySelectorAll('.table__button');
const pm = document.querySelectorAll('.pm');

pm_visually[10].addEventListener('click', function(){
    for (let i = 0; i < pm.length; i++){
    if (pm[i].classList.contains('pm-visually') ){
        pm[i].classList.remove('pm-visually');
    }else{
        pm[i].classList.add('pm-visually')
    }
}
})