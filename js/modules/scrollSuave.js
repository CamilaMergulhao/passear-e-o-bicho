export default function scrollSuave(){

const linkProdutos = document.getElementById('link-produtos');



function scrollLink(event){

event.preventDefault();

const element = event.target;
const id = element.getAttribute('href');
const to = document.querySelector(id).offsetBottom;

window.scroll({
   top: to - 30,
    behavior: "smooth",
    
});


};

linkProdutos.addEventListener('click', scrollLink);



};