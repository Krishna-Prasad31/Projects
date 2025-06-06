const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum)+minNum)+1

let attempts = 0;
let guess;
let running = true;

while(running){
  guess = window.prompt("Guess a number between 1 and 100")
  guess = Number(guess);

  if(isNaN(guess)) {
    window.alert("Enter a valid number")
  }
  else if(guess < minNum || guess > maxNum) {
    window.alert("Add a number within the limit")
  }
  else{
    attempts++
    if(guess < answer) {
      window.alert("Your guess is less than the actual number")
    }
    else if (guess > answer){
      window.alert("Your guess is more than the actual number")
    }
    else{
      window.alert(`You guessed the correct number, you took ${attempts} attempts`)
      running = false;
    }
  }
}