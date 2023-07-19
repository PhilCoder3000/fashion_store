import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

export function addSwiper() {
  const container = document.querySelector<HTMLDivElement>('.swiper_container');

  if (!container) return;

  const spaceBetween = getSpaceBetween(container);

  const slidesPerView = getSlidesPerView();

  new Swiper('.index_page_swiper', {
    slidesPerView,
    centeredSlides: true,
    spaceBetween,
    initialSlide: 2,
    modules: [Navigation],
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });
}

function getSlidesPerView() {
  if (window.innerWidth < 600) {
    return 1.2;
  }
  return 2.1;
}

function getSpaceBetween(container: HTMLDivElement) {
  if (window.innerWidth < 600) {
    return 10
  }
  return (container.clientWidth - 1040) / 2;
}
