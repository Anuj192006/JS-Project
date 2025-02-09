let clockDisplay = document.getElementById("clock");
let stopwatchButton = document.getElementById("stopwatch");

let isClockRunning = true;
let intervalId = null;

let hours = 0;
let min = 0;
let sec = 0;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  clockDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function stopwatch() {
  sec++;
  if (sec >= 60) {
    min++;
    sec = 0;
  }
  if (min >= 60) {
    hours++;
    min = 0;
  }
  if (hours >= 24) {
    hours = 0;
  }
  let formattedSec = sec.toString().padStart(2, "0");
  let formattedMin = min.toString().padStart(2, "0");
  let formattedHour = hours.toString().padStart(2, "0");
  clockDisplay.textContent = `${formattedHour}:${formattedMin}:${formattedSec}`;
}

intervalId= setInterval(updateClock, 1000);

stopwatchButton.addEventListener("click", () => {
  if (isClockRunning) {
    clearInterval(intervalId);
    intervalId = setInterval(stopwatch, 1000);
    stopwatchButton.textContent = "Back to Clock";
    isClockRunning=false;
  } else {
    clearInterval(intervalId);
    intervalId = setInterval(updateClock, 1000);
    stopwatchButton.textContent = "Stopwatch";
    isClockRunning = true;
    hours = 0;
    min = 0;
    sec = 0;
  }
});
