var shoppingCart = {
    boi:3,
    sunglass:3,
    mouse:2,
    cable:6,
    pen:5,
    paper:12,
    color:34
}
var penCount = shoppingCart.pen;
// console.log(penCount)
var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);



