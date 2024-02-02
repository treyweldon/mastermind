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


const guessCol = document.querySelector('#board-wrapper');
const guessEls = [...guessCol.children];
const guessCells = [...guessEls.children];
const feedbackCol = document.querySelector('#feedback-wrapper');
const feedbackEl = [...feedbackCol.querySelector.children];
const feedbackCells = [...feedbackEl.querySelector.children];
const checkGuessBtn = document.querySelector('#check');
const resetBtn = document.querySelector('#reset');
const messageEl = document.querySelector('h2');


let turn;
let winner;
let feedback;


function render() {
    renderGuess();
    renderFeedback();
    renderSolution();
    renderMessage();
};

function renderSolution() {
    Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1)
};

function runGame() {};


function makeGuess(evt) {};


function