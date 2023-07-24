export function addSizeGuide() {
  const openSpan = document.querySelector<HTMLSpanElement>('.open_size_guide');
  const modal = document.querySelector('.size_guide_modal');
  const closeBtn = modal?.querySelector<HTMLButtonElement>(
    '.close_size_guide_btn',
  );

  if (!openSpan || !modal || !closeBtn) return;

  openSpan.onclick = (e) => {
    e.stopPropagation();
    modal.classList.toggle('opened');
    document.body.style.overflowY = 'hidden';
  };

  closeBtn.onclick = () => {
    modal.classList.remove('opened');
    document.body.style.overflowY = 'initial';
  };
}
