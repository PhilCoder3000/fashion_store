import './styles/global/index.scss';

import './styles/common/header.scss';
import './styles/common/footer.scss';

import './styles/index_page/section_1.scss';
import './styles/index_page/section_2.scss';
import './styles/index_page/section_3.scss';
import './styles/index_page/section_4.scss';
import './styles/index_page/section_5.scss';

import { addDropdown } from './scripts/common/dropdown';
import { hoveredGalleryCard } from './scripts/index_page/hovered_gallery_card';
import { addSwiper } from './scripts/index_page/swiper';

window.onload = () => {
  addDropdown();
  hoveredGalleryCard();
  addSwiper();
};
