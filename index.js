// Code your solutions in this file


//Instruction 1:

const cardNames=["Guadalupe", "Ollie", "Aki"];
let eventName = "surprise";

function writeCards (cardNames, eventName) {

    let broadcast = [];

    for (let i=0; i<cardNames.length; i++) {

        broadcast.push(`Thank you, ${cardNames[i]}, for the wonderful ${eventName} gift!`);
    }

    return broadcast;
}

writeCards(cardNames, eventName);
console.log(writeCards(cardNames, eventName));
debugger;


//Instruction 2:

let number = 0;

function countDown (number) {
   
    while (number>=0) {

        console.log(number--);
    }
}

countDown(15);
debugger;
