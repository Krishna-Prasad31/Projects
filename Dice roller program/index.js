function rollDice() {

const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceimages = document.getElementById("diceImages");
const values = [];
const images = [];

for(let i = 0; i< numOfDice; i++) {
  const value = Math.floor(Math.random() * 6) + 1;
  values.push(value);
  images.push(`<img src="dice images/${value}.svg">`)
  console.log(value)
}
diceResult.textContent = `Dice: ${values.join(', ')}`;
diceimages.innerHTML = images.join(' ')

}