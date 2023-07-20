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
  if (window.innerWidth < 1000) {
    return 1.5;
  }
  if (window.innerWidth < 1400) {
    return 1.7;
  }
  return 2.1;
}

function getSpaceBetween(container: HTMLDivElement) {
  if (window.innerWidth < 600) {
    return 10
  }
  if (window.innerWidth < 1000) {
    return 50
  }
  if (window.innerWidth < 1400) {
    return 100
  }
  return (container.clientWidth - 1040) / 2;
}
