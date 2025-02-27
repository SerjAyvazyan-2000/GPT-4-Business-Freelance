

let swiper = new Swiper(".grabCursor-swiper", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
        cardShadow: false, // Отключаем тень на карточках
        slideShadows: false, // Отключаем тень слайдов
    },
    slidesPerView: 'auto', // Чтобы слайды располагались рядом
    centeredSlides: true, // Центрируем слайды
    spaceBetween: 20, // Пространство между слайдам
    overflow: 'hidden', // Чтобы за пределами слайдера ничего не показывалось

});

document.querySelectorAll(".reviews-arrow-right").forEach((arrow) => {
    arrow.addEventListener("click", () => {
        let parentSwiper = arrow.closest(".grabCursor-swiper").swiper;
        parentSwiper.slideNext();
    });
});

document.querySelectorAll(".reviews-arrow-left").forEach((arrow) => {
    arrow.addEventListener("click", () => {
        let parentSwiper = arrow.closest(".grabCursor-swiper").swiper;
        parentSwiper.slidePrev();
    });
});


function initSwiper() {
    let reviewsSwiper;

    const isMobile = window.innerWidth <= 992;
    const direction = isMobile ? "horizontal" : "vertical";
    const delay = isMobile ? 4000 : 2000;

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
    }

    reviewsSwiper = new Swiper(".reviews-swiper", {
        direction: direction,
        spaceBetween: 15,
        slidesPerView: 3,
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: delay,
            disableOnInteraction: false,
        },
        speed: 2000,

        breakpoints: {
            320: {slidesPerView: 1,},
            490: {slidesPerView: 1.2,},
            620: {slidesPerView: 1.5,},
            810: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1096: {slidesPerView: 2.5},
            1232: {slidesPerView: 3},
            1920: {slidesPerView: 3},
        },

    });
    const swiperContainer = document.querySelector(".reviews-swiper");

    if(swiperContainer){

        swiperContainer.addEventListener("mouseenter", () => {
            reviewsSwiper.autoplay.stop();
        });

        swiperContainer.addEventListener("mouseleave", () => {
            reviewsSwiper.autoplay.start();
        });
    }

}

initSwiper();

