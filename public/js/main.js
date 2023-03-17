import toggleTheme from "./modules/togleTheme.js";
import showSection from "./modules/showSection.js";
import { loadTasksFromStorage } from "./modules/to-do-list.js";
import { modal2, modalJS } from "./modules/modal.js";
import { checkAll } from "./modules/checkAll.js";
import { menuMobile } from "./modules/menuMobile.js";

toggleTheme();
menuMobile();
showSection();
loadTasksFromStorage();
checkAll();
modalJS();
modal2();


