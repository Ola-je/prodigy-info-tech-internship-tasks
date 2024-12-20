// Select buttons
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');

// Variables to track time
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

// Event listeners for buttons
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    // Reset display
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";

    // Clear lap list
    document.getElementById('lap-list').innerHTML = '';
});

lapBtn.addEventListener('click', function () {
    recordLap();
});

// Stopwatch function
function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10);
    }
}

// Record Lap function
function recordLap() {
    if (timer) {
        let lapTime = `${hour < 10 ? "0" + hour : hour}:${
            minute < 10 ? "0" + minute : minute
        }:${second < 10 ? "0" + second : second}:${count < 10 ? "0" + count : count}`;

        // Create lap entry
        let lapList = document.getElementById('lap-list');
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}
