
const global = {}
global.beginButton = document.getElementById('begin');
global.inputField = document.getElementById('input-field')
global.rock = document.getElementById('rock');
global.paper = document.getElementById('paper');
global.scissor = document.getElementById('scissor');
global.opponentChoice = document.getElementById('opponent-choice');
global.playerScore = document.getElementById('player-score');
global.opponentScore = document.getElementById('opponent-score');
global.gameBoard = document.getElementById('game-board')
global.playerLabel = document.getElementById('player-score-label');
global.opponentLabel = document.getElementById('opponent-score-label');
global.roundCountLabel = document.getElementById('round-count');
global.yesButton = document.getElementById('yes');
global.noButton = document.getElementById('no');
global.endGame = document.getElementById('end-game');
global.game = document.getElementById('game');
global.resultText = document.getElementById('result-text');
const t = "tie";
const w = "win";
const l= "lose";
global.resultMatrix = [[t,w,l],[l,t,w],[w,l,t]];
let playerScore = 0;
let opponentScore = 0;
global.roundCount = 0;
let numberOfRounds = 5;
let opponents = ["Benny the Butcher", "Gerry the Greek", "Ronny the Ruler", "Thormorthur the Viking"]

document.addEventListener('DOMContentLoaded', () => {
  
  global.beginButton.addEventListener('click', event => {
    if (global.inputField.value) {global.playerLabel.innerText = global.inputField.value};
    global.opponentLabel.innerText = opponents[Math.floor(Math.random() * 4)]
    global.gameBoard.style.display = "block";
    global.beginButton.style.display = "none";
    global.inputField.style.display = "none";
  });

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
    
    setTimeout(clearOpView, 1600);     
  }

  function clearOpView() {
    global.opponentChoice.classList = "";
    global.roundCount += 1;
    global.roundCountLabel.innerText= global.roundCount;    
    if (global.roundCount === numberOfRounds) {endGame()};
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

  function endGame() {
    let winnerText = winner();
    wait(1000);
    global.game.style.display = "none";
    global.endGame.style.display= "block";
    global.resultText.innerText = winnerText;    
    global.roundCount = 0;
    global.roundCountLabel.innerText = 0;
    opponentScore = 0;
    playerScore = 0;
    global.opponentScore.innerText = 0;
    global.playerScore.innerText = 0;
  }

  global.yesButton.addEventListener('click', () => {
    global.game.style.display = "block";
    global.endGame.style.display= "none";        
  })

  global.noButton.addEventListener('click', () => {
    global.game.style.display = "block";
    global.endGame.style.display= "none";
    global.gameBoard.style.display = "none";
    global.beginButton.style.display = "block";
    global.inputField.style.display = "block";

  })

  function winner() {
    if (playerScore > opponentScore) {
      return `${global.inputField.value} won!`
    } else if (opponentScore > playerScore) {
      return `${global.opponentLabel.innerText} won :(.` 
    } else {
      return "The game ended in a tie."
    }
  }

  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

});