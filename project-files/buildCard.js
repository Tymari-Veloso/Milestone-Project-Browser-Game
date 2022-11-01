class Card{
    constructor(name, src){
        this.name = name;
        this.src = src;
    }
}
class Unit extends Card{
    constructor(name, power, defense, src){
        super(name, src)
        this.power = power
        this.defense = defense
    }
}
class Command extends Card{
    constructor(name, commandType, src){
        super(name, src)
        this.commandType = commandType
    }
}
//Object builder for cards 