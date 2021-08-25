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

function startTimer(i) {
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
// let i = 0;
// setInterval(function () {
//   let nextPost = document.querySelector(".coreSpriteRightPaginationArrow");
//   nextPost.click();
// i++;
//   console.log(`Browsed ${i} Posts`);
//   console.log(i);
// }, 4000);

let seconds1 = 0;
let minutes1 = 0;
let milliseconds1 = 0;
let appendMinutes1 = document.getElementById("minutes1");
let appendSeconds1 = document.getElementById("seconds1");
let appendMilliseconds1 = document.getElementById("milliseconds1");
let buttonStart1 = document.getElementById("start1");
let buttonStop1 = document.getElementById("stop1");
let buttonReset1 = document.getElementById("reset1");
let interval1;

function startTimer1() {
  milliseconds1++;

  if (milliseconds1 < 10) {
    appendMilliseconds1.innerHTML = "0" + milliseconds1;
  }

  if (milliseconds1 > 9) {
    appendMilliseconds1.innerHTML = milliseconds1;
  }

  if (milliseconds1 > 59) {
    seconds1++;
    appendSeconds1.innerHTML = "0" + seconds1;
    milliseconds1 = 0;
    appendMilliseconds1.innerHTML = "0" + 0;
  }

  if (seconds1 > 9) {
    appendSeconds1.innerHTML = seconds1;
  }

  if (seconds1 > 59) {
    minutes1++;
    appendMinutes1.innerHTML = "0" + minutes1;
    seconds1 = 0;
    appendSeconds1.innerHTML = "0" + 0;
  }

  if (minutes1 > 9) {
    appendMinutes1.innerHTML = minutes1;
  }
}

buttonStart1.onclick = function () {
  interval1 = setInterval(startTimer1, 1000);
};

buttonStop1.onclick = function () {
  clearInterval(interval1);
};

buttonReset1.onclick = function () {
  clearInterval(interval1);
  milliseconds1 = "00";
  seconds1 = "00";
  minutes1 = "00";
  appendMinutes1.innerHTML = minutes1;
  appendSeconds1.innerHTML = seconds1;
  appendMilliseconds1.innerHTML = milliseconds1;
};
