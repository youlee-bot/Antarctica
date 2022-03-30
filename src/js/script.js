const menuButton = document.querySelector('.header__burger-button ');
const menuButtonContainer = document.querySelector('.header__menu-button-container');
const menuContainer = document.querySelector('.header__nav');
const logo = document.querySelector('.page__logo')
const contactForm = document.querySelector('.reservation__contact-form');
const page = document.querySelector('.page');

const onMenuClick = (evt) => {
  if (menuButton.className === ('header__burger-button')) {
    menuButton.className = ('header__burger-button--close');
    menuButtonContainer.classList.toggle('header__burger');
    menuContainer.classList.toggle('header__nav--closed');
    logo.classList.toggle('page__logo-menu--opened');
    page.classList.toggle('page__overflow');
    return;
  }
  menuButton.className = ('header__burger-button');
  menuButtonContainer.classList.toggle('header__burger');
  menuContainer.classList.toggle('header__nav--closed');
  logo.classList.toggle('page__logo-menu--opened');
  page.classList.toggle('page__overflow');
}

menuButtonContainer.addEventListener('click', onMenuClick)

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



const onModalSubmit = (evt) => {
  evt.preventDefault();
  const regexpTel = /^\d$/;
  const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexpName = /^S([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig;

  name.classList.remove('contact-form__invalid-input');
  email.classList.remove('contact-form__invalid-input');
  phone.classList.remove('contact-form__invalid-input');

  const name = document.querySelector('.contact-form__input[name=name]');
  const email = document.querySelector('.contact-form__input[name=email]');
  const phone = document.querySelector('.contact-form__input[name=phone]');
  if (regexpName.test(name.value)) {
    name.classList.add('contact-form__invalid-input');
    }
  if (!regexpEmail.test(email.value)) {
    email.classList.add('contact-form__invalid-input');
  }
  if (!regexpTel.test(phone.value)) {
    phone.classList.add('contact-form__invalid-input');
  }
}

contactForm.addEventListener('submit', onModalSubmit);
