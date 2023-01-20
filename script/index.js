const navToggle = document.querySelector(".toggle") ;
const navMenu = document.querySelector(".nav-menu") ;
const header = document.querySelector(".header")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
    header.style.position = "fixed";

    
    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("arial-label", "cerrar menú")
    }
    else{
        navToggle.setAttribute("arial-label", "abrir menú")
    }
});
