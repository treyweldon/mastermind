class MastermindGame {
    constructor() {
        this.colorLookup = ["red", "blue", "yellow", "green", "orange", "purple"];
        this.solutionArr = [];
        this.solutionArrEl = [];
        this.renderSolution();

        this.ansNum = 0;
        this.guessNum = 0;
        this.previousGuesses = new Set();
        this.gameOver = false;

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

        Object.entries(this.colorButtons).forEach(([color, button]) => {
            button.addEventListener("click", (e) => this.addGuess(e));
            button.addEventListener("mouseenter", () => this.previewColor(color));
            button.addEventListener("mouseleave", () => this.clearPreview());
        });
    }

    resetGame() {
        this.solutionArr = [];
        this.solutionArrEl = [];
        this.renderSolution();

        this.ansNum = 0;
        this.guessNum = 0;
        this.previousGuesses.clear();
        this.gameOver = false;

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
        if (this.gameOver || this.ansNum >= 4) return;

        if (e.target.className === 'colors') {
            const color = e.target.id;
            this.gameBoard[this.guessNum][this.ansNum].style.background = color;
            this.gameArr[this.guessNum][this.ansNum] = color;
            this.ansNum++;
        }
    }

    previewColor(color) {
        if (this.gameOver || this.ansNum >= 4) return;

        const cell = this.gameBoard[this.guessNum][this.ansNum];

        if (!this.gameArr[this.guessNum][this.ansNum]) {
            cell.style.background = this.hexToRGBA(color, 0.5); 
        }
    }

    clearPreview() {
        if (this.gameOver || this.ansNum >= 4) return;

        const cell = this.gameBoard[this.guessNum][this.ansNum];

        if (!this.gameArr[this.guessNum][this.ansNum]) {
            cell.style.background = '';
        }
    }

    hexToRGBA(colorName, alpha) {
        const tempDiv = document.createElement('div');
        tempDiv.style.color = colorName;
        document.body.appendChild(tempDiv);
        const rgb = getComputedStyle(tempDiv).color;
        document.body.removeChild(tempDiv);

        return rgb.replace("rgb", "rgba").replace(")", `, ${alpha})`);
    }

    checkGuess() {
        if (this.gameOver) return;
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
            this.gameOver = true;
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
        if (this.gameOver) return;
        this.gameArr[this.guessNum] = [];
        this.gameBoard[this.guessNum].forEach(cell => {
            cell.style.background = '';
        });
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
