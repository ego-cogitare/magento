$(document).ready(function() {
  $('.sitebar .menu-item').on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('opened').find('.submenu').slideToggle();
  });
});
