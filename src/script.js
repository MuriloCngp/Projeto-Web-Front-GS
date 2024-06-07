document.addEventListener('DOMContentLoaded', function () {
    // Exibir alerta de boas-vindas
    alert('Bem-vindo, vamos cuidar de nossos oceanos?');

    // Função para inicializar carrosséis
    function initCarousel(carouselSelector, buttonPrevSelector, buttonNextSelector) {
        const carousel = document.querySelector(carouselSelector);
        const carouselImages = carousel.querySelector('.carousel-images');
        const prevButton = carousel.querySelector(buttonPrevSelector);
        const nextButton = carousel.querySelector(buttonNextSelector);
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 600; // Ajuste conforme a largura da imagem
            carouselImages.style.transform = `translateX(${offset}px)`;
        }

        prevButton.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + carouselImages.children.length) % carouselImages.children.length;
            updateCarousel();
        });

        nextButton.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % carouselImages.children.length;
            updateCarousel();
        });
    }

    // Inicialize os carrosséis
    initCarousel('.carousel', '.carousel-button.prev', '.carousel-button.next');
    initCarousel('.carousel-2', '.carousel-button-2.prev', '.carousel-button-2.next');

    // Validação do Formulário de Contato
    const contatoForm = document.getElementById('contato-form');
    contatoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Mensagem enviada com sucesso!');
            contatoForm.reset();
        }
    });
});