const colorLookup = [
    "red", "blue", "yellow", 
    "green", "orange", "purple"
]

let solutionArr = [];

renderSolution();
console.log(solutionArr)

let solutionBoard = [
    solutionArr,
    solutionArr,
    solutionArr,
    solutionArr,
    solutionArr,
    solutionArr,
    solutionArr,
    solutionArr,
    solutionArr,
    solutionArr
]

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
];

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
    []
];

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
    //   console.log(resultsRemaining[guessNum])
    //   console.log(solutionBoard[guessNum])
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
            feedbackArr[guessNum].unshift("black");
            feedbackArr[guessNum].pop();
            delete solutionBoard[guessNum][index]
            // console.log(solutionBoard[guessNum])
        }
        if (ans.style.background !== solutionArr[index]) {
            resultsRemaining[guessNum].push(ans.style.background);
        }
    })
};

function checkWhite(){
    resultsRemaining[guessNum].forEach(function(ans) {
        if (solutionBoard[guessNum].includes(ans)) {
            feedbackArr[guessNum].unshift("white");
            feedbackArr[guessNum].pop();
        }
    });
    
}

// function checkWhite(){
//     resultsRemaining[guessNum].forEach(function(ans) {
//         if (solutionArr.includes(ans)) {
//             feedbackArr[guessNum].unshift("white");
//             feedbackArr[guessNum].pop();
//         }
//     });
    
// }

// function checkWhite() {
//     gameBoard[guessNum].forEach(function(ans, index){
//         if (ans.style.background === solutionArr[index]) {
//             return;
//         }
//         if (ans.style.background !== solutionArr[index]) {
//             resultsRemaining[guessNum].forEach(function(ans) {
//                 if (solutionArr.includes(ans)) {
//                     feedbackArr[guessNum].unshift("white");
//                     feedbackArr[guessNum].pop();
//                 }
//             });
            
//         }
//     })
// };


// function checkWhite() {
//     gameBoard[guessNum].forEach(function(ans, index){
//         if (ans.style.background === solutionArr[index]) {
//             // solutionBoard[guessNum][index].filter(ans)
//             console.log(solutionBoard[guessNum])
//         }
//         else (resultsRemaining[guessNum][index] === solutionBoard[guessNum][index])
//             feedbackArr[guessNum].unshift("white");
//             feedbackArr[guessNum].pop();
//     })
// };

// function checkWhite() {
//     resultsRemaining[guessNum].forEach(function(ans1) {
//         if (resultsRemaining[guessNum].includes(function(ans1){
//             resultsRemaining[guessNum] === solutionArr
//         }))
//         feedbackArr[guessNum].unshift("black");
//         feedbackArr[guessNum].pop();
//     })
// }

// function checkWhite() {
//     if (resultsRemaining.includes(function(ans1){
//         resultsRemaining === solutionArr
//     })) 
//     feedbackArr[guessNum].unshift("black");
//     feedbackArr[guessNum].pop();
// };

// function checkWhite(){
//     resultsRemaining[guessNum].forEach(function(ans, index){
//         if (gameArr[guessNum] = resultsRemaining[!index]){
//             feedbackArr[guessNum].unshift("white");
//             feedbackArr[guessNum].pop();
//         }
//     })
// };

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
    return solutionArr;
};

 function attemptsRemaining(){
    let attemptsLeft = 10 - guessNum;
    messageEl.textContent = `${attemptsLeft} Attempts remaining`;
};