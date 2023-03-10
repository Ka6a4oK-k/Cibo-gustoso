const header = document.querySelector('.header')
const hero = document.querySelector('.hero')

const checkPosition = () => {
    if(hero.scrollHeight <= window.scrollY) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}
checkPosition()

document.addEventListener('scroll', (e) => {
    checkPosition()
})
