var header = document.getElementById("header")
window.addEventListener("scroll",scrly)
function scrly(){
    let offset = window.scrollY;
    if((offset>=100))
    header.style.background = "#E53935";
    else
    header.style.background = "transparent";
}