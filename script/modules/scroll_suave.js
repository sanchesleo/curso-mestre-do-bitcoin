export default class ScrollSuave {
    constructor(links, options) {
      this.linksInternos = document.querySelectorAll(links);
      if (options === undefined) {
        this.options = { behavior: 'smooth', block: 'start' };
      } else {
        this.options = options;
      }
      
      this.scrollToSection = this.scrollToSection.bind(this);
    }
  
    scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      const navMenu = document.querySelector('.lista-menu');
      navMenu.classList.remove('active');

      const iconMobile = document.querySelector('.fas');
      iconMobile.classList.remove('fa-times');
      iconMobile.classList.add('fa-bars');

      section.scrollIntoView(this.options);
    }
  
    addLinkEvent() {
      this.linksInternos.forEach((link) => {
        link.addEventListener('click', this.scrollToSection);
      });
    }
  
    init() {
      if (this.linksInternos.length) {
        this.addLinkEvent();
      }
      return this;
    }
  }
  