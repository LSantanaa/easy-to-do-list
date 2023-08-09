import outsideClick from "./outsideClick.js";

export function menuMobile(){
    const btnMobile = document.querySelector(".btn-mobile");
    const navContainer = document.querySelector('.nav-container')
    btnMobile.addEventListener("click", function () {
      btnMobile.classList.toggle("ativo");
      navContainer.classList.toggle('ativo');
      outsideClick(btnMobile, ["touchstart", "click"], () => {
        setTimeout(() => {
          btnMobile.classList.remove("ativo");
          navContainer.classList.remove('ativo');
        }, 300);
      });      
    });    
}