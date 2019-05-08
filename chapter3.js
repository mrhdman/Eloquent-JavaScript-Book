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

// Exercises


// Minimum
/*
The previous chapter introduced the standard function Math.min that
returns its smallest argument. We can build something like that now.
Write a function min that takes two arguments and returns their minimum.
*/

const minimumMin = function(a, b) {
    return Math.min(a, b);
}
console.log(minimumMin(83, 29));

// Recursion

/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/



function isEven(number) {
    if (number < 0) {
        return isEven(-number);
    } else if (number == 1) {
        return false;
    } else if (number == 0) {
        return true;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(-1)); // false
console.log(isEven(50)); // true
console.log(isEven(75)); // false



// Bean Counting

/*
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B") {
            count ++;
        }
    }
    return (count);
}

console.log(countBs("BatmanBbBurr"));

function countChar(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            count ++;
        }
    }
    return (count);
}

console.log(countChar("Matthew", "t")); // return 2

function countBs1(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            count++;
        }
    }
    return (count);
}

console.log(countBs1("hellohelloHELLOHEllOHElLO", "l" ));
