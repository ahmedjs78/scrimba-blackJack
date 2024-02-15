let cards = [] 
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    name: "per",
    chips: 145
}

playerEl.textContent = player.name

playerEl.textContent = player.name + ": $" + player.chips
console.log(cards)
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) +1
        if(randomNumber === 1){
            return 11
        }else if ( randomNumber > 10){
            return 10
        }else {
            return randomNumber
        }
}
function startGame(){
    cards = []
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard,secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    console.log("render game function")
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent +=  cards[i] + " " 
    }
    sumEl.textContent = "sum: " + sum
    if(sum < 21 ){
        message = "Do you want to draw a new card? "
        isAlive = true
    } else if (sum === 21){
        message = "Wohoo! you've got a Blackjack "
        hasBlackJack = true
    } else{
        message = "your' out of the game! "
        isAlive = false
    }
    messageEL.textContent = message
}



function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("drawing a new card")
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard 
        console.log(sum)
        console.log(cards)
        renderGame()
    }else{
        return console.log("start a new game")
    }
}