const Drink = require('./src/Drink');
const Coffee = require('./src/Coffee');
const Tea = require('./src/Tea');

// visitors
var  AddSuggar = function() {
    this.name ="Add Sugar";
    const [sugar] = arguments;
    this.visit = function(drink) {
        drink.addSugar(sugar);
    }
}

var drink = new Drink();
var drinkExtra = new Drink("extra");

var coffee = new Coffee(drinkExtra, "arabica");
var tea = new Tea(drink, "green tea");

var honey = new AddSuggar("honey");

drink.accept(honey);

// coffee.toString();
// tea.toString();