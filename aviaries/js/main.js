$(document).ready(function(){
    $('.slider__reviews').slick({
        slidesToShow: 2,
        arrows: true,
        prevArrow: "<img src='../img/slider1_l.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../img/slider1_r.svg' class='next' alt='2'>",
    });


    $('.slider_first, .slider_second').slick({
        slidesToShow: 1,
        arrows: true,
        prevArrow: `<svg class="slider2l arr arr2" width="45" height="45" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M7.16173 13.5965L19.9952 0.179756C20.2184 -0.0515197 20.5876 -0.061801 20.82 0.161545C21.0524 0.384289 21.0604 0.753434 20.8382 0.986405L8.39107 13.9999L20.8383 27.0134C21.0605 27.2463 21.0525 27.6155 20.8201 27.8382C20.7072 27.9465 20.5615 28 20.4167 28C20.2629 28 20.1103 27.9396 19.9952 27.82L7.16173 14.4032C6.94637 14.1776 6.94637 13.8221 7.16173 13.5965Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="28" height="28" transform="matrix(-1 0 0 1 28 0)" fill="white"/>
        </clipPath>
        </defs>
        </svg>`,
        nextArrow: `<svg class="slider2r arr" width="45" height="45" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M20.8383 13.5965L8.00484 0.179756C7.78155 -0.0515197 7.41241 -0.061801 7.17998 0.161545C6.94756 0.384289 6.93957 0.753434 7.16177 0.986405L19.6089 13.9999L7.16172 27.0134C6.93952 27.2463 6.9475 27.6155 7.17993 27.8382C7.29275 27.9465 7.43855 28 7.58325 28C7.73709 28 7.88972 27.9396 8.00479 27.82L20.8383 14.4032C21.0536 14.1776 21.0536 13.8221 20.8383 13.5965Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="28" height="28" fill="white"/>
        </clipPath>
        </defs>
        </svg>`,
    });


});