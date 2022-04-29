function computerPlay (){ //Choses a number between 0 and 2 and depending on the number return ROCK,PAPER or SCISSORS
    let number = Math.floor(Math.random() * 3);
    if (number == 0){ 
        return "ROCK";
    }else if (number == 1){
        return "PAPER";
    }else{
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection) { //Plays a round against the computer
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
function game() { //Function that play 5 rounds of rock paper scissors
    for (let i = 0; i < 5; i++) {
        const playerSelection =  prompt('Choose ROCK, PAPER or SCISSORS:').toUpperCase();
        const computerSelection = computerPlay();
        console.log('You choose ' + playerSelection); //User choice
        console.log('Computer chooses ' + computerSelection);//Computer choice
        if (playRound(playerSelection,computerSelection) === 'YOU WIN'){
            roundWin +=1;
        }
        else if (playRound(playerSelection,computerSelection) === 'YOU LOSE'){
            roundLose +=1;
        }
        else if (playRound(playerSelection,computerSelection) === 'IT\'S A TIE') {
            roundTie +=1;
        }
        console.log(playRound(playerSelection,computerSelection))
        
    }
}
let roundWin = 0;
let roundLose = 0;
let roundTie = 0;

console.log(game(''));
console.log('Rounds winned: ' + roundWin, 'Rounds losed: ' +  roundLose, 'Rounds tied: ' +  roundTie);
if (roundWin > roundLose){
    console.log('WINNER');
}
else if (roundLose > roundWin) {
    console.log('COMPUTER WINS');
}
else {
    console.log('TIE');
}