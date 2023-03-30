
const worldboss = document.querySelectorAll('.worldboss');


pm_visually[7].addEventListener('click', function(){
    for (let i = 0; i < worldboss.length; i++){
    if (worldboss[i].classList.contains('worldboss-visually') ){
        worldboss[i].classList.remove('worldboss-visually');
    }else{
        worldboss[i].classList.add('worldboss-visually')
    }
}
})
