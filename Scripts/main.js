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
  $('.logomarcas').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<i class="left-arrow"></i>',
  nextArrow: '<i class="right-arrow"></i>',
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: 
  [
  {
     breakpoint: 600,
     settings: {
         infinite: true,
         arrows: true,
         dots: false,
         slidesToShow: 2,
         slidesToScroll: 2
     }
  },
  {
     breakpoint: 480,
     settings: {
         infinite: true,
         arrows: true,
         dots: false,
         slidesToShow: 1,
         slidesToScroll: 1
     }
  }
  ]
  });
});

// Carousel depoimentos

$(document).ready(function(){
  $('.depoimentos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="left-arrow"></i>',
  nextArrow: '<i class="right-arrow"></i>',
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: 
  [
  {
     breakpoint: 600,
     settings: {
         infinite: true,
         arrows: true,
         slidesToShow: 1
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

// Carousel depoimentos reconhece

$(document).ready(function(){
  $('.depo-reconhece').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="left-arrow"></i>',
  nextArrow: '<i class="right-arrow"></i>',
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: 
  [
  {
     breakpoint: 600,
     settings: {
         infinite: true,
         arrows: true,
         slidesToShow: 1
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