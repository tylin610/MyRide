$(function () {
    new fullpage('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4'],
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            var indexOfSection = destination.index + 1;
            $('.section').removeClass('effect');
            $('.section').removeClass('after-effect');
            $('.section:nth-child(' + indexOfSection + ')').addClass('effect');

            // section - Num of SECTION
            // selectos - element to change
            // todo - fadeIn, fadeOut, addClass, removeClass
            // className - on remove or add
            function stoppedSection(section, selector, todo, className) {

                if (todo == 'fadeOut'){
                    if (indexOfSection == section) {
                        $(selector).fadeOut();
                    }
                } else if(todo == 'fadeIn') {
                    if (indexOfSection == section) {
                        $(selector).fadeIn();
                    }
                } else if(todo == 'addClass') {
                    if (indexOfSection == section) {
                        $(selector).addClass(className);
                    }
                } else if(todo == 'removeClass') {
                    if (indexOfSection == section) {
                        $(selector).removeClass(className);
                    }
                }
            }

            if (indexOfSection > 2 && indexOfSection < 6) {
                $('.sections-subtitle1').addClass('animated');
            }
            if (indexOfSection > 1 && indexOfSection < 10) {
                $('.sections-title1').fadeIn();
                $('.sections-title1').addClass('animated');
                fullpage_api.setScrollingSpeed(500);
            }

            if (indexOfSection > 9 && indexOfSection < 11) {
                $('.sections-title2').fadeIn();
                $('.sections-title2').addClass('animated');
            }
            if (indexOfSection > 10) {
                fullpage_api.setScrollingSpeed(1000);
            }

            if (indexOfSection >= 3 && indexOfSection <= 9) {
                $('.sections-title1').addClass('transp');
                $('.sections-subtitle1').fadeIn();
            }

            if (indexOfSection >= 8 && indexOfSection <= 9) {
                $('.sections-title1').addClass('transp');
                $('.sections-subtitle3').fadeIn();
            }

            if (indexOfSection >= 11 && indexOfSection <= 12) {
                $('.sections-title2').fadeIn();
                $('.sections-title2').addClass('transp');
            }

            if (indexOfSection >= 14 && indexOfSection <= 15) {
                $('.sections-title3').fadeIn();
                $('.sections-title3').addClass('transp');
            }

            stoppedSection(13, '.sections-title3', 'fadeIn');
            stoppedSection(13, '.sections-title3', 'addClass', 'animated');

            stoppedSection(16, '.sections-title4', 'fadeIn');
            stoppedSection(16, '.sections-title4', 'addClass', 'animated');

            stoppedSection(18, '.sections-title5', 'fadeIn');
            stoppedSection(18, '.sections-title5', 'addClass', 'animated');

            stoppedSection(20, '.sections-title6', 'fadeIn');
            stoppedSection(20, '.sections-title6', 'addClass', 'animated');

            stoppedSection(17, '.sections-title4', 'fadeIn');
            stoppedSection(17, '.sections-title4', 'addClass', 'transp');

            stoppedSection(19, '.sections-title5', 'fadeIn');
            stoppedSection(19, '.sections-title5', 'addClass', 'transp');

            stoppedSection(21, '.sections-title6', 'fadeIn');
            stoppedSection(21, '.sections-title6', 'addClass', 'transp');

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

            // section - Num of SECTION
            // directionTo - up,down
            // selectos - element to change
            // todo - fadeIn, fadeOut, addClass, removeClass
            // className - on remove or add
            function leaveSection(section, directionTo, selector, todo, className) {

                if (todo == 'fadeOut'){
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).fadeOut();
                    }
                } else if(todo == 'fadeIn') {
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).fadeIn();
                    }
                } else if(todo == 'addClass') {
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).addClass(className);
                    }
                } else if(todo == 'removeClass') {
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).removeClass(className);
                    }
                }
            }

            leaveSection(2, 'up', '.sections-title1', 'fadeOut');
            leaveSection(3, 'up', '.sections-title1', 'removeClass', 'transp');

            leaveSection(3, 'up', '.sections-subtitle1', 'removeClass', 'animated');

            leaveSection(6, 'up', '.sections-subtitle1', 'fadeIn');
            leaveSection(6, 'up', '.sections-subtitle1', 'addClass', 'animated');
            leaveSection(6, 'up', '.sections-subtitle1', 'removeClass', 'after-animated');
            leaveSection(6, 'up', '.sections-subtitle2', 'fadeOut');

            leaveSection(8, 'up', '.sections-subtitle2', 'fadeIn');
            leaveSection(8, 'up', '.sections-subtitle2', 'addClass', 'animated');
            leaveSection(8, 'up', '.sections-subtitle2', 'removeClass', 'after-animated');
            leaveSection(8, 'up', '.sections-subtitle3', 'fadeOut');

            leaveSection(10, 'up', '.sections-title2', 'fadeOut');

            leaveSection(11, 'up', '.sections-title2', 'removeClass', 'transp');

            leaveSection(13, 'up', '.sections-title3', 'fadeOut');
            leaveSection(13, 'up', '.sections-subtitle1', 'removeClass', 'animated');

            leaveSection(14, 'up', '.sections-title3', 'removeClass', 'transp');

            leaveSection(16, 'up', '.sections-title4', 'fadeOut');
            leaveSection(18, 'up', '.sections-title5', 'fadeOut');
            leaveSection(20, 'up', '.sections-title6', 'fadeOut');

            leaveSection(17, 'up', '.sections-title4', 'removeClass', 'transp');
            leaveSection(19, 'up', '.sections-title5', 'removeClass', 'transp');
            leaveSection(21, 'up', '.sections-title6', 'removeClass', 'transp');

            // if (leavingSection >= 3 && leavingSection <= 9) {
            //     $('.sections-title1').addClass('transp');
            //     $('.sections-subtitle1').fadeIn();
            // }

            leaveSection(2, 'down', '.sections-title1', 'addClass', 'transp');

            leaveSection(5, 'down', '.sections-subtitle1', 'removeClass', 'animated');
            leaveSection(7, 'down', '.sections-subtitle2', 'removeClass', 'animated');

            leaveSection(5, 'down', '.sections-subtitle2', 'addClass', 'animated');
            leaveSection(7, 'down', '.sections-subtitle3', 'addClass', 'animated');

            leaveSection(5, 'down', '.sections-subtitle1', 'addClass', 'after-animated');
            leaveSection(7, 'down', '.sections-subtitle2', 'addClass', 'after-animated');

            leaveSection(5, 'down', '.sections-subtitle1', 'fadeOut');
            leaveSection(7, 'down', '.sections-subtitle2', 'fadeOut');
            leaveSection(9, 'down', '.sections-subtitle3', 'fadeOut');

            leaveSection(5, 'down', '.sections-subtitle2', 'fadeIn');
            leaveSection(7, 'down', '.sections-subtitle3', 'fadeIn');

            leaveSection(9, 'down', '.sections-title1', 'fadeOut');
            leaveSection(12, 'down', '.sections-title2', 'fadeOut');
            leaveSection(15, 'down', '.sections-title3', 'fadeOut');
            leaveSection(17, 'down', '.sections-title4', 'fadeOut');
            leaveSection(19, 'down', '.sections-title5', 'fadeOut');
            leaveSection(21, 'down', '.sections-title6', 'fadeOut');

            leaveSection(10, 'down', '.sections-title2', 'addClass', 'transp');
            leaveSection(13, 'down', '.sections-title3', 'addClass', 'transp');
            leaveSection(16, 'down', '.sections-title4', 'addClass', 'transp');
            leaveSection(18, 'down', '.sections-title5', 'addClass', 'transp');
            leaveSection(20, 'down', '.sections-title6', 'addClass', 'transp');
        },
        css3: true,
        scrollingSpeed: 1000,
        responsiveHeight: 330,
        dragAndMove: true,
        dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
        controlArrows: false,
        // navigation: true,
        // navigationPosition: 'right',
        scrollOverflow: true
        // navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
    });

    // $('.sections-title1').css({
    //     '' : '',
    // });
});