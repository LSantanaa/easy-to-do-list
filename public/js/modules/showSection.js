export default function showSection(){
  const main = document.querySelector('#main')
  const about = document.querySelector('#sobre')
  const links = document.querySelectorAll('a[href^="#"]')
  const linksSelect = Array.from(links).slice(1,3)

  function showAbout(e){
   if(e.target.hash == '#sobre'){
      main.classList.remove('active')
      main.classList.add('d-none')
      about.classList.add('active')
      about.classList.remove('d-none')
    }else if(e.target.hash == "#main"){
      main.classList.add('active')
      main.classList.remove('d-none')
      about.classList.remove('active')
      about.classList.add('d-none')
    }
  }

  linksSelect.forEach(link =>{
    link.addEventListener('click', showAbout)
  } )
}