const colorLookup = {
    '0': 'white'
    '1': 'red'
    '2': 'blue'
    '3': 'yellow'
    '4': 'orange'
    '5': 'green'
    '6': 'purple'
};

const gameBoardEl = document.querySelector('#board-wrapper');
const feedbackEl = document.querySelector('#feedback-wrapper');
const checkGuessBtn = document.querySelector('#check');
const resetBtn = document.querySelector('#reset');
const turnsEl = document.querySelector('h2');
const messageEl = document.querySelector('h3')


let board;
let turn;
let winner;
let feedback;