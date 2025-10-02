const temp = 28; // °C
const speed = 10; // km/h

function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

const chillElement = document.getElementById("chill");
if (temp <= 10 && speed > 4.8) {
  chillElement.textContent = calculateWindChill(temp, speed) + " °C";
} else {
  chillElement.textContent = "N/A";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
