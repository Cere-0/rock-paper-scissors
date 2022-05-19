function computerPlay(){ //Choses a number between 0 and 2 and depending on the number return ROCK,PAPER or SCISSORS
    let number = Math.floor(Math.random() * 3);
        if (number == 0){ 
        return "ROCK";
        }else if (number == 1){
        return "PAPER";
        }else{
        return "SCISSORS"
        }
}

const computerChoice = document.querySelector('#computer-choice'); //? Adds the computer choice to the HTML
const computerChoiceContent = document.createElement('p');

const userChoice = document.querySelector('#user-choice'); //!USER CHOICE
let userChoiceContent = document.createElement('p');



const result = document.querySelector('#results')
let resultShow = document.createElement('p');


function playerSelection(){
    let rpsBttns = document.querySelectorAll('button');

    for (let i of rpsBttns){ //Adds the user choice to the HTML when the buttons a the buttons are clicked
        i.addEventListener('click', () => {
            computerChoiceContent.textContent = computerPlay();
            computerChoice.appendChild(computerChoiceContent);
            userChoiceContent.textContent = i.textContent;
            userChoice.appendChild(userChoiceContent);
            result.textContent = playRound(userChoiceContent.textContent, computerChoiceContent.textContent);
            // console.log(userChoiceContent.textContent);
            // console.log(computerChoiceContent.textContent);
            
            return result.appendChild(resultShow);
        });
    }
}
function playRound(playerSelection, computerSelection) { //Plays a round against the computer
    console.log('PC '+ playerSelection);
    console.log('CC '+ computerSelection);
    if (playerSelection === computerSelection) {
        
        return 'IT\'S A TIE';
        
    }
    
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'YOU WIN';
    }
    else {
        return 'YOU LOSE';        
    }
    
}

playerSelection();












































// const rock = document.getElementById('rock')
// if (rock.innerText === 'ROCK'){
//     console.log('you chose rock')
// }
// else {
//     console.log('null')
// }
// console.log(playRound());

// function game() { //Function that play 5 rounds of rock paper scissors
// for (let i = 0; i < 5; i++) {
//     const playerSelection =  prompt('Choose ROCK, PAPER or SCISSORS:').toUpperCase();
//     const computerSelection = computerPlay();
//     console.log('You choose ' + playerSelection); //User choice
//     console.log('Computer chooses ' + computerSelection);//Computer choice
//     if (playRound(playerSelection,computerSelection) === 'YOU WIN'){
//         roundWin +=1;
//     }
//     else if (playRound(playerSelection,computerSelection) === 'YOU LOSE'){
//         roundLose +=1;
//     }
//     else if (playRound(playerSelection,computerSelection) === 'IT\'S A TIE') {
//         roundTie +=1;
//     }
//     console.log(playRound(playerSelection,computerSelection))
// }
// }

// let roundWin = 0;
// let roundLose = 0;
// let roundTie = 0;

// console.log(game(''));
// console.log('Rounds winned: ' + roundWin, 'Rounds lost: ' +  roundLose, 'Rounds tied: ' +  roundTie);
// if (roundWin > roundLose){
//    console.log('WINNER');
// }
// else if (roundLose > roundWin) {
//    console.log('COMPUTER WINS');
// }
// else {
//    console.log('TIE');
// }

// let choiceRock = document.getElementById('rock');
// choiceRock.addEventListener('click', choice)

// function choice(){
//     console.log('HELLO');
// }

// rock[0].addEventListener('click', () => {
//     // playerSelection = 'rock'
//     // console.log(rock);
// });




// button.addEventListener("click", () => {
//     console.log("button clicked.");
// });

    
// function playerSelection(){
//     let rpsBttns = document.querySelectorAll('button');
//     for (let i of rpsBttns){
//         i.addEventListener('click', () => {
//             // console.log(i.textContent)
//             choice = i.textContent;
//             return choice;
//         });
//     }
// }
