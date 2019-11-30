$('.slider').slick({
    arrows: false,
    dots : true,
    customPaging: (slider, i) => `<a>${'0'+(i + 1) }</a>`,
    autoplay : true,
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