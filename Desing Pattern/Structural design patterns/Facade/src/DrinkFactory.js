const Coffee = require("./Coffee");
const Tea = require("./Tea");

var DrinkFactory = function () {
    var prepareOrder = function (
        client_choice,
        size = "reglar",
        sugar = null,
        milk = null
    ) {
        if (client_choice.split(" ").includes("tea")) {
            console.log("prepare order for tea: " + client_choice);
            var tea = new Tea(size, client_choice);
            if (sugar) {
                tea.addSuggar(sugar);
            }
            if (milk) {
                tea.addMilk(milk);
            }
            return tea;
        }

        if (client_choice.split(" ").includes("coffee")) {
            console.log("prepare order for coffee: " + client_choice);
            var coffee = new Coffee(size, client_choice);
            if (sugar) {
                coffee.addSuggar(sugar);
            }
            if (milk) {
                coffee.addMilk(milk);
            }
            return coffee;
        }
    };
    return {
        create: prepareOrder,
    }
}

module.exports = DrinkFactory;