export default function clickFaq (){


    const faqPerguntas = document.querySelectorAll ('.js-accordion .faq-lista-box-title');
    
    if(faqPerguntas.length){
    
    function listClick(){
    
    this.classList.toggle('ativo');
  
    // Encontre a resposta associada à pergunta clicada
     const faqRespostas = this.nextElementSibling;
  
     // Se encontrar a resposta associada, aplique a classe 'ativo'
     if (faqRespostas) {
         faqRespostas.classList.toggle('ativo');
     }
  }
    
    
    faqPerguntas.forEach((item) => {
    
        item.addEventListener('click', listClick);
    });
    }
    
    
}