//---------- LINK MENU ATIVO REFERENTE AO TAB LOCAIS ---------//

export default function ativoTabLocais(){
    const links = document.querySelectorAll('.menu-locais-link');
    
    links.forEach((link, index) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        links.forEach(otherLink => {
          otherLink.classList.remove('ativo');
        });
        link.classList.add('ativo');
      });
    
      if (index === 0) {
        link.classList.add('ativo'); // Adicione a classe ativo ao primeiro link
      }
    });
    
  }
