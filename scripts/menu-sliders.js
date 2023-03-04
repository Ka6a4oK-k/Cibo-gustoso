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