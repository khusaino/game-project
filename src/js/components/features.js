import vars from '../_vars';

vars.$featuresAccard.forEach(el => {
    el.addEventListener('click', function(){
        vars.$featuresAccard.forEach(el =>{
            el.classList.remove('accard__item-active');
        })
        console.dir(el);
        this.classList.add('accard__item-active');
    });
})