$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
          $('body,html').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
  });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 1200) {
        $('.scrollup').fadeIn(200);
    } else {
        $('.scrollup').fadeOut(200);
    }
});

$('.scrollup').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
