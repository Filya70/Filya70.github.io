$(document).ready(function(){
$('.slider').slick({
    arrows: false,
    dots : true,
    customPaging: (slider, i) => `<a>${'0'+(i + 1) }</a>`,
    // autoplay : true,
    initialSlide: 2,
    adaptiveHeight: true,
    // autoplaySpeed : 5000,
    // prevArrow: "<img src='img/beforeslide.png' class='prev' alt='1'>",
    // nextArrow: "<img src='img/afterslide.png' class='next' alt='2'>"
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        dots: true,
        adaptiveHeight: true
      }
    }]
});

$('.question__item__title').on('click',function(){
  $(this).parents('.question__item').find('.question__item__answ').slideToggle(300);
  $(this).toggleClass('open');
});

});