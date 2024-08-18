export const initSlider = () => {
    const item = document.querySelector('.main-item');
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                autoplay: {
                    delay: 3000
                },
                speed: 3000,
                effect: "fade",
                direction: 'horizontal',  
                spaceBetween: 15,
                slidesPerView: 1,
                equalHeight: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                  },
              });
        }
}