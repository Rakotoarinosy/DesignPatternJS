const service = require('./src/service');

const instance = service.instance();

const Menu = {
    arabica: "Arabica coffee",
    americanao: "Americano coffee",
    late: "Cafe Late coffee",
    vanilla: "Vanilla cafe",
    expresso: "Expresso coffee",
    chai: "Chai Late tea",
    breakfastTea: "Breakfast tea",
};

instance.makeDrink(Menu.arabica, "extra", "honey", "half half");