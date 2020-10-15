$(function(){

    $('.about__item-title').on('click', function(){

        $('.about__item').removeClass('about__item_active');
        $(this).parent().addClass('about__item_active');

    });

    $('ul.works__tabs').on('click', 'li:not(.works__tab_active)', function () {
        $(this)
            .addClass('works__tab_active').siblings().removeClass('works__tab_active')
            .closest('div.container').find('div.works__tabs').removeClass('works__tabs_active').eq($(this).index()).addClass('works__tab_active');
    });


    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slider-btn slider-btn_prev"><img src="images/icons/slider-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slider-btn slider-btn_next"><img src="images/icons/slider-arrow.svg"></button>',
        slidesToShow: 2,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 1,
                }
            }
        ]
    });

    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn-active');
        $('.menu__list').toggleClass('menu__list-active');
    });

    new WOW().init();

});

