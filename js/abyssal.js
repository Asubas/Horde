
const abyssal = document.querySelectorAll('.abyssal');


pm_visually[2].addEventListener('click', function(){
    for (let i = 0; i < abyssal.length; i++){
    if (abyssal[i].classList.contains('abyssal-visually') ){
        abyssal[i].classList.remove('abyssal-visually');
    }else{
        abyssal[i].classList.add('abyssal-visually')
    }
}
})
