export function addFilter() {
  const openBtn = document.querySelector<HTMLButtonElement>('.open_filter_btn');
  const closeBtn = document.querySelector<HTMLButtonElement>(
    '.catalog_filter_close_btn',
  );
  const modal = document.querySelector<HTMLDivElement>('.catalog_filter_modal');

  if (openBtn && closeBtn && modal) {
    openBtn.onclick = () => {
      modal.classList.add('opened');
      document.body.style.overflowY = 'hidden';
    };
    closeBtn.onclick = () => {
      modal.classList.remove('opened');
      document.body.style.overflowY = 'initial';
    };
  }
}
