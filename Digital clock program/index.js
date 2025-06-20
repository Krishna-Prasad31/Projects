function updateClock() {
  const now = new Date;
  const hour = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('display').textContent = `${hour}:${minutes}:${seconds}`
}

updateClock()

setInterval(updateClock, 1000);