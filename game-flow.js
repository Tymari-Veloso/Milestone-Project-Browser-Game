let turnPlayer = null; // 1 = playerOne, 2 = playerTwo
let playerOneHp = null; //update after power calculation, if zero player two wins
let playerTwoHP = null; //update after power calculation, if zero player one wins
let deckLimit = 10; 
let handLimit = 3;
let playerOneDeck = []; //update after a card is drawn
let playerTwoDeck = []; //update after a card is drawn
let playerOneHand = []; // update after a card is drawn played
let playerTwoHand = []; // update after a card is drawn played
gameStart(){
    coinFlip(){} //playerOne chooses 1 or 2, if correct, they choose firstTurn() turnPlayer value
    drawForGameStart(){} //each player draws cards from the deck, -x playerOne/TwoDeck
}
firstTurn(player){
    drawForTurn(player){}
    planningPhase(player){}
    endPhase(player){}
}
turn(player){
    drawForTurn(player){}
    planningPhase(player){}
    attackPhase(player){}
    endPhase(player){}
}
