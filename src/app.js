
const global = {}
global.beginButton = document.getElementById('begin');
global.rock = document.getElementById('rock');
global.paper = document.getElementById('paper');
global.scissor = document.getElementById('scissor');
global.opponentChoice = document.getElementById('opponent-choice');
global.playerScore = document.getElementById('player-score');
global.opponentScore = document.getElementById('opponent-score');
const t = "tie"
const w = "win"
const l= "lose"
global.resultMatrix = [[t,w,l],[l,t,w],[w,l,t]]
let playerScore = 0
let opponentScore = 0

document.addEventListener('DOMContentLoaded', () => {

  global.rock.addEventListener('click', event => {
    let opponentChoice = getOpponentChoice();
    result = getResult(0, opponentChoice);      
  });

  global.paper.addEventListener('click', event => {
    let opponentChoice = getOpponentChoice();
    result = getResult(1, opponentChoice);     
  });

  global.scissor.addEventListener('click', event => {
    let opponentChoice = getOpponentChoice();
    result = getResult(2, opponentChoice);     
  });

  function getResult(playerChoice, opponentChoice) {
    let result = global.resultMatrix[opponentChoice][playerChoice];
    if (result === "win") {
      playerScore += 1;
      global.playerScore.innerText = playerScore;
    } else if (result === "lose") {
      opponentScore += 1;
      global.opponentScore.innerText = opponentScore;
    }
    setTimeout(clearOpView, 1000); 
  }

  function clearOpView() {
    global.opponentChoice.classList = "";
  }

  function getOpponentChoice() {
    let choice = Math.floor(Math.random() * 3);
    global.opponentChoice.innerHtml = ""
    global.opponentChoice.classList.add('far');
    if (choice === 0) {      
      global.opponentChoice.classList.add('fa-hand-rock');
    } else if (choice === 1) {      
      global.opponentChoice.classList.add('fa-hand-paper');
    } else {
      global.opponentChoice.classList.add('fa-hand-scissors');
    }
    return choice;
  }

});