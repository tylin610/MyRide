
$(function () {
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            var indexOfSection = destination.index + 1;
            $('.section').removeClass('effect');
            $('.section').removeClass('after-effect');
            $('.section:nth-child(' + indexOfSection + ')').addClass('effect');

            if (indexOfSection > 2 && indexOfSection < 10) {
                $('.sections-title1').fadeIn(500);
                setTimeout(function () {
                    $('.section4__inner1').fadeIn();
                }, 3000);
            } else {
                $('.sections-title1').fadeOut();
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
            if (leavingSection >= 3 && leavingSection <= 9) {
                $('.sections-title1').fadeIn(500);
            }
            if (leavingSection == 9 && direction == 'down') {
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