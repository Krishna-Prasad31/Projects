const input = document.getElementById("inputDisplay");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("resultDisplay");
let temp;

function convert() {
  if(toFahrenheit.checked){
    temp = Number(input.value)
    temp = (temp * 9/5) + 32;
    result.textContent = `${temp}°F`
  }

  if(toCelsius.checked) {
    temp = Number(input.value)
    temp = (temp - 32) * 5/9;
    result.textContent = `${temp.toFixed(2)}°C`
  }
}

