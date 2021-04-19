const clockContainer = document.querySelector(".js-clock"); // class
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    var xmlHttp;
    function srvTime() {
        try {
            //FF, Opera, Safari, Chrome
            xmlHttp = new XMLHttpRequest();
        } catch (err1) {
            //IE
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (err2) {
                try {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (eerr3) {
                    //AJAX not supported, use CPU time.
                    alert("AJAX not supported");
                }
            }
        }
        xmlHttp.open("HEAD", window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send("");
        return xmlHttp.getResponseHeader("Date");
    }

    var st = srvTime();
    var date2 = new Date(st);

    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds > 9 ? `${seconds}` : `0${seconds}`
    } ${date2}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000); // 1000 milisecond
}

init();
