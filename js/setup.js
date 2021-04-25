const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 600,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        //quando o tamanho da janela estiver >= 640px

        820: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          freeMode: false,
        }
    }
  });