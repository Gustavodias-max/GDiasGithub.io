let darkTheme = document.querySelector("#dark_body");

function toogleDarkMode() {
    darkTheme.classList.toggle('dark');
}

function loadTheme() {
    const darkMode = localStorage.getItem('dark');

    if (darkMode) {
        toogleDarkMode();
    }
}

loadTheme();

darkTheme.addEventListener('change', () => {
    toogleDarkMode();
   
    localStorage.removeItem('dark');

    if (darkTheme.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
});




