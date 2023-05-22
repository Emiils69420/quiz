const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}
const igaunija = document.getElementById("igaunija");
igaunija.addEventListener("click", checkhandler);

const uk = document.getElementById("uk"); 
uk.addEventListener("click", checkhandler);

const liepaja = document.getElementById("liepaja"); 
liepaja.addEventListener("click", checkhandler);

const indonezija = document.getElementById("indonezija"); 
indonezija.addEventListener("click", checkhandler);

function checkhandler() {
  if(igaunija.checked == true) {
igaunija.parentNode.style.backgroundcolor = "red";

  }else{
igaunija.parentNode.style.backgroundcolor = "var(--secondary-color)";

  }
}