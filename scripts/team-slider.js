const swiperTeam = new Swiper('.team__swiper', {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
        nextEl: '.team__swiper-button-next',
        prevEl: '.team__swiper-button-prev',
    },
    breakpoints: {
        1024: {
            spaceBetween: 40,
            slidesPerView: 4
        },
        768: {
            slidesPerView: 3
        }
    }
});