import toggleTheme from "./modules/togleTheme.js";
import navToSection from "./modules/navToSection.js";
import showSection from "./modules/showSection.js";
import { loadTasksFromStorage } from "./modules/to-do-list.js";
import { modalJS } from "./modules/modal.js";

toggleTheme();
navToSection();
showSection();
loadTasksFromStorage()
modalJS();

