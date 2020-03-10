$(document).ready(function(){
    let pages = $('.counter');
    let slider = $('.slider__wrapper');

    slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){

        let i = (currentSlide ? currentSlide : 0) + 1;

        if(slick.slideCount >= 10){
            pages.text( i );
        }else{
            pages.text('0' + i );
        }
        //  
     });

    $('.slider__wrapper').slick({
      prevArrow: '<div class="prev"><img class="arrow" src="img/arr_left.png" alt=""></div>',
      nextArrow: '<div class="next"><img class="arrow" src="img/arr_right.png" alt=""></div>',
    });




    // SECOND SLIDER
    
    let $slider = $('.second__slider__wrapper');
    let $progressBar = $('.progress');
    let $progressBarLabel = $( '.slider__label' );

    function setProgress(index) {
        var calc = ((index + 2) / ($slider.slick('getSlick').slideCount)) * 100;
      
        $progressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
      
        $progressBarLabel.text(calc + '% completed');
      }
      
      
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        setProgress(nextSlide);
      });




    $('.second__slider__wrapper').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2500,
      });
  });


