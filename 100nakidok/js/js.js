$('.slider').slick({
    dots : true,
    // autoplay : true,
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