
const tower = document.querySelectorAll('.tower');


pm_visually[6].addEventListener('click', function(){
    for (let i = 0; i < tower.length; i++){
    if (tower[i].classList.contains('tower-visually') ){
        tower[i].classList.remove('tower-visually');
        console.log('rabotaet')
    }else{
        tower[i].classList.add('tower-visually')
    }
}
})
