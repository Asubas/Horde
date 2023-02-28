
const campaign = document.querySelectorAll('.campaign');


pm_visually[5].addEventListener('click', function(){
    for (let i = 0; i < campaign.length; i++){
    if (campaign[i].classList.contains('campaign-visually') ){
        campaign[i].classList.remove('campaign-visually');
        console.log('rabotaet')
    }else{
        campaign[i].classList.add('campaign-visually')
    }
}
})
