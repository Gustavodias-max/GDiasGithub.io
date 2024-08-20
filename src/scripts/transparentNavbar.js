window.addEventListener("scroll", () => {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolling', window.scrollY > 0);
})