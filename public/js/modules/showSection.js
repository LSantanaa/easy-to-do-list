export default function showSection(){
  const main = document.querySelector('#main')
  const about = document.querySelector('#sobre')
  const contact = document.querySelector('#contato')
  const links = document.querySelectorAll('a[href^="#"]')



  function showAbout(e){

    links.forEach(link => {
      link.classList.remove("link_active");
    });

   if(e.target.hash == '#sobre'){
      main.classList.remove('active')
      main.classList.add('d-none')
      about.classList.add('active')
      about.classList.remove('d-none')
      contact.classList.remove('active')
      contact.classList.add('d-none')
    }else if(e.target.hash == "#main"){
      main.classList.add('active')
      main.classList.remove('d-none')
      about.classList.remove('active')
      about.classList.add('d-none')
      contact.classList.remove('active')
      contact.classList.add('d-none')
    }else if(e.target.hash == '#contato'){
      main.classList.remove('active')
      main.classList.add('d-none')
      about.classList.remove('active')
      about.classList.add('d-none')
      contact.classList.add('active')
      contact.classList.remove('d-none')
    }

    e.currentTarget.classList.add("link_active");
  }

  links.forEach(link =>{
    link.addEventListener('click', showAbout)
  } )
}