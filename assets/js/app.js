//foquete, habilidade, comunidade
  document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll('.block');
    
    const observerOptions = {
      root: null, // Observa em relação à viewport
      rootMargin: '0px',
      threshold: 0.1 // Quando 10% do elemento está visível
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Para parar de observar após a animação
        }
      });
    }, observerOptions);
    
    blocks.forEach(block => {
      observer.observe(block);
    });
  });

  //faq
  function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];

    // Toggle the display of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  }

//galeria de aulas presenciais
const images = document.querySelectorAll('#gallery img');
let currentIndexLeft = 0;
let currentIndexCenter = 1;
let currentIndexRight = 2;
const totalImages = images.length;

// Inicializa com as três primeiras imagens visíveis
images[currentIndexLeft].classList.add('active-left');
images[currentIndexCenter].classList.add('active-center');
images[currentIndexRight].classList.add('active-right');

// Função para trocar as imagens em três posições
function changeImage() {
    // Remove as classes ativas das imagens atuais
    images[currentIndexLeft].classList.remove('active-left');
    images[currentIndexCenter].classList.remove('active-center');
    images[currentIndexRight].classList.remove('active-right');

    // Atualiza os índices para as próximas imagens
    currentIndexLeft = (currentIndexLeft + 3) % totalImages;
    currentIndexCenter = (currentIndexCenter + 3) % totalImages;
    currentIndexRight = (currentIndexRight + 3) % totalImages;

    // Adiciona as classes ativas para as próximas imagens
    images[currentIndexLeft].classList.add('active-left');
    images[currentIndexCenter].classList.add('active-center');
    images[currentIndexRight].classList.add('active-right');
}

// Alterna as imagens a cada 4 segundos
setInterval(changeImage, 4000);
