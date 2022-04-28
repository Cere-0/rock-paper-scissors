console.log("Hello World");

function computerPlay(max){
    let decision = Math.floor(Math.random() * max);
    if (decision == 0) {
        console.log("Rock");
    }
    else if (decision == 1) {
        console.log("Paper")
    }
    else {
        console.log ("Scissors")
    }
}
console.log(computerPlay(3));