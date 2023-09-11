document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".nav");
    
    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});
