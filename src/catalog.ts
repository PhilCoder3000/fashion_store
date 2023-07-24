import './styles/global/index.scss';

import './styles/common/header.scss';
import './styles/common/footer.scss';
import './styles/common/hovered_card.scss';
import './styles/common/dropdown.scss';

import './styles/catalog_page/section_1.scss';
import './styles/catalog_page/section_2.scss';

import { addDropdown } from './scripts/common/dropdown';
import { addFooterAccordion } from './scripts/common/footer_accordion';
import { addHeaderBurgerMenu } from './scripts/common/header_burger_menu';
import { hoveredGalleryCard } from './scripts/index_page/hovered_gallery_card';
import { addFilter } from './scripts/catalog_page/filter';
import { addAccordion } from './scripts/common/accordion';

window.onload = () => {
  addHeaderBurgerMenu();
  addDropdown();
  addFilter();
  addAccordion();
  hoveredGalleryCard();
  addFooterAccordion();
};
