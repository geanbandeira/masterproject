var ctx = document.getElementById('kpiChart').getContext('2d');
var kpiChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Eficiência do Processo',
            data: [85, 90, 88, 92, 95, 97],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

//menumobile
const hamburger = document.querySelector('.menu-hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });

var ctx = document.getElementById('kpiChart').getContext('2d');
var kpiChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Eficiência do Processo',
            data: [85, 90, 88, 92, 95, 97],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

    
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
        console.log("Bloco visível:", entry.target); // Depuração
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para parar de observar após a animação
      }
    });
  }, observerOptions);
  
  blocks.forEach(block => {
    observer.observe(block);
  });
});

function toggleAnswer(index) {
  const question = document.getElementsByClassName('faq-question')[index];
  const answer = document.getElementsByClassName('faq-answer')[index];
  
  if (question.classList.contains('active')) {
      question.classList.remove('active');
      answer.style.display = 'none';
  } else {
      // Fechar todas as outras respostas
      const allQuestions = document.getElementsByClassName('faq-question');
      const allAnswers = document.getElementsByClassName('faq-answer');
      
      for (let i = 0; i < allQuestions.length; i++) {
          allQuestions[i].classList.remove('active');
          allAnswers[i].style.display = 'none';
      }
      
      // Exibir a resposta clicada
      question.classList.add('active');
      answer.style.display = 'block';
  }
}

