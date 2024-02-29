let coinFlip = Math.round(Math.random() * 100);
console.log(coinFlip);
let choice = window.prompt('Heads or Tails').toLowerCase();

let results;


if(coinFlip < 50) {
    results = "heads";
} else  {
    results = "tails"
}
console.log(`Coin flip is ${ coinFlip } results is ${ results }`);

if(choice == results) {
    if(choice == "heads"){
        window.alert(`The flip was heads and you chose heads...you win!`);
    }else {
        window.alert(`The flip was tails and you chose tails...you win!`);
    }
}else {
    if(choice == "heads"){
        window.alert(`The flip was tails and you chose heads...you lose!`);
    }else {
        window.alert(`The flip was heads and you chose tails...you lose!`);
    }
}
