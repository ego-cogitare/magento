$(document).ready(function() {
  $('.sitebar .menu-item').on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('opened').find('.submenu').slideToggle();
  });


  new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
    loop: false,
    autoplayStopOnLast: true,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });
});
