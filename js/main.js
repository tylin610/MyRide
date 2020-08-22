$(function() {

    $('.modalSigninChagne').on('click', function(e) {
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
    $('.modalLoginChagne').on('click', function(e) {
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
    $('.modalLogin').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.login').fadeIn();
        $('.login').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });
    $('.modalSignin').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.signin').fadeIn();
        $('.signin').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });
    $('.modalSubscribe').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.subscribe').fadeIn();
        $('.subscribe').css('display', 'flex');

        $('.header-burger').removeClass('active');
        $('.menu').fadeOut();
        $('.menu').css('visibility', 'hidden');
        $('.wrapper .header').css('background', '#090C12');
    });

    $('.modal__close').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeOut();
        $('.modal').hide();
    });

    $(document).mouseup(function (e){
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
        $('.index__item').on('click', function(e) {
            $(this).addClass('active').siblings().removeClass('active'); 
        });
    }
    if (document.documentElement.clientWidth < 1024) {
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

    var benefitSlider = $('.benefit__slider');
    benefitSlider.owlCarousel({
        items: 1,
        dots: false,
    });
    benefitSlider.on('changed.owl.carousel', function(event) {
        var item = event.item.index;
        $('#benefitCount').text((item + 1));
        if (item == 0) {
            $('.benefit-left').fadeOut();
        } else {
            $('.benefit-left').fadeIn();
        }
        if (item == 5) {
            $('.benefit-right').fadeOut();
        } else {
            $('.benefit-right').fadeIn();
        }
    });
    $('.benefit-right').click(function() {
        benefitSlider.trigger('next.owl.carousel');
    });
    $('.benefit-left').click(function() {
        benefitSlider.trigger('prev.owl.carousel');
    });

    var trenerSlider = $('.trener__slider');
    trenerSlider.owlCarousel({
        items: 5,
        autoWidth: true,
        dots: false,
        margin: 32,
        loop: true,
    });
    $('.trener-right').click(function() {
        trenerSlider.trigger('next.owl.carousel');
    });
    $('.trener-left').click(function() {
        trenerSlider.trigger('prev.owl.carousel');
    });

    var spaSlider = $('.spa__slider');
    spaSlider.owlCarousel({
        items: 3,
        autoWidth: true,
        dots: false,
        margin: 85,
    });
    $('.spa-right').click(function() {
        spaSlider.trigger('next.owl.carousel');
    });
    $('.spa-left').click(function() {
        spaSlider.trigger('prev.owl.carousel');
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

    $('.header-burger').on('click', function(e) {
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


    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            var indexOfSection = destination.index + 1;
            $('.section').removeClass('effect');
            $('.section').removeClass('after-effect');
            $('.section:nth-child(' + indexOfSection + ')').addClass('effect');

            if(indexOfSection > 2 && indexOfSection < 10 ) {
                $('.sections-title1').fadeIn(500);
                setTimeout(function() {
                    $('.section4__inner1').fadeIn();
                }, 3000);
            } else {
                $('.sections-title1').fadeOut();
            }

            if($('.section1').hasClass('active')){
                $('.header').slideUp();
            } else {
                $('.header').slideDown();
            }
        },
        onLeave: function(origin, destination, direction){
            var leavingSection = origin.index + 1;
            $('.section:nth-child(' + leavingSection + ')').removeClass('effect');
            $('.section:nth-child(' + leavingSection + ')').addClass('after-effect');
            if(leavingSection >= 2 && leavingSection <= 9 ) {
                $('.sections-title1').fadeIn(500);
            }
            if(leavingSection == 9 && direction == 'down') {
                $('.sections-title1').fadeOut(500);
            }
            console.log(leavingSection);
        },
        css3: true,
        scrollingSpeed: 1000,
        responsiveHeight: 330,
        dragAndMove: true,
        dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
        controlArrows: false,
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
    });

    // $('.sections-title1').css({
    //     '' : '',
    // });


});