const swiperAbout = new Swiper('.about__swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.about__swiper-button-next',
        prevEl: '.about__swiper-button-prev',
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1023: {
            spaceBetween: 20
        }
    }
});