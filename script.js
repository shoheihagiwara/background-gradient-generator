var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var cssText = document.getElementById("cssText");
var body = document.getElementById("body");

function getRandomHex() {
    var min = 0;
    var max = 255;

    var val = Math.random() * (max - min) + min;

    // zero padding.
    return ("0" + val.toString(16)).slice(-2);
}

var defaultColor1 = "#" + getRandomHex() + getRandomHex() + getRandomHex();
var defaultColor2 = "#" + getRandomHex() + getRandomHex() + getRandomHex();

color1.value = defaultColor1;
color2.value = defaultColor2;


function changeGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value +")";
    cssText.textContent = body.style.background + ";"
};
changeGradient(); // default gradient.

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);