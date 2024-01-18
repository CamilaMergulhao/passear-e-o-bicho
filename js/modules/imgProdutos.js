export default function imgProdutos() {
    const imgPrincipal = document.getElementById('imagemRoupa');
    const linkSelecaoImg = document.querySelectorAll('[data-img-link="link"]');

    function mudarImagem(event) {
        // Impede o comportamento padrão do link para evitar o redirecionamento
        event.preventDefault();

        // Obtém o valor do atributo 'data-img-maior' do link clicado
        const novaImagemMaiorSrc = event.currentTarget.dataset.imgMaior;

        // Atualiza o atributo 'src' da imagem principal
        imgPrincipal.src = novaImagemMaiorSrc;

        // Remove a classe 'selecionado' de todos os links
        linkSelecaoImg.forEach((item) => {
            item.classList.remove('selecionado');
        });

        // Adiciona a classe 'selecionado' ao link clicado
        event.currentTarget.classList.add('selecionado');
    }

    // Adiciona um ouvinte de evento de clique a cada link de imagem
    linkSelecaoImg.forEach((item) => {
        item.addEventListener('click', mudarImagem);
    });
};
