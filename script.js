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
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection =  prompt('Choose ROCK, PAPER or SCISSORS:').toUpperCase();
        const computerSelection = computerPlay();
        console.log('You choose ' + playerSelection); //User choice
        console.log('Computer chooses ' + computerSelection);//Computer choice
        console.log(playRound(playerSelection,computerSelection))
        
    }
}

//const playerSelection =  prompt('Choose ROCK, PAPER or SCISSORS:').toUpperCase(); //Ask the user for imput and converts it to a lowercase string.

//console.log('You choose ' + playerSelection); //User choice

//const computerSelection = computerPlay();

//console.log('Computer chooses ' + computerSelection);//Computer choice

//console.log(playRound(playerSelection,computerSelection));

console.log(game());