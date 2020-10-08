$(function () {
    new fullpage('#fullpage', {
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            var indexOfSection = destination.index + 1;
            $('.section').removeClass('effect');
            $('.section').removeClass('after-effect');
            $('.section:nth-child(' + indexOfSection + ')').addClass('effect');

            if (indexOfSection == 1) {
                $('.main__video video').get(0).play()
            } else {
                $('.main__video video').get(0).pause()
            }
            if (indexOfSection == 9) {
                slideIndex = 6;
                $('.benefit__item').removeClass('showed');
                $('.benefit__item:nth-child(1)').addClass('showed');
            }
            if (indexOfSection == 12) {
                var count = 0;
                setInterval(function () {
                    if (count > 1) count = 0;
                    count++;
                    if (count == 1) {
                        $('.index__item:nth-child(1)').addClass("active");
                        $('.index__item:nth-child(2)').removeClass("active");
                    } else {
                        $('.index__item:nth-child(2)').addClass("active");
                        $('.index__item:nth-child(1)').removeClass("active");
                    }
                }, 2000);
            }

            // section - Num of SECTION
            // selectos - element to change
            // todo - fadeIn, fadeOut, addClass, removeClass
            // className - on remove or add
            function stoppedSection(section, selector, todo, className) {

                if (todo == 'fadeOut') {
                    if (indexOfSection == section) {
                        $(selector).fadeOut();
                    }
                } else if (todo == 'fadeIn') {
                    if (indexOfSection == section) {
                        $(selector).fadeIn();
                    }
                } else if (todo == 'addClass') {
                    if (indexOfSection == section) {
                        $(selector).addClass(className);
                    }
                } else if (todo == 'removeClass') {
                    if (indexOfSection == section) {
                        $(selector).removeClass(className);
                    }
                }
            }

            if (indexOfSection > 2 && indexOfSection < 4) {
                $('.sections-subtitle1').addClass('animated');
            } else {
                $('.sections-subtitle1').removeClass('animated');
            }
            if (indexOfSection > 3 && indexOfSection < 5) {
                $('.sections-subtitle2').addClass('animated');
            } else {
                $('.sections-subtitle2').removeClass('animated');
            }
            if (indexOfSection > 5 && indexOfSection < 7) {
                $('.sections-subtitle3').addClass('animated');
            } else {
                $('.sections-subtitle3').removeClass('animated');
            }

            if (indexOfSection > 6 || indexOfSection < 2) {
                $('.sections-title1').fadeOut();
            }
            if (indexOfSection > 9 || indexOfSection < 7) {
                $('.sections-title2').fadeOut();
            }
            if (indexOfSection > 12 || indexOfSection < 10) {
                $('.sections-title3').fadeOut();
            }
            if (indexOfSection > 14 || indexOfSection < 12) {
                $('.sections-title4').fadeOut();
            }
            if (indexOfSection > 16 || indexOfSection < 14) {
                $('.sections-title5').fadeOut();
            }
            if (indexOfSection > 18 || indexOfSection < 16) {
                $('.sections-title6').fadeOut();
            }

            if (indexOfSection > 1 && indexOfSection < 7) {
                $('.sections-title1').fadeIn();
                $('.sections-title1').addClass('animated');
                fullpage_api.setScrollingSpeed(500);
            }

            if (indexOfSection > 6 && indexOfSection < 9) {
                $('.sections-title2').fadeIn();
                $('.sections-title2').addClass('animated');
            }
            if (indexOfSection > 6) {
                fullpage_api.setScrollingSpeed(1000);
            }

            if (indexOfSection >= 3 && indexOfSection <= 6) {
                $('.sections-title1').addClass('transp');
                $('.sections-title1').addClass('animated');
            }

            if (indexOfSection >= 8 && indexOfSection <= 9) {
                $('.sections-title2').fadeIn();
                $('.sections-title2').addClass('animated');
                $('.sections-title2').addClass('transp');
            }

            if (indexOfSection >= 11 && indexOfSection <= 12) {
                $('.sections-title3').fadeIn();
                $('.sections-title3').addClass('animated');
                $('.sections-title3').addClass('transp');
            }

            if (indexOfSection == 14) {
                $('.sections-title4').fadeIn();
                $('.sections-title4').addClass('animated');
                $('.sections-title4').addClass('transp');
            }

            if (indexOfSection == 16) {
                $('.sections-title5').fadeIn();
                $('.sections-title5').addClass('animated');
                $('.sections-title5').addClass('transp');
            }

            if (indexOfSection == 18) {
                $('.sections-title6').fadeIn();
                $('.sections-title6').addClass('animated');
                $('.sections-title6').addClass('transp');
            }

            stoppedSection(1, '.sections-title1', 'fadeOut');
            stoppedSection(2, '.sections-title1', 'removeClass', 'transp');
            stoppedSection(10, '.sections-title1', 'fadeOut');
            stoppedSection(3, '.sections-title1', 'addClass', 'transp');

            stoppedSection(7, '.sections-title2', 'removeClass', 'transp');
            stoppedSection(10, '.sections-title2', 'fadeOut');
            stoppedSection(18, '.sections-title2', 'addClass', 'transp');
            stoppedSection(7, '.sections-title2', 'fadeIn');
            stoppedSection(7, '.sections-title2', 'addClass', 'animated');

            stoppedSection(10, '.sections-title3', 'fadeIn');
            stoppedSection(10, '.sections-title3', 'removeClass', 'transp');
            stoppedSection(10, '.sections-title3', 'addClass', 'animated');
            stoppedSection(11, '.sections-title3', 'addClass', 'animated');
            stoppedSection(12, '.sections-title3', 'addClass', 'animated');
            stoppedSection(11, '.sections-title3', 'addClass', 'transp');
            stoppedSection(12, '.sections-title3', 'addClass', 'transp');

            stoppedSection(13, '.sections-title4', 'fadeIn');
            stoppedSection(13, '.sections-title4', 'addClass', 'animated');
            stoppedSection(15, '.sections-title4', 'fadeOut');
            stoppedSection(13, '.sections-title4', 'fadeIn');
            stoppedSection(14, '.sections-title4', 'addClass', 'transp');
            stoppedSection(13, '.sections-title4', 'removeClass', 'transp');
            stoppedSection(15, '.sections-title4', 'fadeOut');
            stoppedSection(13, '.sections-title4', 'addClass', 'animated');

            stoppedSection(15, '.sections-title5', 'fadeIn');
            stoppedSection(15, '.sections-title5', 'addClass', 'animated');
            stoppedSection(17, '.sections-title5', 'fadeOut');
            stoppedSection(15, '.sections-title5', 'fadeIn');
            stoppedSection(16, '.sections-title5', 'addClass', 'transp');
            stoppedSection(15, '.sections-title5', 'removeClass', 'transp');
            stoppedSection(17, '.sections-title5', 'fadeOut');
            stoppedSection(15, '.sections-title5', 'addClass', 'animated');

            stoppedSection(17, '.sections-title6', 'fadeIn');
            stoppedSection(17, '.sections-title6', 'addClass', 'animated');
            stoppedSection(17, '.sections-title6', 'fadeIn');
            stoppedSection(18, '.sections-title6', 'addClass', 'transp');
            stoppedSection(19, '.sections-title6', 'fadeOut');
            stoppedSection(17, '.sections-title6', 'removeClass', 'transp');
            stoppedSection(16, '.sections-title6', 'fadeOut');
            stoppedSection(17, '.sections-title6', 'addClass', 'animated');


            stoppedSection(2, '.sections-subtitle1', 'removeClass', 'animated');
            stoppedSection(3, '.sections-subtitle1', 'fadeIn');
            stoppedSection(3, '.sections-subtitle1', 'addClass', 'animated');
            stoppedSection(3, '.sections-subtitle1', 'removeClass', 'after-animated');
            stoppedSection(4, '.sections-subtitle1', 'addClass', 'after-animated');

            stoppedSection(5, '.sections-subtitle2', 'removeClass', 'animated');
            stoppedSection(5, '.sections-subtitle2', 'fadeOut');
            stoppedSection(4, '.sections-subtitle2', 'fadeIn');
            stoppedSection(4, '.sections-subtitle2', 'addClass', 'animated');
            stoppedSection(4, '.sections-subtitle2', 'removeClass', 'after-animated');
            stoppedSection(5, '.sections-subtitle2', 'addClass', 'after-animated');
            stoppedSection(5, '.sections-subtitle2', 'fadeOut');
            stoppedSection(4, '.sections-subtitle2', 'fadeIn');

            stoppedSection(6, '.sections-subtitle3', 'addClass', 'animated');
            stoppedSection(5, '.sections-subtitle3', 'addClass', 'animated');
            stoppedSection(5, '.sections-subtitle3', 'fadeIn');
            stoppedSection(6, '.sections-subtitle3', 'fadeIn');

            if (indexOfSection == 19) {
                fullpage_api.setResponsive(true);
            } else {
                fullpage_api.setResponsive(false);
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

            // section - Num of SECTION
            // directionTo - up,down
            // selectos - element to change
            // todo - fadeIn, fadeOut, addClass, removeClass
            // className - on remove or add
            function leaveSection(section, directionTo, selector, todo, className) {

                if (todo == 'fadeOut') {
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).fadeOut();
                    }
                } else if (todo == 'fadeIn') {
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).fadeIn();
                    }
                } else if (todo == 'addClass') {
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).addClass(className);
                    }
                } else if (todo == 'removeClass') {
                    if (leavingSection == section && direction == directionTo) {
                        $(selector).removeClass(className);
                    }
                }
            }

            if (leavingSection == 18 && direction == "down") {
                fullpage_api.setResponsive(true);
            }
            if (leavingSection == 19 && direction == "up") {
                fullpage_api.setResponsive(false);
            }

            leaveSection(2, 'up', '.sections-title1', 'fadeOut');
            leaveSection(3, 'up', '.sections-title1', 'removeClass', 'transp');
            leaveSection(2, 'down', '.sections-title1', 'addClass', 'transp');
            leaveSection(6, 'down', '.sections-title1', 'fadeOut');

            leaveSection(7, 'up', '.sections-title2', 'fadeOut');
            leaveSection(8, 'up', '.sections-title2', 'removeClass', 'transp');
            leaveSection(9, 'down', '.sections-title2', 'fadeOut');
            leaveSection(6, 'down', '.sections-title2', 'fadeIn');
            leaveSection(7, 'down', '.sections-title2', 'addClass', 'transp');

            leaveSection(11, 'up', '.sections-title3', 'fadeOut');
            leaveSection(10, 'down', '.sections-title3', 'addClass', 'transp');
            leaveSection(12, 'down', '.sections-title3', 'fadeOut');

            leaveSection(13, 'up', '.sections-title4', 'fadeOut');
            leaveSection(14, 'up', '.sections-title4', 'removeClass', 'transp');
            leaveSection(14, 'down', '.sections-title4', 'fadeOut');
            leaveSection(13, 'down', '.sections-title4', 'addClass', 'transp');

            leaveSection(16, 'up', '.sections-title5', 'removeClass', 'transp');
            leaveSection(15, 'up', '.sections-title5', 'fadeOut');
            leaveSection(16, 'down', '.sections-title5', 'fadeOut');
            leaveSection(15, 'down', '.sections-title5', 'addClass', 'transp');

            leaveSection(18, 'up', '.sections-title6', 'removeClass', 'transp');
            leaveSection(17, 'up', '.sections-title6', 'fadeOut');
            leaveSection(18, 'down', '.sections-title6', 'fadeOut');
            leaveSection(17, 'down', '.sections-title6', 'addClass', 'transp');


            leaveSection(3, 'up', '.sections-subtitle1', 'removeClass', 'animated');
            leaveSection(3, 'down', '.sections-subtitle1', 'removeClass', 'after-animated');

            leaveSection(4, 'up', '.sections-subtitle2', 'removeClass', 'animated');
            leaveSection(4, 'down', '.sections-subtitle2', 'addClass', 'after-animated');

            leaveSection(5, 'up', '.sections-subtitle3', 'fadeOut');
            leaveSection(4, 'down', '.sections-subtitle3', 'addClass', 'animated');
            leaveSection(6, 'down', '.sections-subtitle3', 'fadeOut');
            leaveSection(7, 'up', '.sections-subtitle3', 'fadeIn');


        },
        css3: true,
        scrollingSpeed: 1000,
        responsiveHeight: 330,
        dragAndMove: true,
        dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
        controlArrows: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
            'MYRIDE', 'MYRIDE - ЭТО ШОУ', 'Выполняйте движения под музыкальный трэк и держитесь ритма', 'Потрясающие ощущения',
            '100% драйв ночного клуба', '100% драйв ночного клуба',
            'MYRIDE - ЭТО ЭФФЕКТИВНО', 'ЗАНЯТИЯ', 'ПОЛЬЗА', 'MYRIDE - ЭТО ИНДИВИДУАЛЬНО',
            'БАЙК', 'ПОКАЗАТЕЛИ', 'КАЖДОМУ ГОСТЮ БЕСПЛАТНО ВЫДАЮТСЯ', 'КАЖДОМУ ГОСТЮ БЕСПЛАТНО ВЫДАЮТСЯ',
            'НАШИ ТРЕНЕРЫ', 'ТРЕНЕРЫ', 'ЭКСКЛЮЗИВНАЯ ЗОНА SPA', 'SPA-КОМПЛЕКС', 'КОНТАКТЫ'
        ],
    });
});

var slideIndex = 1;
var flagSlider = true;
var timeSlide;

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function startAutoPlay() {
    timeSlide = setInterval(function () {
        if(flagSlider) {
            plusSlide();
        }
    }, 3500);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('benefit__item');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('showed');
    }
    slides[slideIndex - 1].classList.add('showed');

    $('#benefitCount').text((slideIndex));
    if (slideIndex > 1) {
        $('.benefit-right').removeClass("blinking");
    } else {
        $('.benefit-right').addClass("blinking");
    }
}

startAutoPlay();

$('.benefit-right').on('click', function (e) {
    e.preventDefault();
    plusSlide();
    flagSlider = false;
});
$('.benefit-left').on('click', function (e) {
    e.preventDefault();
    minusSlide();
    flagSlider = false;
});