const colorLookup = [
    "red", "blue", "yellow", 
    "green", "orange", "purple"
]

let solutionArr = [];
let solutionArrEl = [];

renderSolution();
console.log(solutionArr)

let ansNum = 0;
let guessNum = 0;

const colorRed = document.querySelector('#red');
const colorBlue = document.querySelector('#blue');
const colorYellow = document.querySelector('#yellow');
const colorGreen = document.querySelector('#green');
const colorOrange = document.querySelector('#orange');
const colorPurple = document.querySelector('#purple');

const checkGuessBtn = document.querySelector('#check');
const resetBtn = document.querySelector('#reset');
const messageEl = document.querySelector('h2');

const [...solutionEl] = document.querySelectorAll("#solution > div")

const gameBoard = [];
    for (let i = 0; i < 10; i++) {
    gameBoard.push([...document.querySelectorAll(`#guess-${i} > div`)]);
};
  
const feedbackBoard = [];
    for (let i = 0; i < 10; i++) {
    feedbackBoard.push([...document.querySelectorAll(`#feedback-${i} > div`)]);
};

let gameArr = Array.from({ length: 10 }, function() {
    return [];
});

let feedbackArr = Array.from({ length: 10 }, function() {
    return [];
});

let resultsRemaining = Array.from({ length: 10 }, function() {
    return [];
});

let solutionBoard = createNestedArray();

resetBtn.addEventListener("click", resetGame);
checkGuessBtn.addEventListener("click", checkGuess);

colorRed.addEventListener("click", addGuess)
colorBlue.addEventListener("click", addGuess)
colorYellow.addEventListener("click", addGuess)
colorGreen.addEventListener("click", addGuess)
colorOrange.addEventListener("click", addGuess)
colorPurple.addEventListener("click", addGuess)

function resetGame(){
    location.reload();
};

function addGuess(e) {
    if (e.target.className === 'colors') {
      gameBoard[guessNum][ansNum].style.background =
        e.target.id;
      gameArr[guessNum][ansNum] = e.target.id;
      ansNum++;
    }
    if (ansNum === 4) {
        ansNum = 0;
        return
  } 
};  
  
function checkGuess() {
    if (gameArr[guessNum].length !== 4) {
      messageEl.textContent = "Guess must be four colors";
      return;
    }
    let isMatch = true;
    gameArr[guessNum].forEach(function(ans, index) {
      if (solutionArr[index] !== ans) {
        isMatch = false;
      }
    });
    if (isMatch) {
      gameArr[guessNum].forEach(function(ans, index) {
        solutionEl[index].style.background = solutionArr[index];
      });
      messageEl.textContent = `Congrats! You won in ${guessNum + 1} attempts!`;
    } 
    else {
      checkBlack();
      checkWhite();
      addFeedback();
      guessNum++;
      ansNum = 0;
      attemptsRemaining();
    }
};

function checkBlack() {
    gameBoard[guessNum].forEach(function(ans, index){
        if (ans.style.background === solutionArr[index]) {
            feedbackArr[guessNum].push("black");
            resultsRemaining[guessNum].push(null);
            delete solutionBoard[guessNum][index];
        }
        if (ans.style.background !== solutionArr[index]) {
            resultsRemaining[guessNum].push(ans.style.background);
        }
    })
};

function checkWhite(){
    resultsRemaining[guessNum].forEach(function(ans, index) {
        if (solutionBoard[guessNum].includes(ans)) {
            delete solutionBoard[guessNum][index];
            feedbackArr[guessNum].push("white");
        }
    });
    
}

function addFeedback() {
    feedbackArr[guessNum].forEach(function(feedbackColor, index) {
        feedbackBoard[guessNum][index].style.background = feedbackColor;
    });
};

function renderSolution() {
    let randArr = Array.from({length: 4}, function() {
        return Math.floor(Math.random() * 6);
      });
      let randSolution = [];
      randArr.forEach(function(index) {
          randSolution.push(colorLookup[index]);
      });
    solutionArr = randSolution;
    solutionArrEl = solutionArr;
    return solutionArr, solutionArrEl;
};

 function attemptsRemaining(){
    if (guessNum < 10){
        let attemptsLeft = 10 - guessNum;
        messageEl.textContent = `${attemptsLeft} Attempts remaining`;
    }
    if (guessNum === 10){
        messageEl.textContent = `Better luck next time!`;
        solutionArr.forEach(function(color, index) {
            solutionEl[index].style.background = color;
        });
    }
};

function createNestedArray() {
    let nestedArray = []; 
    for (let i = 0; i < 10; i++) {
        nestedArray.push(solutionArrEl.slice());
    }
    return nestedArray;
}