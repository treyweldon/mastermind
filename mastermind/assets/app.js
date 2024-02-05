const colorLookup = {
    '0': 'white',
    '1': 'red',
    '2': 'blue',
    '3': 'yellow',
    '4': 'orange',
    '5': 'green',
    '6': 'purple'
};


const colorRed = document.querySelector('#red');
const colorBlue = document.querySelector('#blue');
const colorYellow = document.querySelector('#yellow');
const colorGreen = document.querySelector('#green');
const colorOrange = document.querySelector('#orange');
const colorPurple = document.querySelector('#purple');

const checkGuessBtn = document.querySelector('#check');
const resetBtn = document.querySelector('#reset');
const messageEl = document.querySelector('h2');


const [...guess0] = document.querySelectorAll("#sq-0, #sq-1, #sq-2, #sq-3");
const [...guess1] = document.querySelectorAll("#sq-4, #sq-5, #sq-6, #sq-7");
const [...guess2] = document.querySelectorAll("#sq-8, #sq-9, #sq-10, #sq-11");
const [...guess3] = document.querySelectorAll("#sq-12, #sq-13, #sq-14, #sq-15");
const [...guess4] = document.querySelectorAll("#sq-16, #sq-17, #sq-18, #sq-19");
const [...guess5] = document.querySelectorAll("#sq-20, #sq-21, #sq-22, #sq-23");
const [...guess6] = document.querySelectorAll("#sq-24, #sq-25, #sq-26, #sq-27");
const [...guess7] = document.querySelectorAll("#sq-28, #sq-29, #sq-30, #sq-31");
const [...guess8] = document.querySelectorAll("#sq-32, #sq-33, #sq-34, #sq-35");
const [...guess9] = document.querySelectorAll("#sq-36, #sq-37, #sq-38, #sq-39");

const [...feedback0] = document.querySelectorAll("#fb-0, #fb-1, #fb-2, #fb-3");
const [...feedback1] = document.querySelectorAll("#fb-4, #fb-5, #fb-6, #fb-3");
const [...feedback2] = document.querySelectorAll("#fb-8, #fb-9, #fb-10, #fb-3");
const [...feedback3] = document.querySelectorAll("#fb-12, #fb-13, #fb-14, #fb-15");
const [...feedback4] = document.querySelectorAll("#fb-16, #fb-17, #fb-18, #fb-19");
const [...feedback5] = document.querySelectorAll("#fb-20, #fb-21, #fb-22, #fb-23");
const [...feedback6] = document.querySelectorAll("#fb-24, #fb-25, #fb-26, #fb-27");
const [...feedback7] = document.querySelectorAll("#fb-28, #fb-29, #fb-30, #fb-31");
const [...feedback8] = document.querySelectorAll("#fb-32, #fb-33, #fb-34, #fb-35");
const [...feedback9] = document.querySelectorAll("#fb-36, #fb-37, #fb-38, #fb-39");


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
  
  const solutionArr = [];

  let winner;
  let guessNum = 0;
  



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