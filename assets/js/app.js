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


// Suavizar o scroll ao clicar nos links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Formulário de contato redirecionando para WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.querySelector('input[name="nome"]').value;
  const mensagem = document.querySelector('textarea[name="mensagem"]').value;
  const url = `https://wa.me/5511984231682?text=Nome:%20${encodeURIComponent(nome)}%0AMensagem:%20${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
});

 // Detecta o scroll e aplica a animação
 const cards = document.querySelectorAll('.proposta-card');

 function aparecerCartoes() {
   cards.forEach(card => {
     const cardTop = card.getBoundingClientRect().top;
     const windowHeight = window.innerHeight;
     if (cardTop < windowHeight - 100) {
       card.classList.add('aparecer');
     }
   });
 }
window.addEventListener('scroll', aparecerCartoes);


document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const menu = document.getElementById("menu");

  function loadContent(url) {
      fetch(url)
          .then(response => response.text())
          .then(html => {
              content.innerHTML = html;
              window.history.pushState({ path: url }, '', url);
          })
          .catch(err => console.error('Error loading content:', err));
  }

  function loadMenu() {
      fetch('menu.html')
          .then(response => response.text())
          .then(html => {
              menu.innerHTML = html;
              // Re-add click event listeners after menu is loaded
              const links = document.querySelectorAll('a[data-link]');
              links.forEach(link => link.addEventListener('click', handleNavigation));
          })
          .catch(err => console.error('Error loading menu:', err));
  }

  function handleNavigation(event) {
      event.preventDefault();
      const url = event.target.getAttribute('href');
      loadContent(url);
  }

  // Load menu initially
  loadMenu();

  // Load the initial page content
  const initialPage = window.location.pathname !== '/' ? window.location.pathname : 'index.html';
  loadContent(initialPage);

  window.addEventListener('popstate', (event) => {
      const url = event.state ? event.state.path : 'index.html';
      fetch(url)
          .then(response => response.text())
          .then(html => {
              content.innerHTML = html;
          })
          .catch(err => console.error('Error loading content:', err));
  });
});
