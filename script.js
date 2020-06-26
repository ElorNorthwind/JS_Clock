function displayClock() {
    let timer = setInterval(clockTimer, 1000);
    clockTimer();
}


function clockTimer() {
    let node = document.getElementById('timer');
    let numbers = node.getElementsByTagName("span");
    let now = new Date();
    let time = pad(now.getHours(), 2) +
        + pad(now.getMinutes(), 2) +
        + pad(now.getSeconds(), 2);

    for (let i = 0; i < time.length; i++) {
        numbers[i].textContent = time[i];

    }

}

function pad(number, figures) {
    return ('0' + number).slice(-figures)
}

displayClock();