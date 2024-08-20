import { initNav } from "./module/nav.js";
import { initPopup } from "./module/popup.js";
import { initModal } from "./module/modal.js";
import { initProductPopularSlider } from "./module/sliders.js";
import { initMainSwiper } from "./module/sliders.js";
import { initNewSwiper } from "./module/sliders.js";



window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    baguetteBox.run('.gallery-wrapper');
    initPopup();
    initModal(); 
    initProductPopularSlider();
    initMainSwiper();
    initNewSwiper();
    

});
