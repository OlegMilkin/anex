let backToTop = $('.js_back-top');

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    backToTop.addClass('back-to-top--active');
  } else {
    backToTop.removeClass('back-to-top--active');
  }
});

backToTop.on('click', function(e){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  e.preventDefault();
});