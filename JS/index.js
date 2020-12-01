//navbar dropdown
const burger = document.getElementsByClassName('burger')[0];
const navbar = document.getElementsByClassName('navbar-elements')[0];

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
})