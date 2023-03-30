
const scraml = document.querySelectorAll('.scrambl');


pm_visually[1].addEventListener('click', function(){
    for (let i = 0; i < scraml.length; i++){
    if (scraml[i].classList.contains('test--scrambl-visually') ){
        scraml[i].classList.remove('test--scrambl-visually');
    }else{
        scraml[i].classList.add('test--scrambl-visually')
    }
}
})
