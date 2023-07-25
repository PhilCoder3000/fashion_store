export function addAccordion() {
  const items = document.querySelectorAll<HTMLDivElement>('.accordion');

  function openHandler(this: HTMLDivElement) {
    if (this.classList.contains('opened')) {
      this.classList.remove('opened');
      const hiddenContent =
        this.querySelector<HTMLDivElement>('.hidden_content');
      if (hiddenContent) {
        hiddenContent.style.height = '0';
      }
    } else {
      items.forEach((acc) => {
        const hiddenContent =
          acc.querySelector<HTMLDivElement>('.hidden_content');

        if (hiddenContent) {
          if (this === acc) {
            this.classList.add('opened');
            hiddenContent.style.height = `${hiddenContent.scrollHeight + 20}px`;
          } else {
            acc.classList.remove('opened');
            hiddenContent.style.height = '0';
          }
        }
      });
    }
  }

  items.forEach((acc) => {
    acc.addEventListener('click', openHandler);
  });
}
