export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutside);
    });

    element.setAttribute(outside, "");
  }

  function handleOutside(event) {
    const isLink = event.target.nodeName === 'A';
    const delay = isLink && 'ontouchstart' in window ? 300 : 0; // delay de 300ms para dispositivos móveis ao clicar em links
    setTimeout(() => {
      if (!element.contains(event.target) && !isLink) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutside);
        });
        callback();
      }
    }, delay);
  }
}
