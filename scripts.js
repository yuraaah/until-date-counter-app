const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const defaultDate = "1 Jan 2023";

// -----------------
document.getElementById('onClickDate').onclick = function dateInput() {
    var customDateMl = document.getElementById("dateInputFrm").value;
    var customDate = new Date(customDateMl).toDateString();
    
    const year = customDate.substring(11,17);
    const day = customDate.substring(8,10).replaceAll('0', '');
    const month = customDate.substring(4,7);

    // const customDatePass = (day + ' ' + month + ' ' + year);

    console.log(day, month, year);
    return(day, year, month);
}  

// Sun Jan 01 2023

// countdownd
function countdown(day, year, month) {

    const selectedDate = new Date(defaultDate);
    console.log(selectedDate)
    const currentDate = new Date();
    console.log(currentDate)

    const totalSeconds = (selectedDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call

setInterval(countdown, 1000);




