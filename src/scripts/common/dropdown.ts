export function addDropdown() {
  const dds = document.querySelectorAll<HTMLDivElement>('.dropdown');
  
  function open(this: HTMLDivElement, e: MouseEvent) {
    this.classList.toggle('opened');

    const close = () => {
      this.classList.remove('opened');
      document.body.removeEventListener('click', close);
    }

    document.body.addEventListener('click', close);
    e.stopPropagation();
  }

  dds.forEach((dropdown) => {
    dropdown.addEventListener('click', open);
  });
}
