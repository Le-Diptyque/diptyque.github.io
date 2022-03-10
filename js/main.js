const navButton = document.querySelector('.nav-btn');
const navButtonBurger = document.querySelector('.nav-btn__burger');
const navBar = document.querySelector('.header-nav');
let navOpen = false;

function toggleNav() {
    if (!navOpen) {
        navButton.classList.add('open');
        navButtonBurger.classList.add('open');
        navBar.classList.add('open');

        navOpen = true;
    } else {
        navButton.classList.remove('open');
        navButtonBurger.classList.remove('open');
        navBar.classList.remove('open');

        navOpen = false;
    }
}

navButton.addEventListener('click', toggleNav);