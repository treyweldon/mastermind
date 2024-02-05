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
const guessEls = document.getElementsByClassName('.guess');
const guessCells = document.getElementsByClassName('.guess-cell')
const colorGrid = document.getElementById('#color-bank');
const colorBox = document.getElementsByClassName('.colors')
const feedbackCol = document.querySelector('#feedback-wrapper');
const feedbackEl = document.getElementsByClassName('.feedback')
const feedbackCells = document.getElementsByClassName('.feedback-cell');
const solutionEl = document.querySelector('#solution')
const solutionCells = [...solutionEl.children]
const checkGuessBtn = document.querySelector('#check');
const resetBtn = document.querySelector('#reset');
const messageEl = document.querySelector('h2');


let winner;


guessCol.addEventListener("click", function(e) {
    console.dir(e.target);
    if (e.target.className !== 'guess-cell') return;
    else (console.log("guess"))
});

resetBtn.addEventListener("click", function(e){
    console.dir(e.target);
});

checkGuessBtn.addEventListener("click", function(e){
    console.dir(e.target);
});

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

// function renderSolution() {
//     const solutionArr =  Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1)
//  }