
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
  $(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });