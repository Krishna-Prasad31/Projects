const moves = ["Rock", "Paper", "Scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const PlayerScoredisplay = document.getElementById("PlayerScoredisplaly")
const  computerScoredisplay = document.getElementById("computerScoredisplaly")
let playerScore = 0
let computerScore = 0

function playGame(playerMove) {
  const computerMove = moves[Math.floor(Math.random()*3)]
  let result = ""

  if(playerMove === computerMove) {
    result = "Its a TIE"
  }
  else {
    switch(playerMove){
      case "Rock":
        result = (computerMove === "Scissors") ? "You Win 🏆" : "You Lose 😞"
        break

      case "Paper":
        result = (computerMove === "Rock") ? "You Win 🏆" : "You Lose 😞"
        break;

      case "Scissors":
        result = (computerMove === "Paper") ? "You Win 🏆" : "You Lose 😞"
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerMove}`
  computerDisplay.textContent = `Computer: ${computerMove}`
  resultDisplay.textContent = `${result}`

  switch(result) {
    case "You Win 🏆" :
      resultDisplay.classList.add("greenText")
      playerScore++
      PlayerScoredisplay.textContent = playerScore
      break;

    case "You Lose 😞" :
      resultDisplay.classList.add("redText")
      computerScore++
      computerScoredisplay.textContent = computerScore
      break;

    case "Its a TIE":
      resultDisplay.classList.remove("redText", "greenText")
  }
}