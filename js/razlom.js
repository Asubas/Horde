
const razlom = document.querySelectorAll('.razlom');


pm_visually[8].addEventListener('click', function(){
    for (let i = 0; i < razlom.length; i++){
    if (razlom[i].classList.contains('razlom-visually') ){
        razlom[i].classList.remove('razlom-visually');
        console.log('rabotaet')
    }else{
        razlom[i].classList.add('razlom-visually')
    }
}
})
