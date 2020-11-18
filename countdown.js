const countdownContainer = document.querySelector(".js-countdown");
const daysText = countdownContainer.querySelector("#js-days");
const hoursText = countdownContainer.querySelector("#js-hours");
const minutesText = countdownContainer.querySelector("#js-minutes");
const secondsText = countdownContainer.querySelector("#js-seconds");

function copyCurrentLinkToClipboard(){
    const dummy = document.createElement('input'),
    link = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = link;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    alert("copied to clipboard!");
}

function paintCountdown(days, hours, mins, seconds){
    daysText.innerHTML = `${days<10? `0${days}` : days}`;
    hoursText.innerHTML = `${hours<10? `0${hours}` : hours}`;
    minutesText.innerHTML = `${mins<10? `0${mins}` : mins}`;
    secondsText.innerHTML = `${seconds<10? `0${seconds}` : seconds}`;
}

const THE_DATE = "Dec 7, 2020 00:30:00";
const theDate = new Date(THE_DATE).getTime();
let remainder = 0;
function getCountdown(){
    const now = Date.now();
    const milliseconds = theDate - now;
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    remainder = milliseconds % (1000 * 60 * 60 * 24);
    const hours = Math.floor(remainder / (1000 * 60 * 60));
    remainder = remainder % (1000 * 60 * 60);
    const mins = Math.floor(remainder / (1000 * 60));
    remainder = remainder % (1000 * 60);
    const seconds = Math.floor(remainder / 1000);

    paintCountdown(days, hours, mins, seconds);

    if (milliseconds <= 0){
        clearInterval(interval);
        countdownText.innerHTML = `IT IS TIME`;
    }
}

let interval;
function init(){
    interval = setInterval(getCountdown, 1000);
}

init();