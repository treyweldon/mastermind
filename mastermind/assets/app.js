const colorLookup = [
    "red", "blue", "yellow", 
    "green", "orange", "purple"
]

let solutionArr = ["red", "blue", "yellow", "green"];

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
}
  
const feedbackBoard = [];
for (let i = 0; i < 10; i++) {
  feedbackBoard.push([...document.querySelectorAll(`#feedback-${i} > div`)]);
}


let gameArr = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
]

let feedbackArr = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
]

let resultsRemaining = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

resetBtn.addEventListener("click", resetGame);
checkGuessBtn.addEventListener("click", checkGuess);

colorRed.addEventListener("click", addColor)
colorBlue.addEventListener("click", addColor)
colorYellow.addEventListener("click", addColor)
colorGreen.addEventListener("click", addColor)
colorOrange.addEventListener("click", addColor)
colorPurple.addEventListener("click", addColor)


function resetGame(){
    location.reload();
};

function addColor(e) {
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
  
function checkGuess(){
    let isMatch = true;
        gameArr[guessNum].forEach(function(item, index) {
    if (solutionArr[index] !== item) {
    isMatch = false;
  }
});
    if (isMatch) {
  gameArr[guessNum].forEach(function(item, index) {
    solutionEl[index].style.background = solutionArr[index];
  });
  messageEl.textContent = `Congrats! You won in ${guessNum + 1} attempts!`;
}
    else {
        checkBlack();
        console.log(resultsRemaining[guessNum])
        console.log(feedbackArr[guessNum])
        checkWhite();
        addFeedback();
        guessNum++;
        ansNum = 0;
        attemptsRemaining();
    }
};

function checkBlack(){
    gameBoard[guessNum].forEach(function(ans, index){
        if (ans.style.background === solutionArr[index]) {
            feedbackArr[guessNum].unshift("black");
            feedbackArr[guessNum].pop();
            resultsRemaining[guessNum].push(null)
        }
        if (ans.style.background !== solutionArr[index]) {
            resultsRemaining[guessNum].push(ans.style.background);
        }
    })
}

function checkWhite(){
    resultsRemaining[guessNum].forEach(function(ans, index){
        if (gameArr[guessNum] = resultsRemaining[!index]){
            feedbackArr[guessNum].unshift("white");
            feedbackArr[guessNum].pop();
        }
    })
};

function addFeedback() {
    feedbackArr[guessNum].forEach(function(feedbackColor, index) {
        feedbackBoard[guessNum][index].style.background = feedbackColor;
    });
}

function renderSolution() {
    let randArr = Array.from({length: 4}, function() {
        return Math.floor(Math.random() * 6);
      });
      let randSolution = [];
      randArr.forEach(function(randIndex) {
          randSolution.push(colorLookup[randIndex]);
      });
        solutionArr = randSolution;
    return solutionArr;
 }

 function attemptsRemaining(){
    let attemptsLeft = 10 - guessNum;
    messageEl.textContent = `${attemptsLeft} Attempts remaining`;
 }