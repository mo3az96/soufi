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
  /************************************ imgs Slider ************************************/
  var owl = $(".imgs-slider");
  owl.owlCarousel({
    loop: true,
    center: true,
    rtl: document.dir == "rtl" ? true : false,
    items: 1,
  });
  /************************************ navbar ************************************/
  if ($(window).width() <= 768) {
    $(".menu-btn").click(function (e) {
      $(".overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".close-btn,.overlay").click(function (e) {
      $(".overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    $(".has_sub .list-link").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".has_sub .list-link").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has_sub .list-link").not(this).siblings().slideUp(500);
    });
  }
  /************************************ product Slider ************************************/
  var productSwiper = new Swiper(".product-imgs-swiper .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".product-imgs-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-imgs-swiper .swiper-button-next",
      prevEl: ".product-imgs-swiper .swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 15,
  });
});
