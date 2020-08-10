const hamburgerNavigation = document.querySelector('.section-header-menu');
const hamburgerMenuBackground = document.querySelector('.section-header-menu-background');
const hamburgerBackground = document.querySelector('.section-header-background');
const hamburgerButton = document.querySelector('.section-header-hamburger');


hamburgerButton.addEventListener ('click', () => {
    hamburgerNavigation.classList.toggle('section-header-menu--active');
    if (hamburgerNavigation.classList.contains('section-header-menu--active') == true) {
        hamburgerBackground.style.width = '100%';
    } else {
        hamburgerBackground.style.width = '0';
    }
})