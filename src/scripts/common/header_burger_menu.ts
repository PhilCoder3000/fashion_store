export function addHeaderBurgerMenu() {
  const openBtn = document.querySelector<HTMLButtonElement>('.burger_menu_btn');
  const closeBtn = document.querySelector<HTMLButtonElement>('.burger_menu_close');
  const modal = document.querySelector<HTMLButtonElement>('.burger_menu_modal');

  if (openBtn && modal && closeBtn) {
    openBtn.onclick = () => {
      modal.classList.add('opened')
      document.body.style.overflowY = 'hidden'
    }
    closeBtn.onclick = () => {
      modal.classList.remove('opened')
      document.body.style.overflowY = 'initial'
    }
  }
}