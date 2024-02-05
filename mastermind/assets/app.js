const colorLookup = {
    '0': 'white',
    '1': 'red',
    '2': 'blue',
    '3': 'yellow',
    '4': 'orange',
    '5': 'green',
    '6': 'purple'
};


const solutionArr = [];

let winner;
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


const gameBoard = [
    guess0,
    guess1,
    guess2,
    guess3,
    guess4,
    guess5,
    guess6,
    guess7,
    guess8,
    guess9
  ];
  
  const feedbackBoard = [
     feedback0,
     feedback1,
     feedback2,
     feedback3,
     feedback4,
     feedback5,
     feedback6,
     feedback7,
     feedback8,
     feedback9
  ];
  


resetBtn.addEventListener("click", function(e){
    console.dir(e.target);
});

checkGuessBtn.addEventListener("click", function(e){
    console.dir(e.target);
});

colorRed.addEventListener("click", runGame)
colorBlue.addEventListener("click", runGame)
colorYellow.addEventListener("click", runGame)
colorGreen.addEventListener("click", runGame)
colorOrange.addEventListener("click", runGame)
colorPurple.addEventListener("click", runGame)



function runGame(e) {
    if (e.target.className === 'colors') {
      gameBoard[guessNum][ansNum].style.background =
        e.target.style.background;
      ansNum++;
      const guess = gameBoard[guessNum]
      console.log(ansNum)
    }
    if (ansNum === 4) {
        ansNum = 0;
        guessNum++;
        console.log("..." + guessNum)
  }
};  
  

function render(){
    guessCells.forEach(function(guess, guessNum){
        const rowArr = [...guess.children];
        rowArr.forEach(function (guessCell, ansNum){
            const color = gameBoard[ansNum][guessNum] === e.target.backgroundColor
        })
})
}

// function render() {
//     renderGuess();
//     renderFeedback();
//     renderSolution();
//     renderMessage();
// };

// initialize();

// function initialize(){
//     turn = 1;
//     winner = null;
//     renderSolution();
// }






// function newGame(){};

// function checkWin([]) {
//     if (checkWin === solution){
//         return winner;}
//     else {
//         addFeedback();

//     };
// };


// function addColor(evt) {
//     console.dir(evt.target);
//     if (evt.target.className !== "guess-cell") return;

//     else (let countClicks = 0) {
//         guessCells.forEach(function(idx));
//         countClicks++;
//         guessCells.style.backgroundColor = colorLookup[idx];
//     }

// };

function renderSolution() {
    const newSolution =  Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1);
    solutionArr = newSolution;
    return solutionArr;
 }

