const navToggle = document.querySelector(".toggle") ;
const navMenu = document.querySelector(".nav-menu") ;

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("arial-label", "cerrar menú")
    }
    else{
        navToggle.setAttribute("arial-label", "abrir menú")
    }
});
