$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ products Slider ************************************/
  var productsSwiper = new Swiper(".products-swiper .swiper", {
    loop: true,
    observer: true,
    observeParents: true,
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".products-swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 4,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      1300: {
        spaceBetween: 48,
        slidesPerView: 4,
      },
      on: {
        init: function (swiper) {
          $(".imgs-slider").trigger("refresh.owl.carousel");
        },
      },
    },
  });
  /************************************ news Slider ************************************/
  var newsSwiper = new Swiper(".news-swiper .swiper", {
    loop: true,
    observer: true,
    observeParents: true,
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".news-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-swiper .swiper-button-next",
      prevEl: ".news-swiper .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1300: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    },
  });

  var owl = $(".imgs-slider");
  owl.owlCarousel({
    loop: true,
    center:true,
    rtl: document.dir == "rtl" ? true : false,
    items: 1,
  });
});
