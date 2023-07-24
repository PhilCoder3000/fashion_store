import './styles/global/index.scss';

import './styles/common/header.scss';
import './styles/common/footer.scss';
import './styles/common/hovered_card.scss';
import './styles/common/dropdown.scss';

import './styles/item_page/section_1.scss';
import './styles/item_page/section_2.scss';

import { addDropdown } from './scripts/common/dropdown';
import { addFooterAccordion } from './scripts/common/footer_accordion';
import { addHeaderBurgerMenu } from './scripts/common/header_burger_menu';
import { hoveredGalleryCard } from './scripts/index_page/hovered_gallery_card';
import { addItemSwiper } from './scripts/item_page/item_swiper';
import { addAccordion } from './scripts/common/accordion';
import { addSizeGuide } from './scripts/item_page/size_guide';
import { addToCard } from './scripts/item_page/add_to_card';

window.onload = () => {
  addHeaderBurgerMenu();
  addDropdown();
  addItemSwiper();
  addAccordion();
  addSizeGuide();
  addToCard();
  hoveredGalleryCard();
  addFooterAccordion();
};
