const checkbox = document.getElementById("toggle-theme")
toggleTheme.addEventListener("change")
const html = document.getElementById("html");

function toggleThemHandler(){
if (toggleTheme.checked){
    html.dataset.theme ="dark";
}else{
html.dataset.theme ="light";  
}

}
