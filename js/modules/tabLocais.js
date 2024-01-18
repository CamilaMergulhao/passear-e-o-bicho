 //------------------ TAB- LOCAIS -----------------------------------------

export default function tabLocais(){

  const tabMenu = document.querySelectorAll('.menu-locais li');
  const menuItens = document.querySelectorAll('.tab-bairros');
  const icones = document.querySelectorAll('[data-icon="iconTab"]');
  
  console.log(icones);
 
  if (tabMenu.length && menuItens.length) {
  
  menuItens[0].classList.add('ativo');
  icones[0].classList.add('ativo');
  
  function trocaTabmenu(index) {
    menuItens.forEach((item) => {
      item.classList.remove('ativo');

      icones.forEach((icons)=>{

        icons.classList.remove('ativo');
    
        });
      
    });
  
    menuItens[index].classList.add('ativo');
    icones[index].classList.add('ativo');

    }
  
  tabMenu.forEach((listas, index) => {
    listas.addEventListener('click', () => {
      trocaTabmenu(index);
    });
  });
  



  }
  
  }
  
  
  