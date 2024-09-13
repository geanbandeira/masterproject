// animacoes.js
document.addEventListener('DOMContentLoaded', () => {
    const animatedItems = document.querySelectorAll('[data-anim]');

    function showElementsOnScroll() {
        animatedItems.forEach(item => {
            const itemOffset = item.getBoundingClientRect().top + window.scrollY;
            if (window.scrollY + window.innerHeight > itemOffset) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', showElementsOnScroll);
    showElementsOnScroll();
});
