document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-menu-btn');
    const nav = document.querySelector('.nav');
    const icons = document.querySelector('.icons');

    burgerBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        icons.classList.toggle('active');
    });
});