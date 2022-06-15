// console.log("Я туть");
// const Swiper = require("swiper");
// console.log(Swiper);

const body = document.querySelector("body");

function turnOnLightMode() { 
    body.setAttribute("style",
    "--font-color1:#535763; --font-color2:#9BA2BC; --accent-color1:#6759FF; --bg-color1:#F9F9FC; --border-color:#C3C7D9; --header-bg-color:#F9F9FC; --font-color-footer:#F9F9FC");
}

function turnOnDarkMode() { 
    body.removeAttribute("style");
}

const timeDay = setTime(6, 0, 0, 0);
const timeNight = setTime(19, 0, 0, 0);

function setTime(hour, min, sec, mlsec) { 
    const timeX = new Date();
        timeX.setHours(hour);
        timeX.setMinutes(min);
        timeX.setSeconds(sec);
        timeX.setMilliseconds(mlsec);
    return timeX;
}

const currentTime = new Date();

function modeSwitcher() {
    const currentHour = new Date();
    (currentHour >= timeDay && currentHour < timeNight) ? turnOnLightMode() : turnOnDarkMode();
}

modeSwitcher();

setTimeout(() => modeSwitcher(), timeDay - currentTime);
setTimeout(() => modeSwitcher(), timeNight - currentTime);
