

console.log("Oxford.".length);


// Data Structures: Objects and Arrays



let anObject = {
    left: 11,
    right: 12
};
console.log(anObject.left);
delete anObject.right;
console.log(anObject.right);
console.log("right" in anObject);
console.log("left" in anObject);


console.log("football".slice(2, 6));

console.log("baseball".indexOf("s"));

console.log("sparrow".indexOf("rr"));

console.log("     sup \n  ".trim());

console.log(String(6).padStart(3, "0"));
console.log(String(777).padStart(7, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join("7 "));
console.log("ha".repeat(7));

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 18, 2018, 2019));

let highScore = max(4, 29, 777, 42, -Infinity);
console.log(highScore);

let wWords = ["never", "fully"];
console.log(["will", ...wWords, "understand"]);


console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

let jString = JSON.stringify({
    dinner: false,
    movies: false,
    study: true,
});
console.log(jString);

// Summary

/*
Objects and arrays (which are a specific kind of object) provide ways to group several values into a single value. Conceptually, this allows us to put a bunch of related things in a bag and run around with the bag, instead of wrapping our arms around all of the individual things and trying to hold on to them separately.
*/

// Properties are accessed using value.prop or value["prop"].

// you can iterate over arrays using a special kind of for loop -- for (let element of array).

// Exercises

/*

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

// for (let i = 0; i < string.length; i++)

function range(start, end) {
    var array = [];
    for (var i = start; i <= end; i++){
        array.push(i);
    }
    return array;
}
// console.log(range(1, 10));

function sum(array){
    var total = 0;
    while(array.length > 0) {
        total = total + array.pop();
    }
    return total;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));


// function range (start, end) {
//     console.log(start);
//     for (var i = start; i < end; i++);{
//         console.log(i);
//     }
// }
// range(1, 10);

// Reversing an Array

/*
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
    var newArray = [];
    let arrayLength = arr.length;
    console.log(arrayLength);
};
console.log(reverseArray([1, 2 , 3, 4]))

function reverseArrayInPlace 