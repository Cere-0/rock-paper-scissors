function computerPlay (){ //Choses a number between 0 and 2 and depending on the number return rock,paper or scissors
    let number = Math.floor(Math.random() * 3);
    if (number == 0){ 
        return "rock";
    }else if (number == 1){
        return "paper";
    }else{
        return "scissors"
    }
}
//console.log(computerPlay());
const playerSelection =  prompt('Choose Rock, Paper or Scissors:').toLowerCase(); //Ask the user for imput and converts it to a lowercase string.

console.log(playerSelection);

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

}
