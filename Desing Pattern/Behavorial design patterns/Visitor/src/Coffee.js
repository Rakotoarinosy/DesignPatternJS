var Coffee = function (drink, flavor) {
    this.drink = drink;
    this.flavor = flavor;
};

Coffee.prototype.toString = function () {
    console.log(
        "make order for coffee : " +
            this.flavor +
            ", total to play :" +
            this.drink.price
    );
};
module.exports = Coffee;