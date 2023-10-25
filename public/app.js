const whatsappButton = document.querySelector('#whatsapp')
const header = document.querySelector('#header')

window.addEventListener("scroll", () => {
    if(window.scrollY > 720){
        whatsappButton.classList.remove("hidden");
        header.classList.add("scroll-bg")
    } else {
        whatsappButton.classList.add("hidden")
        header.classList.remove("scroll-bg")

    }
})

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll("#menu a")
let isActive = false;

btnMenu.addEventListener("click", (e) => {
    e.preventDefault();

    if (!isActive) {
        menu.classList.add("flex", "justify-center")
        menu.classList.remove("hidden");
        isActive = true;
        btnMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        menu.classList.remove("flex", "justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }

})
menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        menu.classList.remove("flex", "justify-center")
        menu.classList.add("hidden");
        isActive = false;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})