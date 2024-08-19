export const initModal = () => {
    const modalBtn = document.querySelector('.modal_btn');
    const modalLk = document.querySelector('.modal_content');
    const arrowLk = document.querySelector('#arrow_lk')

    modalBtn.addEventListener('click', () => {
        modalLk.classList.toggle('is-open');
        arrowLk.classList.toggle('is-open');
    });
    
    document.querySelector('body').addEventListener('click', () => { 
        // console.log('Клик')
    });
}