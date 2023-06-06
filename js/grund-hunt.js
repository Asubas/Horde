
const grund = document.querySelectorAll('.grund-hunt');


pm_visually[8].addEventListener('click', function(){
    for (let i = 0; i < grund.length; i++){
    if (grund[i].classList.contains('grund-hunt-visually') ){
        grund[i].classList.remove('grund-hunt-visually');

    }else{
        grund[i].classList.add('grund-hunt-visually')
    }
}
})
