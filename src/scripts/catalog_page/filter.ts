export function addFilter() {
  const openBtn = document.querySelector<HTMLButtonElement>('.open_filter_btn');
  const closeBtn = document.querySelector<HTMLButtonElement>(
    '.catalog_filter_close_btn',
  );
  const modal = document.querySelector<HTMLDivElement>('.catalog_filter_modal');
  const content = modal?.querySelector<HTMLDivElement>('.content');

  function open() {
    if (modal && content) {
      modal.classList.add('opened');
      content.style.transform = 'translateX(0)';
    }
  }

  function close() {
    if (content) content.style.transform = 'translateX(100%)';

    setTimeout(() => {
      modal?.classList.remove('opened');
    }, 300);
  }

  if (openBtn && closeBtn && modal && content) {
    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    content.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    modal.addEventListener('click', close);
  }

  content?.querySelectorAll<HTMLDivElement>('.accordion').forEach((acc) => {
    const head = acc.querySelector<HTMLHeadElement>('.subtitle_2');
    if (head) {
      head.onclick = () => {
        acc.classList.toggle('opened');
      };
    }
  });
}
