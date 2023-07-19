import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

export function addSwiper() {
  const container = document.querySelector<HTMLDivElement>('.swiper_container');

  if (!container) return;

  const spaceBetween = (container.clientWidth - 1040) / 2;

  new Swiper('.index_page_swiper', {
    slidesPerView: 2.1,
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
