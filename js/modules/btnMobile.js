import outsideClick from './outsideClick.js';


export default function btnMobile() {
    const btnMobile = document.querySelector('[data-menu="btn-mobile"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];
  
    
    if(btnMobile){
    
    function ativarHamburguer(event) {
      event.preventDefault();
      menuList.classList.add('ativarMenu');
      btnMobile.classList.add('ativarMenu');
      
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('ativarMenu');
        btnMobile.classList.remove('ativarMenu');
        })
    }

    eventos.forEach((evento) => {
      btnMobile.addEventListener(evento, ativarHamburguer);
  });
  
}
}