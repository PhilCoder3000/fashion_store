import hoverImg1 from '../../assets/png/index_page/section_3_hover_1.png';
import hoverImg2 from '../../assets/png/index_page/section_3_hover_2.png';

export function hoveredGalleryCard() {
  document
    .querySelectorAll<HTMLDivElement>('.hovered_gallery_card')
    .forEach((card) => {
      let defaultSrc = '';
      const img = card.querySelector('img');
      const hoversContainer = card.querySelector<HTMLDivElement>('.hovered_spans')
      if (hoversContainer && img) {
        hoversContainer.onmouseleave = () => {
          img.src = defaultSrc;
        }
      }
      const hover1 = card.querySelector<HTMLSpanElement>('.hover_1');
      if (hover1 && img) {
        hover1.onmouseenter = () => {
          if (!defaultSrc) defaultSrc = img.src;
          if (img.src !== defaultSrc) img.src = defaultSrc;
        };
      }

      const hover2 = card.querySelector<HTMLSpanElement>('.hover_2');
      if (hover2 && img) {
        hover2.onmouseenter = () => {
          if (!defaultSrc) defaultSrc = img.src;
          if (img.src !== hoverImg1) img.src = hoverImg1;
        };
      }
      
      const hover3 = card.querySelector<HTMLSpanElement>('.hover_3');
      if (hover3 && img) {
        hover3.onmouseenter = () => {
          if (!defaultSrc) defaultSrc = img.src;
          if (img.src !== hoverImg2) img.src = hoverImg2;
        };
      }
    });
}
