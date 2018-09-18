
$(function () {
  // get the value of the bottom of the header-top element by adding the offset of that element plus its height, set it as a variable
  // let navBottom = $('.header-nav').offset().top + $('.header-nav').height();

  // // on scroll, 
  // $(window).on('scroll', function () {

  //   // we round here to reduce a little workload
  //   let stop = Math.round($(window).scrollTop());

  //   if (stop > navBottom) {
  //     $('.header-nav').addClass('nav-scroll');
  //   } else {
  //     $('.header-nav').removeClass('nav-scroll');
  //   }
  // });

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 20,
    // loop: true,
    showCursor: false,
  });

});