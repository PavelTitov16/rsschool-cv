/* Adaptive Menu */
const burger = document.querySelector('.adaptive-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const shdwBox = document.querySelector('.shadow-box');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    shdwBox.classList.toggle('active');
});

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    shdwBox.classList.remove('active');
}));