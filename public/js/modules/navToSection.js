export default function navToSection(){
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    linksInternos.forEach(link => {
      link.classList.remove("link_active");
    });

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    
    event.currentTarget.classList.add("link_active");

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

}
