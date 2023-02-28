
const grund = document.querySelectorAll('.grund-hunt');


pm_visually[9].addEventListener('click', function(){
    for (let i = 0; i < grund.length; i++){
    if (grund[i].classList.contains('grund-hunt-visually') ){
        grund[i].classList.remove('grund-hunt-visually');
        console.log('rabotaet')
    }else{
        grund[i].classList.add('grund-hunt-visually')
    }
}
})
