let turnPlayer = 0; // 1 = playerOne, 2 = playerTwo
let playerOneHp = 20; //update after power calculation, if zero player two wins
let playerTwoHP = 20; //update after power calculation, if zero player one wins
let deckLimit = 20; 
let handLimit = 5;
let playerOneDeck = []; //update after a card is drawn
let playerTwoDeck = []; //update after a card is drawn
let playerOneHand = []; // update after a card is drawn or played
let playerTwoHand = []; // update after a card is drawn or played
let coinBtn = document.getElementsByClassName("coin-btn")
let chooseBtn = document.getElementsByClassName("choose-btn")
let buildBtn = document.getElementById("build-btn")
buildBtn.addEventListener('click', function(){ //build deck button
    buildDeck(playerOneDeck)
    buildDeck(playerTwoDeck)
    buildBtn.style.display = "none"
})
function showCoinFlipPopup(){ //display coinflip popup
        document.getElementById("popup-menu").style.display = "flex"
        Array.from(coinBtn).forEach(item => item.style.display = "flex")
        document.getElementById("popup-message").innerHTML = "Choose Heads or Tails to decide if you go first or second"
        document.getElementById("game-start-btn").style.display = "none"
}
function coinFlip(choice){ //coin flip for player, leads to playerChoice
        let result = Math.floor(Math.random() * 2) +1;
        if(result === choice){
            Array.from(coinBtn).forEach(item => item.style.display = "none")
            document.getElementById("coin-flip-img").src = "/card-images/won-coin-flip.jpg"
            document.getElementById("coin-flip-img").alt = "picture of a happy dog"
            document.getElementById("popup-message").innerHTML = "You won the coin flip!"
            Array.from(chooseBtn).forEach(item => item.style.display = "flex")
        }
        else{
            turnPlayer = Math.floor(Math.random() * 2) +1
            Array.from(coinBtn).forEach(item => item.style.display = "none")
            document.getElementById("coin-flip-img").src = "/card-images/lost-coin-flip.jpg"
            document.getElementById("coin-flip-img").alt = "picture of a sad cat"
            document.getElementById("popup-message").innerHTML = "You lost the coin flip"
        }
}
function playerChoice(choice){ //player decides turnPlayer for firstTurn() 
    if(choice === 1){
        turnPlayer = 1
    }
    else{turnPlayer = 2}
}
// function drawForGameStart(){ //each player draws cards from the deck

// }
// } 
// function firstTurn(turnPlayer){
//     function drawForTurn(turnPlayer){}
//     function planningPhase(turnPlayer){}
//     function endPhase(turnPlayer){}
// }
// function turn(turnPlayer){
//     function drawForTurn(turnPlayer){}
//     function planningPhase(turnPlayer){}
//     function attackPhase(turnPlayer){}
//     function endPhase(turnPlayer){}
// }