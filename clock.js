const clockContainer = document.querySelector(".js-clock");
const clockText = clockContainer.querySelector("h1");

function handleClock(){
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    let seconds = today.getSeconds();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    clockText.innerHTML = `${hours}:${minutes}:${seconds}`
    console.log(seconds);
}

function init(){
    setInterval(handleClock, 1000);
}

init();