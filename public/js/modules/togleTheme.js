//trocar tema
export default function toggleTheme(){
const themeSwitch = document.querySelector("#checkbox");

// verifica se já há uma preferência salva no localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeSwitch.checked = true;
}

function switchTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  // salva a preferência no localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

themeSwitch.addEventListener("change", switchTheme);

function loadThemeFromStorage() {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
}
// Carrega a preferência e tarefas do usuário ao carregar a página
loadThemeFromStorage();
}
