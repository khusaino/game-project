import Swiper from '../vendor/swiper.min';
import vars from '../_vars';

const socialSwiper = new Swiper(vars.$socialSwiper, {
        loop : true,
      effect: 'coverflow',
      centeredSlides: false,
      slidesPerView: 1,
    initialSlide:0,
    pagination: {
        el: '.social__swiper-pagination',
      },
        navigation: {
            nextEl: '.social__swiper-next',
            prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 264,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        1440: {
            coverflowEffect: {
                rotate: 0,
                stretch: 490,
                depth: 250,
                modifier: 1,
                slideShadows: false,
                },
        },
        1024: {
                coverflowEffect: {
                rotate: 0,
                stretch: 490,
                depth: 250,
                modifier: 1,
                slideShadows: false,
              },
        },
        768:{
            coverflowEffect: {
                rotate: 0,
                stretch: 500,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            }, 
        },
        576:{
            coverflowEffect: {
                rotate: 0,
                stretch: 264,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            }, 
        }
        
        
      },
   
    
});