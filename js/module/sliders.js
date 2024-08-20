export const initProductPopularSlider = () => {
    const item = document.querySelector('.product_popular-item');
        let swiper;
        if (item) {
            
            swiper = new Swiper(item, {
                autoplay: {
                    delay: 3000
                },
                speed: 3000,
                direction: 'horizontal',
                spaceBetween: 30,
                equalHeight: true,

                // If we need pagination
                navigation: {
                    nextEl: ".product-popular-next",
                    prevEl: ".product-popular-prev",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    695: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1200: {
                        slidesPerView: 4,
                    }
                    }
            });
        }
}

export const initMainSwiper = () => {
    const item = document.querySelector('.main-item');
        let swiper;
        if (item) {
            
            swiper = new Swiper(item, {
               
                speed: 3000,
                direction: 'horizontal',
                spaceBetween: 30,
                slidesPerView: 1,
                equalHeight: true,

                // If we need pagination
                navigation: {
                    nextEl: ".main-item-next",
                    prevEl: ".main-item-prev",
                },
                
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                      },
    
            });
        }
}