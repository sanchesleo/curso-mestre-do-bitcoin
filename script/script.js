const btnMobile = document.querySelector('.check-btn');

function handleRenderMenu() {
    const navMenu = document.querySelector('.lista-menu');
    navMenu.classList.toggle('active');
}

btnMobile.addEventListener('click',handleRenderMenu);