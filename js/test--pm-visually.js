
const pm_visually = document.querySelectorAll('.table__button');
const pm = document.querySelectorAll('.pm');

pm_visually[0].addEventListener('click', function(){
    for (let i = 0; i < pm.length; i++){
    if (pm[i].classList.contains('test--pm-visually') ){
        pm[i].classList.remove('test--pm-visually');
        console.log('rabotaet')
    }else{
        pm[i].classList.add('test--pm-visually')
    }
}
})