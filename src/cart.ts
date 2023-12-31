import './styles/global/index.scss';

import './styles/common/header.scss';
import './styles/common/footer.scss';
import './styles/common/hovered_card.scss';
import './styles/common/dropdown.scss';

import './styles/cart_page/section_1.scss';

import { addDropdown } from './scripts/common/dropdown';
import { addHeaderBurgerMenu } from './scripts/common/header_burger_menu';
import { addItemCount } from './scripts/cart_page/item_count';
import { addAccordion } from './scripts/common/accordion';

window.onload = () => {
  addHeaderBurgerMenu();
  addDropdown();
  addItemCount();
  addAccordion();
};
