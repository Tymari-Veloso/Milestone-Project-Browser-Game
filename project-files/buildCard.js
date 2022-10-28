class Card {
    constructor(name, cost, cardType){
        this.name = name;
        this.cost = cost;
        this.cardType = cardType
    }
}
class Unit extends Card{
    constructor(power, defense){
    this.power = power;
    this.defense = defense;
    }
}
class Command extends Card{
    constructor(commandType){
        this.commandType = commandType
    }
}