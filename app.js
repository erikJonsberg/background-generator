let css = document.querySelector("h3");
let angle = document.querySelector(".angle");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let position1 = document.querySelector(".position1");
let position2 = document.querySelector(".position2");
let randBtn = document.querySelector(".randBtn");
angle.value = 0;
color1.value = "#ff0000";
color2.value = "#ffff00";
position1.value = 0;
position2.value = 100;
css.textContent = "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 100%)";

function setGradient() {
    body.style.background =
        `linear-gradient(${angle.value}deg, 
        ${color1.value} ${position1.value}%, 
        ${color2.value} ${position2.value}%)`;

    css.textContent = body.style.background;
}

function createRandomColor() {
    let randColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randColor;
}

function createRandomPercent() {
    let randPercent = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    return randPercent;
}

function createRandomAngle() {
    let randAngle = Math.floor(Math.random() * (360 - 0 + 1) + 0)
    return randAngle
}

randBtn.addEventListener("click", () => {
    body.style.background = `linear-gradient(${angle.value = createRandomAngle()}deg, 
        ${color1.value = createRandomColor()} ${position1.value = createRandomPercent()}%, 
        ${color2.value = createRandomColor()} ${position2.value = createRandomPercent()}%)`;
});
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
angle.addEventListener("keyup", setGradient);
position1.addEventListener("keyup", setGradient);
position2.addEventListener("keyup", setGradient);