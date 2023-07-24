export function addAccordion() {
  document.body.querySelectorAll<HTMLDivElement>('.accordion').forEach((acc) => {
    const head = acc.querySelector<HTMLHeadElement>('.subtitle_2');
    if (head) {
      head.onclick = () => {
        acc.classList.toggle('opened');
      };
    }
  });
}