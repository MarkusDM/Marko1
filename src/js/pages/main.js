"use strict";

import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/grid';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Thumbs,
  EffectCreative,
  Mousewheel,
  Grid,

} from "swiper/modules";
import "animate.css/source/animate.css";
import WOW from 'wow.js';




new WOW().init();





export const rem = function (rem) {
  if ($(window).width() > 768) {
    return 0.005208335 * $(window).width() * rem;
  } else {
    return (100 / 390) * (0.1 * $(window).width()) * rem;
  }
};




$('.catalog__filter-block').each(function () {
  let more = $(this).find('.catalog__filter-block-btn');
  let hide = $(this).find('.catalog__filter-block-lists');
  hide.hide(0);
  more.click(function () {
    hide.fadeToggle(200);
    more.toggleClass('active');
  });
});


document.querySelectorAll('.catalog__box-left').forEach(n => {
  const thumbs = new Swiper(n.querySelector('.catalog__box-t-swiper'), {
    modules: [Navigation,  Pagination, Thumbs],
    slideToClickedSlide: true,
    spaceBetween: rem(0.6),
    slidesPerView: 3,
    watchSlidesProgress: true,

   
  });

  const catalogSlider = new Swiper(n.querySelector('.catalog__box-swiper'), {
    modules: [Navigation,  Pagination, Thumbs],
    pagination: {
      el: n.querySelector('.catalog__box-pagination-fraction'),
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
    },
    navigation: {
      nextEl: n.querySelector('.catalog__box-next'),
      prevEl: n.querySelector('.catalog__box-prev'),
    },
    thumbs: {
      swiper: thumbs
    }
  });

});


function addZero(num) {
  return (num > 9) ? num : '0' + num;
}



$(document).ready(function() {
  var checks = $(".catalog__checkbox-check");
  
  $(".catalog__filters-reset").on("click", function() {
    checks.prop('checked', false);
  });

  $(".catalog__filter-mb").click( function() {
    $('.catalog__filters-wrapper').addClass('active');
  });

  $(".catalog__filter-wrapper-close").click( function() {
    $('.catalog__filters-wrapper').removeClass('active');
  });

});







