export function addItemCount() {
  document
    .querySelectorAll<HTMLDivElement>('.cart_item')
    .forEach((cartItem) => {
      const dec = cartItem.querySelector<HTMLButtonElement>('.dec');
      const inc = cartItem.querySelector<HTMLButtonElement>('.inc');
      const count =
        cartItem.querySelector<HTMLParagraphElement>('.cart_item_count');

      function setCount(val: number) {
        const newVal = Number(count!.textContent) + val;
        count!.textContent = `${newVal}`;

        dec!.disabled = newVal === 1;
      }

      if (dec && inc && count) {
        dec.onclick = () => setCount(-1);
        inc.onclick = () => setCount(1);
      }
    });
}
