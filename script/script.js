import ScrollSuave from "./modules/scroll_suave.js";

const btnMobile = document.querySelector('.check-btn');
const iconMobile = document.querySelector('.fas');

function handleRenderMenu() {

    const navMenu = document.querySelector('.lista-menu');
    navMenu.classList.toggle('active');

    console.log(iconMobile);

    console.log(iconMobile.classList.contains('fa-bars'))
    if (iconMobile.classList.contains('fa-bars')) {
        iconMobile.classList.remove('fa-bars');
        iconMobile.classList.add('fa-times');
    }else if (iconMobile.classList.contains('fa-times')) { 
       iconMobile.classList.add('fa-bars');
       iconMobile.classList.remove('fa-times');
    }
   
}

btnMobile.addEventListener('click',handleRenderMenu);

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();