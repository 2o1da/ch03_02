const UNSPLASH_API_KEY = "0GqtHRV3V0_LVhXe_SFVQtJ5l-lJgTSKdB_g7_MEZMk";
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const body = document.querySelector("body");
const locationContainer = document.querySelector(".js-location span");
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
