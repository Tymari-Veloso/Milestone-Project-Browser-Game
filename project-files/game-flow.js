let turnPlayer = 0; // 1 = playerOne, 2 = playerTwo
let playerOneHp = 0; //update after power calculation, if zero player two wins
let playerTwoHP = 0; //update after power calculation, if zero player one wins
let deckLimit = 10; 
let handLimit = 3;
let playerOneDeck = []; //update after a card is drawn
let playerTwoDeck = []; //update after a card is drawn
let playerOneHand = []; // update after a card is drawn or played
let playerTwoHand = []; // update after a card is drawn or played
function showCoinFlipPopup(){ //decide turn player, build deck, draw cards
        document.getElementById("coin-flip-popup").style.display = "flex" //display coinflip popup
}
function coinFlip(choice){ //playerOne chooses heads or tails, if correct, they choose firstTurn() turnPlayer value
        let result = Math.floor(Math.random() * 2) +1;
        let p = document.getElementById("popup-message")
        if(result === choice){
            document.getElementById("choice-popup").style.display = "flex"
            p.textContent = "You won the coin flip"
        }
        else{
            turnPlayer = Math.floor(Math.random() * 2) +1
            p.textContent = "You lost the coin flip"

        }
       console.log(document.getElementsByClassName("coin-flip-pop-up-btn")) 
}
function decideFirst(){
    turnPlayer = 1
}
function decideSecond(){
    turnPlayer = 2
}
// function drawForGameStart(){ //each player draws cards from the deck, -x playerOne/TwoDeck
        
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