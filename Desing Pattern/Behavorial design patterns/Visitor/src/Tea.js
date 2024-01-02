var Tea = function (drink, flavor) {
    this.drink = drink;
    this.flavor = flavor;
};

Tea.prototype.toString = function () {
    console.log(
        "make order for tea : " +
            this.flavor +
            ", total to play :" +
            this.drink.price
    );
};

module.exports = Tea;