const menuButton = document.querySelector('.header__burger-button ');
const menuButtonContainer = document.querySelector('.header__menu-button-container');
const menuContainer = document.querySelector('.header__nav');
const logo = document.querySelector('.page__logo')

const onMenuClick = (evt) => {
  if (menuButton.className === ('header__burger-button')) {
    menuButton.className = ('header__burger-button--close');
    menuButtonContainer.classList.toggle('header__burger');
    menuContainer.classList.toggle('header__nav--closed');
    logo.classList.toggle('page__logo-menu--opened')
    return;
  }
  menuButton.className = ('header__burger-button');
  menuButtonContainer.classList.toggle('header__burger');
  menuContainer.classList.toggle('header__nav--closed');
  logo.classList.toggle('page__logo-menu--opened')
}

menuButton.addEventListener('click', onMenuClick)

const smoothLinks = document.querySelectorAll('.page__menu-link');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const targetClassName = smoothLink.getAttribute('href').replace('#', '.');
    if (targetClassName !== '.') {
      document.querySelector(targetClassName).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

if (window.screen.width < 1160) {
  const tourImages = document.querySelectorAll('.tour-card__container');
  for (const tourImage of tourImages) {
    tourImage.addEventListener('click', () => {
      tourImage.querySelector('.tour-card__h3').classList.add('tour-card__h3-click');
      tourImage.classList.add('tour-card__container--click');
    })
  }
}
