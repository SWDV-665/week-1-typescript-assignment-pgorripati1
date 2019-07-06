var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, unit, sellBy, needFreezer) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.unit = unit;
        this.sellBy = sellBy;
        this.needFreezer = needFreezer;
    }
    return Grocery;
}());
function groceryDetails(Item) {
    return "Item: " + Item.name +
        ", Price per " + Item.unit + ": " + Item.price + " " +
        ", Qunatity: " + Item.quantity;
}
var groceryItemsList = [new Grocery("Milk", 4, 3.49, "Gallon", "08/20/2019", true),
    new Grocery("Egg", 1, 4.99, "Dozen", "09/01/2019", true),
    new Grocery("Bread", 1, 5.99, "EA", "07/24/2019", false),
    new Grocery("Soap", 1, 1.99, "EA", "NA", false),
    new Grocery("Chocolate", 1, 1.59, "EA", "NA", false)];
for (var _i = 0, groceryItemsList_1 = groceryItemsList; _i < groceryItemsList_1.length; _i++) {
    var groceryItem = groceryItemsList_1[_i];
    document.body.innerHTML += groceryDetails(groceryItem) + "<br\>";
}
