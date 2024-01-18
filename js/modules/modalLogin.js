export default function modalLogin(){




const abrirLogin = document.querySelector('[data-modal="abrir-login"]');
const fecharModal = document.querySelector('[data-modal="fechar-modal"]');
const modalContainer = document.querySelector('[data-modal="cotainer"]');


if(abrirLogin && fecharModal && modalContainer){

function abrirModallogin(event) {
  event.preventDefault();

  modalContainer.classList.add('activo');

};


function fecharModallogin(event) {
    event.preventDefault();
    modalContainer.classList.remove('activo');
};


function clickForadoModallogin (event){
    
    if(event.target === this){
        fecharModallogin(event)
        
    }

};

 
abrirLogin.addEventListener('click', abrirModallogin);
fecharModal.addEventListener('click', fecharModallogin);
modalContainer.addEventListener('click', clickForadoModallogin );
}

}

