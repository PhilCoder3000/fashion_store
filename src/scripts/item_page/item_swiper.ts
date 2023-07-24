import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export function addItemSwiper() {
  const container = document.querySelector<HTMLDivElement>('.swiper_container');

  if (!container) return;

  const slidesPerView = getSlidesPerView();

  if (window.innerWidth < 600) {
    new Swiper('.item_page_swiper', {
      slidesPerView,
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
      },
    });
  } else {
    new Swiper('.item_page_swiper', {
      slidesPerView,
      modules: [Navigation],
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
  }
}

function getSlidesPerView() {
  if (window.innerWidth < 600) {
    return 1;
  }
  return 2;
}