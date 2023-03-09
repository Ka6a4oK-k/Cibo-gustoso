const header = document.querySelector('.header')
const hero = document.querySelector('.hero')

document.addEventListener('scroll', (e) => {
    console.log(hero.scrollHeight);
    console.log(window.scrollY);

    if(hero.scrollHeight <= window.scrollY) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})
