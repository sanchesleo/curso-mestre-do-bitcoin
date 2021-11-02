import ScrollSuave from "./modules/scroll_suave.js";

const btnMobile = document.querySelector('.check-btn');
let openMenu = false;

const iconMobile = document.querySelector('.fas');

function handleRenderMenu() {
    openMenu = !openMenu;
    console.log(openMenu);
    const navMenu = document.querySelector('.lista-menu');
    navMenu.classList.toggle('active');

    console.log(iconMobile);

    if (openMenu) {
        iconMobile.classList.remove('fa-bars');
        iconMobile.classList.add('fa-times');
    }else{
        iconMobile.classList.add('fa-bars');
        iconMobile.classList.remove('fa-times');
    }
}

btnMobile.addEventListener('click',handleRenderMenu);

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();