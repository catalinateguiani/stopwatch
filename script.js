let seconds = 0;
let minutes = 0;
let milliseconds = 0;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let appendMilliseconds = document.getElementById("milliseconds");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
let interval;

function startTimer() {
  milliseconds++;

  if (milliseconds < 10) {
    appendMilliseconds.innerHTML = "0" + milliseconds;
  }

  if (milliseconds > 9) {
    appendMilliseconds.innerHTML = milliseconds;
  }

  if (milliseconds > 59) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    milliseconds = 0;
    appendMilliseconds.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
}

buttonStart.onclick = function () {
  interval = setInterval(startTimer, 1000);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  milliseconds = "00";
  seconds = "00";
  minutes = "00";
  appendMinutes.innerHTML = minutes;
  appendSeconds.innerHTML = seconds;
  appendMilliseconds.innerHTML = milliseconds;
};
