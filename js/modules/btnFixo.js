import outsideClick from './outsideClick.js';

export default function btnFixo() {
  const btnMobileFixo = document.querySelector('[data-menu="btn-mobile-fixo"]');
  const headerFixo = document.querySelector('[data-header-fixo="header-fixo-bg-js"]');
  const menuListFixo = document.querySelector('[data-menu="list-fixo"]');
  const mainSection = document.querySelector('main'); // Selecione o elemento <main>
  const eventos = ['click', 'touchstart'];

  if (btnMobileFixo && menuListFixo && mainSection) {
    function ativarHamburguerFixo(event) {
      event.preventDefault();
      menuListFixo.classList.add('ativarMenu');
      btnMobileFixo.classList.add('ativarMenu');

      outsideClick(menuListFixo, eventos, () => {
        menuListFixo.classList.remove('ativarMenu');
        btnMobileFixo.classList.remove('ativarMenu');
      });
    }

    eventos.forEach((evento) => {
      btnMobileFixo.removeEventListener(evento, ativarHamburguerFixo);
      btnMobileFixo.addEventListener(evento, ativarHamburguerFixo);
    });

    // Adicione um event listener de rolagem para verificar a posição do scroll em relação ao <main>
    window.addEventListener('scroll', () => {
      const mainSectionTop = mainSection.getBoundingClientRect().top;

      // Adiciona ou remove a classe 'btnFixoativo' com base na posição do scroll
      headerFixo.classList.toggle('btnFixoativo', mainSectionTop <= 0);
    });
  }
}



