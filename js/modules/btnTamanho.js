export default function btnTamanho() {
    const btnNumeros = document.querySelectorAll('[data-type="size"] li');
  
    function btnAtivo(event) {
      event.preventDefault();
  
    // Remova a classe 'btnAtivado' de todos os elementos
    btnNumeros.forEach((item) => {
    item.classList.remove('btnAtivado');
    });
        
  
    // Adicione a classe 'btnAtivado' ao elemento clicado
    event.currentTarget.classList.add('btnAtivado');
    
    }

    
  
    btnNumeros.forEach((item) => {
      item.addEventListener('click', btnAtivo);
    });
  }
  