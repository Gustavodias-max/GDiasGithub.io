const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const scrollAnima = document.querySelector('[data-anima="scroll"]');
const halfwindow = window.innerHeight * (-0.2);
const linkIntern = document.querySelector('[data-scroll="suave"] a[href^="#"]');



button.addEventListener('click', () => {
    mobileNavbar.classList.toggle('active');
});


function animarScroll() {
    const topItens = scrollAnima.getBoundingClientRect().top;
    const visibleItens = topItens - halfwindow < 0;
    if (visibleItens) {
        scrollAnima.classList.add('show-button');
    } else {
        scrollAnima.classList.remove('show-button');
    }
};

window.addEventListener('scroll', animarScroll);

linkIntern.addEventListener('click', (event) => {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const ancor = document.querySelector(href);
    ancor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});

