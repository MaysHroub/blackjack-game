let message = ''
let isAlive = true
let hasBlackJack = false
let cards = []
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let startBtn = document.getElementById("start-btn")

let player = {
    name: "Mays Al-Reem",
    chips: getRandomCredits()
}
playerEl.textContent = player.name + ": $" + player["chips"]



function startGame() {
    startBtn.textContent = "RESTART GAME"
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    hasBlackJack = false
    renderGame()
}


function renderGame() {
    if (sum < 21)
        message = "Do you want to draw a new card?"
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards.join(" ")
}


function newCard() {
    if (!isAlive || hasBlackJack) 
        return
    
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
}


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) 
        return 10
    else if (randomNumber === 1) 
        return 11
    else 
        return randomNumber
}


function getRandomCredits() {
    return Math.floor(Math.random() * 100) + 1
}