const burger = document.getElementById('burger')
const mobileMenu = document.getElementById('header__mobile__menu')
const mobileMenuLinks = document.getElementsByClassName('header__mobile__menu__nav__links__item') 
const body = document.getElementById('body')
const mobileMenuLinksArr = [...mobileMenuLinks]

burger.addEventListener('click', () => {
    if (burger.classList.contains('header__burger-active')){
        burger.classList.remove('header__burger-active')
        mobileMenu.classList.remove('header__mobile__menu-active')
        body.classList.remove('lock-scroll')
    } else {
        body.classList.add('lock-scroll')
        burger.classList.add('header__burger-active')
        mobileMenu.classList.add('header__mobile__menu-active')
    }
})

mobileMenuLinksArr.forEach((element) => {
    element.addEventListener('click', () => {
        body.classList.remove('lock-scroll')
        burger.classList.remove('header__burger-active')
        mobileMenu.classList.remove('header__mobile__menu-active')
    })
})

window.addEventListener('resize', () => {
    body.classList.remove('lock-scroll')
    burger.classList.remove('header__burger-active')
    mobileMenu.classList.remove('header__mobile__menu-active')
})