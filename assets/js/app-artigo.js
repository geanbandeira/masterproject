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