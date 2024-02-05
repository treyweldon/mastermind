// const colorLookup = {
//     '0': 'white',
//     '1': 'red',
//     '2': 'blue',
//     '3': 'yellow',
//     '4': 'orange',
//     '5': 'green',
//     '6': 'purple'
// };

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

const colorRed = document.querySelector('#red')
const colorBlue = document.querySelector('#blue')
const colorYellow = document.querySelector('#yellow')
const colorGreen = document.querySelector('#green')
const colorOrange = document.querySelector('#orange')
const colorPurple = document.querySelector('#purple')
const feedbackCol = document.querySelector('#feedback-wrapper');
const feedbackEl = document.querySelectorAll('.feedback')
const feedbackCells = document.querySelectorAll('.feedback-cell');
const solutionEl = document.querySelector('#solution')
const solutionCells = [...solutionEl.children]
const checkGuessBtn = document.querySelector('#check');
const resetBtn = document.querySelector('#reset');
const messageEl = document.querySelector('h2');



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

colorRed.addEventListener("click", function(e){
    console.dir(e.target)
})

colorBlue.addEventListener("click", function(e){
    console.dir(e.target)
})

colorYellow.addEventListener("click", function(e){
    console.dir(e.target)
})

colorGreen.addEventListener("click", function(e){
    console.dir(e.target)
})

colorOrange.addEventListener("click", function(e){
    console.dir(e.target)
})

colorPurple.addEventListener("click", function(e){
    console.dir(e.target)
})

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