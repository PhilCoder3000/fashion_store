export function addFooterAccordion() {
  const accordions =
    document.querySelectorAll<HTMLDivElement>('.footer_accordion');

  function open(this: HTMLDivElement) {
    accordions.forEach((acc) => {
      if (acc === this) {
        acc.classList.toggle('opened');
      } else {
        acc.classList.remove('opened');
      }
    });
  }

  accordions.forEach((acc) => {
    acc.addEventListener('click', open);
  });
}
