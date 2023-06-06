
const campaign = document.querySelectorAll('.campaign');


pm_visually[4].addEventListener('click', function(){
    for (let i = 0; i < campaign.length; i++){
    if (campaign[i].classList.contains('campaign-visually') ){
        campaign[i].classList.remove('campaign-visually');
    }else{
        campaign[i].classList.add('campaign-visually')
    }
}
})
