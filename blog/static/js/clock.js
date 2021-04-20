const clockContainer = document.querySelector(".js-clock"); // class
const clockTitle = clockContainer.querySelector("h1");

const clock = document.querySelector(".js-clock .clock__text");

function getTime() {
    const now = new Date();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const seconds = now.getSeconds();

    clock.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds > 9 ? `${seconds}` : `0${seconds}`
    }`;

    return;
}

function init() {
    getTime();
    setInterval(getTime, 1000); // 1000 milisecond
    return;
}

init();
