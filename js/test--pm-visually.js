
const pm_visually = document.querySelector('.test__button-pm');
const pm = document.querySelectorAll('.pm');

pm_visually.addEventListener('click', function(){
    for (let i = 0; i < pm.length; i++){
    if (pm[i].classList.contains('test--pm-visually') ){
        pm[i].classList.remove('test--pm-visually');
        console.log('rabotaet')
    }else{
        pm[i].classList.add('test--pm-visually')
    }
}
})