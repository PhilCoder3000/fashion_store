import './styles/global/index.scss';

import './styles/common/header.scss';
import './styles/common/footer.scss';
import './styles/common/hovered_card.scss';
import './styles/common/dropdown.scss';

import './styles/cart_page/section_1.scss';

import { addDropdown } from './scripts/common/dropdown';
import { addFooterAccordion } from './scripts/common/footer_accordion';
import { addHeaderBurgerMenu } from './scripts/common/header_burger_menu';

window.onload = () => {
  addHeaderBurgerMenu();
  addDropdown();
  addFooterAccordion();
};
