const swiperTeam = new Swiper('.team__swiper', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
        nextEl: '.team__swiper-button-next',
        prevEl: '.team__swiper-button-prev',
    }
});