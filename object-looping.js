var shoppingCart = {
    boi:3,
    sunglass:3,
    mouse:2,
    cable:6,
    pen:5,
    paper:12,
    color:34,
    bottol:55
}

var shoppingItems =['boi','sunglass','mouse','cable','pen','paper','color'] ;

var friendAge =[12,25,45,2,56,56] ;


const keys =Object.keys(shoppingCart);
console.log(keys); 

/* 

const value =Object.value(shoppingCart);
console.log(value); */


for (var i =0; i < keys.length; i++) {
    // console.log(keys[i]);
    var propertyName = keys[i];
    var porpertyValue = shoppingCart[propertyName];
    console.log(propertyName, porpertyValue);
    
    
}


// for in loop



for (var propertyName in shoppingCart) {
    const value =shoppingCart[porpertyValue]
    console.log(propertyName,porpertyValue);
    
}