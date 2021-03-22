$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const swiper = new Swiper('.swiper-container', {

    // Optional parameters
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    freeMode: true, 
    loopAdditionalSlides: 5,
    speed: 500,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        /* resolução de 640px */
        640: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            freeMode: false
        }
    }
  });