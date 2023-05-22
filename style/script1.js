// Saglabā to checkboxu JS mainīgājā

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

const visasAtbildes = document.getElementsByName("1");

console.log(visasAtbildes);

visasAtbildes.forEach(atbilde => {

  atbilde.addEventListener("click", checkHandler)

});

function checkHandler(){

  visasAtbildes.forEach(atbilde => {

    if (atbilde.checked == true) {

      if(atbilde.value == "indonezija"){

        atbilde.parentNode.style.backgroundColor = "green";

      }else{

        atbilde.parentNode.style.backgroundColor = "red";

      }

    }else{

      atbilde.parentNode.style.backgroundColor = "var(--secondary)"

    }

  });

}