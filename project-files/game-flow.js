let turnPlayer = null; // 1 = playerOne, 2 = playerTwo
let playerOneHp = null; //update after power calculation, if zero player two wins
let playerTwoHP = null; //update after power calculation, if zero player one wins
let deckLimit = 10; 
let handLimit = 3;
let playerOneDeck = []; //update after a card is drawn
let playerTwoDeck = []; //update after a card is drawn
let playerOneHand = []; // update after a card is drawn or played
let playerTwoHand = []; // update after a card is drawn or played
function gameStart(){
    function coinFlip(){ //playerOne chooses 1 or 2, if correct, they choose firstTurn() turnPlayer value
        return Math.floor(Math.random() * 2) +1;
    }
    function drawForGameStart(){ //each player draws cards from the deck, -x playerOne/TwoDeck
        
    } 
}
function firstTurn(player){
    function drawForTurn(player){}
    function planningPhase(player){}
    function endPhase(player){}
}
function turn(player){
    function drawForTurn(player){}
    function planningPhase(player){}
    function attackPhase(player){}
    function endPhase(player){}
}