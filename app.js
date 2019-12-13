const hamburgerMenu = document.querySelector('.hamburger-menu');
const navWrapper = document.querySelector('.nav-wrapper');

hamburgerMenu.addEventListener('click', () => {
    navWrapper.classList.toggle('change');
})