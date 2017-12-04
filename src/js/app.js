$(document).ready(function() {
  $('.sitebar .menu-item').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('opened').find('.submenu').slideToggle();
  });

  $('.main-menu .menu-item').hover(
    function() {
      var $submenu = $(this).find('.submenu')
        , offset =$(this).offset();

      if (offset.left + $submenu.width() + 68 > $(window).width()) {
        $(this).addClass('justify-right');
      }
    },
    function() {
      $('.main-menu .menu-item').removeClass('justify-right');
    }
  );

  new Swiper('#home-slider-1', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: '#home-slider-1 .swiper-pagination',
    paginationClickable: true,
    autoplay: 3000,
    loop: true,
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

  $('.category-slider').each(function() {
    new Swiper($(this), {
      direction: 'horizontal',
      slidesPerView: 1,
      nextButton: $(this).find('.button-next'),
      prevButton: $(this).find('.button-prev'),
      paginationClickable: true,
      // autoplay: 3000,
      loop: true,
      spaceBetween: 0,
      mousewheelControl: false,
      speed: 1000
    });
  });

  $('#price-slider').jRange({
    from: 0,
    to: 70,
    step: 1,
    // scale: [0, 25, 50, 75, 100],
    scale: [],
    format: '%s',
    width: 'calc(100% - 5px)',
    showLabels: false,
    isRange : true,
    onstatechange: function(value) {
      var values = value.split(',');
      $('#price-slider-from').text(values[0]);
      $('#price-slider-to').text(values[1]);
    }
  });

  $(window).bind('scroll', function(e) {
    $(window).scrollTop() > 50
      ? $('body').addClass('small')
      : $('body').removeClass('small');
  });
});
