/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".buy").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

 // Carousel marcas

 $(document).ready(function(){
  $('.montadoras').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<i class="left-arrow"></i>',
  nextArrow: '<i class="right-arrow"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: 
  [
  {
     breakpoint: 600,
     settings: {
         infinite: true,
         arrows: true,
         slidesToShow: 2
     }
  },
  {
     breakpoint: 480,
     settings: {
         infinite: true,
         arrows: true,
         slidesToShow: 1
     }
  }
  ]
  });
});