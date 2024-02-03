const colorLookup = {
    '0': 'white',
    '1': 'red',
    '2': 'blue',
    '3': 'yellow',
    '4': 'orange',
    '5': 'green',
    '6': 'purple'
};

const gameBoard = [
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

const feedbackBoard = [
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

const solutionArr = [];


const guessCol = document.querySelector('#guess-wrapper');
const guessEls = document.getElementsByClassName('guess');
const guessCells = document.getElementsByClassName('guess-cell')
const feedbackCol = document.querySelector('#feedback-wrapper');
const feedbackEl = document.getElementsByClassName('feedback')
const feedbackCells = document.getElementsByClassName('feedback-cell');
const solutionEl = document.querySelector('#solution')
const solutionCells = [...solutionEl.children]
const checkGuessBtn = document.getElementById('#check');
const resetBtn = document.getElementById('#reset');
const messageEl = document.querySelector('h2');


let turn;
let winner;


guessCol.addEventListener("click", function(e) {
    console.dir(e.target);
    if (e.target.className !== 'guess-cell') return;
});

function addGuess(guessNum){

};

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

// resetBtn.addEventListener("click", newGame);
// checkGuessBtn.addEventListener("click", checkWin);



// function addColor(guessCells, idx) {

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


// function makeGuess() {};


// function renderGuess(guessNum) {
//     const guessRow = gameBoard[guessNum]
// };


// function renderMessage() {};


// function addFeedback() {};


// function renderSolution() {
//     const solutionArr =  Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1)
//  }