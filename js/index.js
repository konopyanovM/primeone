const $header__burger = document.querySelector('.header__burger')
const $headerBottom = document.querySelector('.header-bottom')

$header__burger.addEventListener('click', () => {
   $headerBottom.classList.toggle('active')
   $header__burger.classList.toggle('active')
   document.querySelector('body').classList.toggle('lock')
})