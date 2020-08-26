
$(function () {
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            var indexOfSection = destination.index + 1;
            $('.section').removeClass('effect');
            $('.section').removeClass('after-effect');
            $('.section:nth-child(' + indexOfSection + ')').addClass('effect');

            if (indexOfSection > 2 && indexOfSection < 6) {
                $('.sections-subtitle1').addClass('animated');
            }
            if (indexOfSection > 1 && indexOfSection < 10) {
                $('.sections-title1').fadeIn();
                $('.sections-title1').addClass('animated');
            }

            if (indexOfSection > 9 && indexOfSection < 11) {
                $('.sections-title2').fadeIn();
                $('.sections-title2').addClass('animated');
            }

            if (indexOfSection == 13) {
                $('.sections-title3').fadeIn();
                $('.sections-title3').addClass('animated');
            }

            if (indexOfSection >= 3 && indexOfSection <= 9) {
                $('.sections-title1').addClass('transp');
                $('.sections-subtitle1').fadeIn();
            }
            if (indexOfSection >= 11 && indexOfSection <= 12) {
                $('.sections-title2').fadeIn();
                $('.sections-title2').addClass('transp');
            }

            if (indexOfSection >= 14 && indexOfSection <= 15) {
                $('.sections-title3').fadeIn();
                $('.sections-title3').addClass('transp');
            }

            if ($('.section1').hasClass('active')) {
                $('.header').slideUp();
            } else {
                $('.header').slideDown();
            }
        },
        onLeave: function (origin, destination, direction) {
            var leavingSection = origin.index + 1;
            $('.section:nth-child(' + leavingSection + ')').removeClass('effect');
            $('.section:nth-child(' + leavingSection + ')').addClass('after-effect');
            console.log(leavingSection);
            if (leavingSection == 3 && direction == 'up') {
                $('.sections-subtitle1').removeClass('animated');
            }

            if (leavingSection == 2 && direction == 'up') {
                $('.sections-title1').fadeOut();
            }

            if (leavingSection >= 3 && leavingSection <= 9) {
                $('.sections-title1').addClass('transp');
                $('.sections-subtitle1').fadeIn();
            }

            if (leavingSection == 3 && direction == 'up') {
                $('.sections-title1').removeClass('transp');
            }

            if (leavingSection == 6 && direction == 'up') {
                $('.sections-subtitle1').fadeIn();
                $('.sections-subtitle1').addClass('animated');
                $('.sections-subtitle1').removeClass('after-animated');
                $('.sections-subtitle2').fadeOut();
            }

            if (leavingSection == 8 && direction == 'up') {
                $('.sections-subtitle2').fadeIn();
                $('.sections-subtitle2').addClass('animated');
                $('.sections-subtitle2').removeClass('after-animated');
                $('.sections-subtitle3').fadeOut();
            }

            if (leavingSection == 10 && direction == 'up') {
                $('.sections-title2').fadeOut();
            }

            if (leavingSection == 11 && direction == 'up') {
                $('.sections-title2').removeClass('transp');
            }

            if (leavingSection == 13 && direction == 'up') {
                $('.sections-title3').fadeOut();
                $('.sections-subtitle1').removeClass('animated');
            }

            if (leavingSection == 14 && direction == 'up') {
                $('.sections-title3').removeClass('transp');
            }

            if (leavingSection == 2 && direction == 'down') {
                $('.sections-title1').addClass('transp');
            }

            if (leavingSection == 5 && direction == 'down') {
                $('.sections-subtitle1').removeClass('animated');
                $('.sections-subtitle1').addClass('after-animated');
                $('.sections-subtitle1').fadeOut();
                $('.sections-subtitle2').fadeIn();
                $('.sections-subtitle2').addClass('animated');
            }

            if (leavingSection == 7 && direction == 'down') {
                $('.sections-subtitle2').removeClass('animated');
                $('.sections-subtitle2').addClass('after-animated');
                $('.sections-subtitle2').fadeOut();
                $('.sections-subtitle3').fadeIn();
                $('.sections-subtitle3').addClass('animated');
            }

            if (leavingSection == 9 && direction == 'down') {
                $('.sections-title1').fadeOut();
                $('.sections-subtitle3').fadeOut();
            }

            if (leavingSection == 10 && direction == 'down') {
                $('.sections-title2').addClass('transp');
            }
            if (leavingSection == 12 && direction == 'down') {
                $('.sections-title2').fadeOut();
            }
            if (leavingSection == 13 && direction == 'down') {
                $('.sections-title3').addClass('transp');
            }
            if (leavingSection == 15 && direction == 'down') {
                $('.sections-title3').fadeOut();
            }
        },
        css3: true,
        scrollingSpeed: 1000,
        responsiveHeight: 330,
        dragAndMove: true,
        dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
        controlArrows: false,
        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
    });

    // $('.sections-title1').css({
    //     '' : '',
    // });
});