import vars from '../_vars';

if(vars.$burger){
vars.$body.addEventListener('click', function(e){
    if(e.target.classList.contains('burger')){
        vars.$nav.classList.toggle('nav__list-active');
    }
    else{
        if(!e.target.offsetParent.classList.contains('nav__list')&&!e.target.classList.contains('nav__list')){
            console.log(e);
        vars.$nav.classList.remove('nav__list-active');
        }
    }
})
}