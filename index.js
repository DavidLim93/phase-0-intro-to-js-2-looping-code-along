// Code your solutions in this file

function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards 
  }



const number=10

function countDown(number) {
    while (number>-1) {
        console.log(number--);
    }
return number;
}


