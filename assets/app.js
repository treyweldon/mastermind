class MastermindGame {
    constructor() {
        this.colorLookup = ["red", "blue", "yellow", "green", "orange", "purple"];
        this.solutionArr = [];
        this.solutionArrEl = [];
        this.renderSolution();

        this.ansNum = 0;
        this.guessNum = 0;
        this.previousGuesses = new Set();

        this.colorButtons = {
            red: document.querySelector('#red'),
            blue: document.querySelector('#blue'),
            yellow: document.querySelector('#yellow'),
            green: document.querySelector('#green'),
            orange: document.querySelector('#orange'),
            purple: document.querySelector('#purple')
        };

        this.checkGuessBtn = document.querySelector('#check');
        this.resetGuessBtn = document.querySelector('#reset-guess');
        this.resetBtn = document.querySelector('#reset');
        this.messageEl = document.querySelector('h2');

        this.solutionEl = [...document.querySelectorAll("#solution > div")];
        this.gameBoard = Array.from({ length: 10 }, (_, i) => [...document.querySelectorAll(`#guess-${i} > div`)]);
        this.feedbackBoard = Array.from({ length: 10 }, (_, i) => [...document.querySelectorAll(`#feedback-${i} > div`)]);
        this.gameArr = Array.from({ length: 10 }, () => []);
        this.feedbackArr = Array.from({ length: 10 }, () => []);
        this.resultsRemaining = Array.from({ length: 10 }, () => []);
        this.solutionBoard = this.createNestedArray();

        this.resetBtn.addEventListener("click", () => this.resetGame());
        this.resetGuessBtn.addEventListener("click", () => this.resetGuess());
        this.checkGuessBtn.addEventListener("click", () => this.checkGuess());

        Object.values(this.colorButtons).forEach(button => {
            button.addEventListener("click", (e) => this.addGuess(e));
        });
    }

    resetGame() {
        this.solutionArr = [];
        this.solutionArrEl = [];
        this.renderSolution();

        this.ansNum = 0;
        this.guessNum = 0;
        this.previousGuesses.clear();

        this.gameArr = Array.from({ length: 10 }, () => []);
        this.feedbackArr = Array.from({ length: 10 }, () => []);
        this.resultsRemaining = Array.from({ length: 10 }, () => []);
        this.solutionBoard = this.createNestedArray();

        this.messageEl.textContent = "New game started!";

        this.gameBoard.forEach(row => {
            row.forEach(cell => {
                cell.style.background = '';
            });
        });

        this.feedbackBoard.forEach(row => {
            row.forEach(cell => {
                cell.style.background = '';
            });
        });

        this.solutionEl.forEach(cell => {
            cell.style.background = '';
        });
    }

    addGuess(e) {
        if (e.target.className === 'colors') {
            this.gameBoard[this.guessNum][this.ansNum].style.background = e.target.id;
            this.gameArr[this.guessNum][this.ansNum] = e.target.id;
            this.ansNum++;
        }
        if (this.ansNum === 4) {
            this.ansNum = 0;
            return;
        }
    }

    checkGuess() {
        if (this.gameArr[this.guessNum].length !== 4) {
            this.messageEl.textContent = "Guess must be four colors";
            return;
        }

        const guessString = this.gameArr[this.guessNum].join(',');
        if (this.previousGuesses.has(guessString)) {
            this.messageEl.textContent = "You've already guessed this combination. Try again!";
            return;
        }
        this.previousGuesses.add(guessString);

        let isMatch = this.gameArr[this.guessNum].every((ans, index) => this.solutionArr[index] === ans);

        if (isMatch) {
            this.gameArr[this.guessNum].forEach((ans, index) => {
                this.solutionEl[index].style.background = this.solutionArr[index];
            });
            this.messageEl.textContent = `Congrats! You won in ${this.guessNum + 1} attempts!`;
        } else {
            this.checkBlack();
            this.checkWhite();
            this.addFeedback();
            this.guessNum++;
            this.ansNum = 0;
            this.attemptsRemaining();
        }
    }

    resetGuess() {
        // Clear the guess array for the current row
        this.gameArr[this.guessNum] = [];
    
        // Reset the displayed colors for the current row
        this.gameBoard[this.guessNum].forEach(cell => {
            cell.style.background = '';
        });
    
        // Reset answer index to allow a new guess
        this.ansNum = 0;
    }
    

    checkBlack() {
        this.gameArr[this.guessNum].forEach((ans, index) => {
            if (ans === this.solutionArr[index]) {
                this.feedbackArr[this.guessNum].push("black");
                this.resultsRemaining[this.guessNum].push(null);
                this.solutionBoard[this.guessNum][index] = null;
            } else {
                this.resultsRemaining[this.guessNum].push(ans);
            }
        });
    }

    checkWhite() {
        this.resultsRemaining[this.guessNum].forEach((ans, index) => {
            if (ans === null) return;
            const colorIndex = this.solutionBoard[this.guessNum].findIndex(color => color === ans);
            if (colorIndex !== -1) {
                this.feedbackArr[this.guessNum].push("white");
                this.solutionBoard[this.guessNum][colorIndex] = null;
            }
        });
    }

    addFeedback() {
        this.feedbackArr[this.guessNum].forEach((feedbackColor, index) => {
            this.feedbackBoard[this.guessNum][index].style.background = feedbackColor;
        });
    }

    renderSolution() {
        let randArr = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6));
        this.solutionArr = randArr.map(index => this.colorLookup[index]);
        this.solutionArrEl = this.solutionArr.slice();
    }

    attemptsRemaining() {
        if (this.guessNum < 10) {
            let attemptsLeft = 10 - this.guessNum;
            this.messageEl.textContent = `${attemptsLeft} Attempts remaining`;
        } else {
            this.messageEl.textContent = "Better luck next time!";
            this.solutionArr.forEach((color, index) => {
                this.solutionEl[index].style.background = color;
            });
        }
    }

    createNestedArray() {
        return Array.from({ length: 10 }, () => this.solutionArrEl.slice());
    }
}

const game = new MastermindGame();
