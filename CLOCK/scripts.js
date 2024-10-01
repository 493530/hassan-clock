function updateClock() {
  const clockElement = document.getElementById("digital-clock");
  const currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let period = "AM";

  // Convert 24-hour time to 12-hour format and set AM/PM
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }

  // Add leading zero to minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update the clock display
  const timeString = `${hours}:${minutes}:${seconds} ${period}`;
  clockElement.innerText = timeString;
}

// Run clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
