const clockContainer = document.querySelector(".js-clock"); // class
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds > 9 ? `${seconds}` : `0${seconds}`
    }`;
}

function init() {
    getTime();
    setInterval(getTime, 1000); // 1000 milisecond
}

init();
