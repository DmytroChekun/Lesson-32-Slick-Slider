$(document).ready(function() {
    $('.slider').slick({
    adaptiveHight: true,
    dots: true,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    speed: 400,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true, //default
    pauseOnHover: true, //default
    pauseOnDotsHover: true, //default
    waitForAnimate: false,
    centerMode: false, //default
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
      ]
});
});

$('.slider').children('.slick-slide').css('opacity', 0.1);
$('.slider').children('.slick-slide.slick-active').last().css('opacity', 0.1);
