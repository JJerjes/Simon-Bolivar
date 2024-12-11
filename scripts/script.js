document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menuButton');
    const nav = document.querySelector('.navbar');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});
