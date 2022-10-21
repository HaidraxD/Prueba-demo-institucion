// NavBar 

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("down",this.window.scrollY>0);
})

// MENU DE NAVBAR EN CELULAR 
// que cierre y que habrá
const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector(".nav-open");
const closeMenuBtn = document.querySelector(".nav-close");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
};

if (openMenuBtn) {
    openMenuBtn.addEventListener("click", toggleMenu);
    closeMenuBtn.addEventListener("click", toggleMenu);
}



//---QUE SE CIERRE CUANDO HAGAS CLICK EN MOVILE---
//---Y QUE SE MUESTRE EN EL NAV BAR EN EL QUE ESTAN---

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`)

        if(entry.isIntersecting){
            document.querySelector(".nav-menu a.activate").classList.remove("activate")
            menuLink.classList.add("activate");
        }
    })
},{rootMargin: "-50% 0px -50% 0px"})

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");   
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);

    if(target){
        observer.observe(target);
    }
});




///////////////DARK MODE//////////////////

const Cbutton1 = document.querySelector(".sun");
const Cbutton2 = document.querySelector(".moon");
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const setTheme = (theme) => {
	document.documentElement.setAttribute('data-theme',theme);
	localStorage.setItem('theme', theme);
}


if (localStorage.getItem('theme') == "dark" ) {
    document.querySelector(".sun").style.display = "none";
    document.querySelector(".moon").style.display = "unset";
}else{
    document.querySelector(".moon").style.display = "none";
    document.querySelector(".sun").style.display = "unset";
}

function moonChage(){
    document.querySelector(".sun").style.display = "none";
    document.querySelector(".moon").style.display = "unset";
    setTheme("dark");
}

function sunChage(){
    document.querySelector(".moon").style.display = "none";
    document.querySelector(".sun").style.display = "unset";
    setTheme("light");
}

Cbutton1.addEventListener("click", moonChage);
Cbutton2.addEventListener("click", sunChage);

setTheme(localStorage.getItem('theme') || preferedColorScheme);




