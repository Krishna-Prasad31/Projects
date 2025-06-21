const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTIme = 0;
let isRunning = false;

function start () {
  if(!isRunning) {
    startTime = Date.now() - elapsedTIme;
    timer = setInterval(update, 10)
    isRunning = true;
  }
}
 
function stop () {
  if(isRunning) {
    clearInterval(timer)
    elapsedTIme = Date.now() - startTime;
    isRunning = false;
  }
}

function reset () {
  clearInterval(timer)
  startTime = 0;
  elapsedTIme = 0;
  isRunning = false;
  display.textContent = "00 : 00 : 00 : 00"
}

function update () {
  const currentTime = Date.now()
  elapsedTIme = currentTime - startTime;

  let hours = Math.floor(elapsedTIme /(1000 * 60 * 60))
  let minutes = Math.floor(elapsedTIme /(1000 * 60 ) % 60)
  let seconds = Math.floor(elapsedTIme / 1000 % 60)
  let milliseconds = Math.floor((elapsedTIme % 1000) / 10)

 hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  milliseconds = String(milliseconds).padStart(2, '0');

  display.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`
}