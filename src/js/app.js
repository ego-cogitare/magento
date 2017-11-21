$(document).ready(function() {
  $('.sitebar .menu-item').on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('opened').find('.submenu').slideToggle();
  });

  new Swiper('#home-slider-1', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: '#home-slider-1 .swiper-pagination',
    paginationClickable: true,
    loop: false,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });

  new Swiper('#home-slider-2', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    paginationClickable: true,
    loop: false,
    mousewheelControl: false,
    speed: 1000,
    nextButton: '#home-slider-2 .button-next',
    prevButton: '#home-slider-2 .button-prev'
  });

});
