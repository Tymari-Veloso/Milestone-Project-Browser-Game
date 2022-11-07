// Fisher–Yates Shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // same can be written as:
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
function buildDeck(){ //arr = playerOneDeck or playerTwoDeck
    let newDeck1 = shuffle(cardLibrary)
    let newDeck2 = shuffle(cardLibrary2)
    newDeck1.forEach(element => {
        playerOneDeck.push(element)
    });
    newDeck2.forEach(element => {
      playerTwoDeck.push(element)
  });
  return newDeck1 , newDeck2
}//pulls cards from card library and shuffles them in random order


// playerOneDeck.forEach(element => {
    //     let cards = document.createElement("li")
    //     cards.append(element.name)
    //     playerOneHand.append(cards)
    // });