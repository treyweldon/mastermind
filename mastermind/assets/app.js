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

const [...guessCells] = document.querySelectorAll(".guess > div");

const [...guess0] = document.querySelectorAll("#guess-0 > div");
const [...guess1] = document.querySelectorAll("#guess-1 > div");
const [...guess2] = document.querySelectorAll("#guess-2 > div");
const [...guess3] = document.querySelectorAll("#guess-3 > div");
const [...guess4] = document.querySelectorAll("#guess-4 > div");
const [...guess5] = document.querySelectorAll("#guess-5 > div");
const [...guess6] = document.querySelectorAll("#guess-6 > div");
const [...guess7] = document.querySelectorAll("#guess-7 > div");
const [...guess8] = document.querySelectorAll("#guess-8 > div");
const [...guess9] = document.querySelectorAll("#guess-9 > div");

const [...feedback0] = document.querySelectorAll("#feedback-0 > div");
const [...feedback1] = document.querySelectorAll("#feedback-1 > div");
const [...feedback2] = document.querySelectorAll("#feedback-2 > div");
const [...feedback3] = document.querySelectorAll("#feedback-3 > div");
const [...feedback4] = document.querySelectorAll("#feedback-4 > div");
const [...feedback5] = document.querySelectorAll("#feedback-5 > div");
const [...feedback6] = document.querySelectorAll("#feedback-6 > div");
const [...feedback7] = document.querySelectorAll("#feedback-7 > div");
const [...feedback8] = document.querySelectorAll("#feedback-8 > div");
const [...feedback9] = document.querySelectorAll("#feedback-9 > div");

const [...solutionEl] = document.querySelectorAll("#solution > div")

const gameBoard = [
    guess0, guess1, guess2, guess3, guess4,
    guess5, guess6, guess7, guess8, guess9
  ];

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
  
const feedbackBoard = [
    feedback0, feedback1, feedback2, feedback3, feedback4,
    feedback5, feedback6, feedback7, feedback8, feedback9
];

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
      randSolution = [
        colorLookup[randArr[0]],
        colorLookup[randArr[1]],
        colorLookup[randArr[2]],
        colorLookup[randArr[3]]
      ];
        solutionArr = randSolution;
        console.log(solutionArr);
    return solutionArr;
 }

 function attemptsRemaining(){
    let attemptsLeft = 10 - guessNum;
    messageEl.textContent = `${attemptsLeft} Attempts remaining`;
 }