// jQuery document ready
$(document).ready(function () {



  // START SCROLL TOP BTN

  let btnTop = $('.btn-top');

  $(window).scroll(function () {

    if ($(window).scrollTop() > 150) {

      btnTop.fadeIn(500);

    } else {

      btnTop.fadeOut(500);
    }

  });

  btnTop.click(function () {
    $('html').animate({
      scrollTop: 0

    }, 1000)
  });

  // END SCROLL TOP BTN

  $('#owl-carousel,#owl-carousel1').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 1,
  });


  // animation scroll 
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 200, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 200, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    once: 'true'

  });


  $(".list").click(function () {
    const dataValue = $(this).attr("data-filter")
    if (dataValue == "all-items") {
      $(".item").show(500)
    } else {
      $(".item").not("." + dataValue).hide(500)
      $(".item").filter("." + dataValue).show(500)
    }
  });
});

$("li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");


});
