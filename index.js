// console.log("Я туть");
// const Swiper = require("swiper");
// console.log(Swiper);

const body = document.querySelector("body");

const currentTime = new Date();
const currentHour = currentTime.getHours();


function turnOnLightMode() { 
    body.setAttribute("style",
        "--font-color1:#535763; --font-color2:#9BA2BC; --accent-color1:#6759FF; --bg-color1:#F9F9FC; --border-color:#C3C7D9; --header-bg-color:#F9F9FC; --font-color-footer:#F9F9FC");
}

function turnOnDarkMode() { 
    body.removeAttribute("style");
}

function modeSwitcher() {
    (currentHour > 6 && currentHour <= 19) ? turnOnLightMode() : turnOnDarkMode();
}

modeSwitcher();