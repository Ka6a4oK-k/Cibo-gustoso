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
            return '<span class="' + className + '">' + (dishesList[index]) + "</span>";
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
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
        nextEl: '.menu__dishes__type__swiper-button-next',
        prevEl: '.menu__dishes__type__swiper-button-prev',
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