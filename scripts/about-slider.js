const swiperAbout = new Swiper('.about__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: '.about__swiper-button-next',
        prevEl: '.about__swiper-button-prev',
    }
});