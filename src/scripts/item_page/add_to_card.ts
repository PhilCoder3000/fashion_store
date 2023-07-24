export function addToCard() {
  const btn = document.querySelector<HTMLButtonElement>('.add_to_cart_btn')
  const addToCartModal = document.querySelector<HTMLDivElement>('.add_to_cart_modal')
  const closeBtn = document.querySelector<HTMLButtonElement>('.add_to_cart_modal_close_btn')

  if (btn && addToCartModal && closeBtn) {
    btn.onclick = () => {
      addToCartModal.classList.add('opened')
      document.body.style.overflowY = 'hidden';
    }
    closeBtn.onclick = () => {
      addToCartModal.classList.remove('opened')
      document.body.style.overflowY = 'initial';
    }
  }

}