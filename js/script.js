$(document).ready(function () {

    $('.header-burger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.menu').fadeIn();
            $('.menu').css('visibility', 'visible');
            $('.wrapper .header').css('background', 'transparent')
        } else {
            $('.menu').fadeOut();
            $('.menu').css('visibility', 'hidden');
            $('.wrapper .header').css('background', '#090C12')
        }
    });

    var targetSlider = $('.target__slider');
    targetSlider.owlCarousel({
        items: 6,
        autoWidth: true,
        dots: false,
    });
    $('.target-right').click(function() {
        targetSlider.trigger('next.owl.carousel');
    });
    $('.target-left').click(function() {
        targetSlider.trigger('prev.owl.carousel');
    });

    if (document.documentElement.clientWidth < 1506) {
        $('.reservation-row').owlCarousel({
            items: 1,
            margin: 17,
            autoWidth: true,
            dots: false,
        });
    }
    if (document.documentElement.clientWidth < 1025) {
        $('.steps__inner').owlCarousel({
            items: 1,
            margin: 20,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                614: {
                    items: 2
                }
            }
        });
        $('.lesson__inner').owlCarousel({
            items: 1,
            margin: 20,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    autoHeight: true
                },
                614: {
                    items: 2,
                    autoHeight: false
                }
            }
        });
        $('.security__inner').owlCarousel({
            items: 2,
            margin: 20,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    autoHeight: true
                },
                614: {
                    items: 2,
                    autoHeight: false
                }
            }
        });
        // $('.subscription__right').owlCarousel({
        //     items: 1,
        //     margin: 20,
        //     dots: true,
        //     autoHeight: true
        // });
    }

    if (document.documentElement.clientWidth < 515) {
        $('.rate__inner').owlCarousel({
            items: 1,
            margin: 20,
            dots: true,
            autoHeight: true
        });
    }


    $('.modalSigninChagne').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.login').fadeOut();
        $('.signin').fadeIn();
        $('.signin').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });
    $('.modalLoginChagne').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.signin').fadeOut();
        $('.login').fadeIn();
        $('.login').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });
    $('.modalLogin').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.login').fadeIn();
        $('.login').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });
    $('.modalSignin').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.signin').fadeIn();
        $('.signin').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });
    $('.modalSubscribe').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.subscribe').fadeIn();
        $('.subscribe').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });

    $('.modal__close').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeOut();
        $('.modal').hide();
    });

    $(document).mouseup(function (e) {
        var div = $(".modal, .menu, .header-burger, .modalSubscribe, .modalSignin, .modalLogin");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.modal').fadeOut();
            $('.overlay').fadeOut();

            $('.header-burger').removeClass('active');
            $('.menu').fadeOut();
            $('.menu').css('visibility', 'hidden');
            $('.wrapper .header').css('background', '#090C12');
        }
    });


    $('.showSelects').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $('.reservation__selects').addClass('active');
        } else {
            $('.reservation__selects').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var div = $(".showSelects, .reservation__selects");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.reservation__selects').removeClass('active');
            $('.showSelects').removeClass('active');
        }
    });

    $('.place__item').on('click', function(e) {
        e.preventDefault();
        $('.place__item').removeClass('choosen');
        $(this).toggleClass('choosen');
    });

});