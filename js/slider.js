$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    mobileFirst: true,
    arrows: true,
    prevArrow: $('.left-arrow'),
    nextArrow: $('.right-arrow'),
    slidesToShow: 2
});

// $(document).ready(function(){
//     $('.slider').slick({
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         cssEase: 'linear',
//         mobileFirst: true,
//         // arrows: true,
//         // prevArrow: $('.left-arrow'),
//         // nextArrow: $('.right-arrow')
//     });
// });