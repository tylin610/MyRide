$(function () {

    $('.modalSigninChagne').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.login').fadeOut();
        $('.signin').fadeIn();
        $('.signin').css('display', 'flex');
        $('.overlay').css('display', 'flex');


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
        $('.overlay').css('display', 'flex');

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
        $('.overlay').css('display', 'flex');

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
        $('.overlay').css('display', 'flex');

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
        $('.overlay').css('display', 'flex');

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

    if (document.documentElement.clientWidth > 1024) {
        $('.index__item').on('click', function (e) {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }
    if (document.documentElement.clientWidth <= 1024) {
        $('.spa__item-title').detach();
        $(this).removeClass('active');
        $('.effect__inner').owlCarousel({
            items: 2,
            dots: true,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                515: {
                    items: 2,
                    dots: true,
                    margin: 15,
                }
            }
        });
        $('.bike__text').owlCarousel({
            items: 2,
            dots: true,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                515: {
                    items: 2,
                    dots: true,
                    margin: 15,
                }
            }
        });
        $('.index__slider').owlCarousel({
            items: 1,
            dots: false,
            center: true,
        });
        $('.bonus__inner').owlCarousel({
            items: 1,
            dots: false,
            center: true,
        });
    }

    var trenerSlider = $('.trener__slider');
    trenerSlider.owlCarousel({
        items: 5,
        autoWidth: true,
        dots: false,
        margin: 32,
        loop: true,
    });
    $('.trener-right').click(function () {
        trenerSlider.trigger('next.owl.carousel');
    });
    $('.trener-left').click(function () {
        trenerSlider.trigger('prev.owl.carousel');
    });

    var spaSlider = $('.spa__slider');
    spaSlider.owlCarousel({
        items: 3,
        autoWidth: true,
        dots: false,
        margin: 85,
    });
    $('.spa-right').click(function () {
        spaSlider.trigger('next.owl.carousel');
    });
    $('.spa-left').click(function () {
        spaSlider.trigger('prev.owl.carousel');
    });

    var targetSlider = $('.target__slider');
    targetSlider.owlCarousel({
        items: 6,
        autoWidth: true,
        dots: false,
    });
    $('.target-right').click(function () {
        targetSlider.trigger('next.owl.carousel');
    });
    $('.target-left').click(function () {
        targetSlider.trigger('prev.owl.carousel');
    });

    $('.header-burger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.menu').fadeIn();
            $('.menu').css('visibility', 'visible');
        } else {
            $('.menu').fadeOut();
            $('.menu').css('visibility', 'hidden');
        }
    });
    $('.main__video video').height($(window).height());
    if (document.documentElement.clientWidth < 1024) {
        $('.main__video video').height($(window).height());
        $(document).on('resize', function (event) {
            $('.main__video video').height($(window).height());
        });
    }
});

$('.main__video video').get(0).load();