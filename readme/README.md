# Milestone-Project-Browser-Game
## Browser game for bootcamp milestone project
# How to play
1. Click "Build Deck" to give you and your opponent a deck of 10 cards
2. Click "Start Game" to draw 4 card from your deck
3. Select 3 of the 4 card in your hand to fight for you, each card has a hidden power value
4. Click "Play Cards" to place them on the board
5. Click "End Turn" to see what your opponent will play
6. If the power total of your selected cards are greater than your opponent's, you win
# Code References
[Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)
[JavaScript.INFO](https://javascript.info/task/shuffle)

# Initial Game Design
While trying to come up with what type of browser game I wanted to make, I thought about what games I currently play.
I settled with the idea of wanting to make a digital card game where you face an AI opponent.
The inspiration for my game comes from digital card games I've played like Hearthstone, Yu-Gi-Oh, Marvel Snap and many more.
I wanted to go for a game where you can play as many cards you want, but there will be drawbacks for playing too many powerful cards, so you would have learn how to play out the cards you draw over the course of the game.
There would be 2 card types, unit cards that fight for you and attack your opponent's units or your opponent directly, and command cards that would impact you and your opponents directly or you and your opponent's units.
There would be 6 card zones total, 3 for units and 3 for commands.
Each card would have a stamina cost to play on the board.
The max stamina would be capped at a value 10, but if you play more than 10 stamina worth of cards, your stamina would be negative.
So you could play as many cards as you could fit on the board for your turn if you wanted to, but if you spent too much stamina playing all your cards, bad things would happen to you.
I haven't thought about exactly what would happen if had negative stamina, but drawing less cards when you start your next turn, or obtaining a vulnerable status where you would take extra damage from your opponent, sounds like neat concepts to me.

# Game Development Stage
After brainstorming about the design of the game for the first whole day of working on the project, I finally started to work on the game itself.
I knew the cards I wanted the player to interact with would be objects with different keys and values.
The card constructor was the easiest and first piece of the puzzle I solved, the next part was building a deck of out of these cards.
While using some of the resources my instructor gave me, and running into a complication, I stumbled across the "Fisher-Yates Shuffle".
I used this to shuffle the cards I constructed into a random order, and made the decks that the player and AI would use.
Next, I started to work through the logic of the player tossing a coin and deciding if they would go first or second against the AI, I found my original idea for my browser game to be too cumbersome given the about amount of time I had to work on this project.
I had to think about a simple way for the player to win or lose with what I already coded, so I came up with a luck based win/loss condition.
The player would draw 4 cards from the deck and be asked to play 3 of the 4 cards they drew on the board.
Each card would have a hidden power value.
After they play their 3 cards, the AI would play 3 random cards as well.
If their card's power was greater than the AI's, they would win.
If their card's power was lower than the AI's, they would lose.

# Afterthoughts
Working on this game has been a great eye opening experience for me.
While coming up with my own ideas and seeing them function properly was a great feeling, running into any sort of hiccup or bug was frustrating to say the least.
I very proud of how far I have come as a programmer, and I'm very thankful to all those who have helped me get this far, and those who will coninue to help me grow

