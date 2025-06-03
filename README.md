# MASTERMIND  

**by Trey Weldon**  

The goal of the game is to crack the secret code in 10 attempts or less.  

- A **black peg** is returned for each guess that is a correct color and also in the correct location.  
- A **white peg** is returned for each guess that is a correct color but in the wrong location.  
- The order of the pegs does **not necessarily** correlate with the secret code.  
- The secret code **may or may not have duplicate colors**, so don't rule that out as a possibility.  

---

## TECHNOLOGIES USED  

- JavaScript  
- HTML  
- CSS  

---

## GETTING STARTED  

[Play the Game](https://treyweldon.github.io/mastermind/)  

To make your guess:  

1. Select your answer by clicking on a color in the bank. Your selection will be added to the guess row.  
2. If you change your mind, cycle through your answer by clicking on the color bank until you're back at the first position.  
3. Click **"Check Guess"** to see if your guess is correct.  

---

## SCREENSHOTS  

### Game at Launch  
![Game at Launch](https://github.com/treyweldon/mastermind/blob/main/assets/Screenshot%201.png)  

### White pegs indicate the correct color in the incorrect location  
![White pegs: correct color, incorrect location](https://github.com/treyweldon/mastermind/blob/main/assets/Screenshot%202.png)  

### Black pegs indicate the correct color in the correct location  
![Black pegs: correct color, correct location](https://github.com/treyweldon/mastermind/blob/main/assets/Screenshot%203.png)  

### The code has been guessed! You win!  
![Code broken, Game won](https://github.com/treyweldon/mastermind/blob/main/assets/Screenshot%204.png)  

### Duplicate guesses prevented  
![Duplicate](https://github.com/treyweldon/mastermind/blob/main/assets/Screenshot%205.png)  

---


## NEXT STEPS  

The next feature I would add is a **hint button**:  

- This button would reveal one of the code elements at random **but** at the cost of one or two of the player's guesses.  
- This would make it easier to guess the code while still maintaining a challenge.  
- Another improvement would be **animations**—either for pegs being added or a celebratory effect when the code is cracked.  
