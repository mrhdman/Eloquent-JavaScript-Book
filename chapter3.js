console.log('Oxford, Ms');


const square = function(x) {
    return x * x;
};
console.log(square(7));

const makeNoise = function() {
    console.log("Screech");
};
makeNoise();

const power = function(base,exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 6));

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "ctahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus(7));

console.log("The future says:", future());

function future() {
    return "Taxi Cars will be driverless.";
}

// arrow functions

const power2 = (base, exponent) => {
    let result = 1;
    for (let count=0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

function greet(who) {
    console.log("Hello " + who);
}
greet("Matt");


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        }else if (current > target) {
            return null;
        }else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));

// Writing .length after a string expression will give us the length of that string.

function printFarmInventory0(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory0(7, 11);

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory1(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory1(7, 11, 3);

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory2(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(7, 16, 3);

// Define f to hold a function value
const f = function(a) {
    return a + 2;
};

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
// Same as this
let h2 = function(a) {
    return a % 3;
};

console.log(f(7))
console.log(g(2, 7));
console.log(h("hello".length));
console.log(h2("test2".length));