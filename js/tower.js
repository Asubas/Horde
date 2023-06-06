
const tower = document.querySelectorAll('.tower');


pm_visually[5].addEventListener('click', function(){
    for (let i = 0; i < tower.length; i++){
    if (tower[i].classList.contains('tower-visually') ){
        tower[i].classList.remove('tower-visually');
    }else{
        tower[i].classList.add('tower-visually')
    }
}
})
