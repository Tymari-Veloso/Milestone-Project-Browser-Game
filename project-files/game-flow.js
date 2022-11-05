// let turnPlayer = null; // 1 = playerOne, 2 = playerTwo
let playerOneHp = 2; //update after power calculation, if zero player two wins
let playerTwoHp = 2; //update after power calculation, if zero player two wins
// let deckLimit = 20; 
// let handLimit = 5;
let playerOneDeck = []; //update after a card is drawn
let playerTwoDeck = []; //update after a card is drawn
// let playerOneHand = []; // update after a card is drawn or played
// let playerTwoHand = []; // update after a card is drawn or played
// let coinBtn = document.getElementsByClassName("coin-btn")
// let chooseBtn = document.getElementsByClassName("choose-btn")
let selectedZone = null
let buildBtn = document.getElementById("build-btn")
let playerOneHand = document.getElementById("player-one-hand")
let playerOneHpDisplay = document.getElementById("player-one-hp-display")
let playerOneHandDisplay = document.getElementById("player-one-hand-display")
let playerOneDeckDisplay = document.getElementById("player-one-deck-display")
let playerTwoHpDisplay = document.getElementById("player-two-hp-display")
let playerTwoHandDisplay = document.getElementById("player-two-hand-display")
let playerTwoDeckDisplay = document.getElementById("player-two-deck-display")
function addToHand(arr1, arr2){
    let selectedUnit = null
    let card1 = arr1.pop()
    let card2 = arr1.pop()
    let card3 = arr1.pop()
    let card4 = arr1.pop()
    let cards = [card1, card2, card3, card4]
    cards.forEach(element => {
      let btn = document.createElement("button")
      btn.classList.add("cards")
      btn.addEventListener('click', function(){
        selectedUnit = element
      })
      btn.append(element.name)
      arr2.append(btn)
      playerOneDeckDisplay.innerHTML = `Deck: ${6}`
    //   playerTwoDeckDisplay.innerHTML = `Deck: ${6}`
    });
  }
buildBtn.addEventListener('click', function(){ //build deck button
    buildDeck()
    buildBtn.style.display = "none"
    document.getElementById("game-start-btn").style.display = "block"
    for(let i = 0; i <= playerOneDeck.length; i++){
        playerOneDeckDisplay.innerHTML = `Deck: ${i}`
    }
    // for(let i = 0; i <= playerTwoDeck.length; i++){
    //     playerTwoDeckDisplay.innerHTML = `Deck: ${i}`
    // }
})
function startGame(){ //display coinflip popup
        // document.getElementById("popup-menu").style.display = "flex"
        // Array.from(coinBtn).forEach(item => item.style.display = "block")
        // document.getElementById("popup-message").innerHTML = "Choose Heads or Tails to decide if you go first or second"
        document.getElementById("game-start-btn").style.display = "none"
        document.getElementById("play-btn").style.display = "block"
        document.getElementById("end-btn").style.display = "block"
        playerOneHpDisplay.innerHTML = `HP: ${playerOneHp}`
        playerTwoHpDisplay.innerHTML = `HP: ${playerTwoHp}`
        addToHand(playerOneDeck, playerOneHand)
}
function playCard(){
    
}
function selectZone(position){
    if(position === 1){
        selectedZone = "Left"
    }
    else if(position === 2){
        selectedZone = "Middle"
    }
    else{selectedZone = "Right"}
    console.log(selectedZone)
}
// function coinFlip(choice){ //coin flip for player, leads to playerChoice
//         let result = Math.floor(Math.random() * 2) +1;
//         if(result === choice){
//             Array.from(coinBtn).forEach(item => item.style.display = "none")
//             document.getElementById("coin-flip-img").src = "/card-images/won-coin-flip.jpg"
//             document.getElementById("coin-flip-img").alt = "picture of a happy dog"
//             document.getElementById("popup-message").innerHTML = "You won the coin flip!"
//             Array.from(chooseBtn).forEach(item => item.style.display = "flex")
//         }
//         else{
//             turnPlayer = Math.floor(Math.random() * 2) +1
//             if(turnPlayer === 1){
//                 document.getElementById("player-turn").innerHTML = "Your Turn"
//             }
//             else{document.getElementById("player-turn").innerHTML = "Player Two's Turn"}
//             Array.from(coinBtn).forEach(item => item.style.display = "none")
//             document.getElementById("coin-flip-img").src = "/card-images/lost-coin-flip.jpg"
//             document.getElementById("coin-flip-img").alt = "picture of a sad cat"
//             document.getElementById("popup-message").innerHTML = "You lost the coin flip"
//         }
// }
// function playerChoice(choice){ //player decides turnPlayer for firstTurn() 
//     if(choice === 1){
//         turnPlayer = 1
//         Array.from(chooseBtn).forEach(item => item.style.display = "none")
//         document.getElementById("player-turn").innerHTML = "Your Turn"
//     }
//     else{
//         turnPlayer = 2
//         Array.from(chooseBtn).forEach(item => item.style.display = "none")
//         document.getElementById("player-turn").innerHTML = "Player Two's Turn"
//     }
// }

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