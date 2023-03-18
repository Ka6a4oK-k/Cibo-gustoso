const dishesList = ["Appetizers", 'Pasta', 'Pizza', 'Salads', 'Soups', 'Desserts']
const drinksList = ['Wine', 'Cocktails', 'Beer']

const swiperMenuDishes = new Swiper('.menu__dishes__swiper', {
    effect: "fade",
    allowTouchMove: false,
    slidesPerView: 1,
    pagination: {
        el: '.menu__dishes__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' .menu__dishes__swiper-pagination-bullet' +'">' + (dishesList[index]) + "</span>";
        }
    }
});

const swiperMenuDrinks = new Swiper('.menu__drinks__swiper', {
    effect: "fade",
    allowTouchMove: false,
    slidesPerView: 1,
    pagination: {
        el: '.menu__drinks__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (drinksList[index]) + "</span>";
        }
    }
});

const swiperMenuDishType = new Swiper('.menu__dishes__type__swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    // loop: true,
    navigation: {
        nextEl: '.menu__dishes__type__swiper-button-next',
        prevEl: '.menu__dishes__type__swiper-button-prev',
    },
    breakpoints: {
        1366: {
            spaceBetween: 40
        },
        480: {
            spaceBetween: 20,
            slidesPerView: 4,
        }
    }
});

const swiperMenuDrinkType = new Swiper('.menu__drinks__type__swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.menu__drinks__type__swiper-button-next',
        prevEl: '.menu__drinks__type__swiper-button-prev',
    }
});