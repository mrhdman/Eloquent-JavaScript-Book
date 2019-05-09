console.log("oxford ms")

function loopingATriangle () {
    /*
        Write a loop that makes seven calls to console.log to output the following
        triangle:
        #
        ##
        ###
        ####
        #####
        ######
        #######
    */

    for (let hashtag = "#"; hashtag.length <= 7; hashtag = hashtag + "#") {
        console.log(hashtag);
    }
}

function fizzBuzz() {
    /*
        Write a program that uses console.log to print all the numbers from 1 to 100,
        with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
        number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
        When you have that working, modify your program to print "FizzBuzz" for
        numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
        for numbers divisible by only one of those).
    */

    for (let count = 1; count <= 100; count = count + 1) {
        if (count % 15 == 0) {
            console.log("FizzBuzz");
        }else if (count % 5 == 0) {
            console.log("Buzz");
        }else if (count % 3 == 0) {
            console.log("Fizz");
        }else (console.log(count))
    }
}

    /*
        Write a program that creates a string that represents an 8×8 grid, using newline
        characters to separate lines. At each position of the grid there is either a space
        or a "#" character. The characters should form a chessboard.
        Passing this string to console.log should show something like this:
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        When you have a program that generates this pattern, define a binding size
        = 8 and change the program so that it works for any size, outputting a grid
        of the given width and height.
    */

function chessBoard(rows) {
    let string = "";
    let count = 0;
    let bindingSize = rows * rows;
    let addSpaceOnNextLineAdded = true;

        while(count <= bindingSize) {
            if (count == bindingSize) {
                return(string);
            }

            if (count % rows == 0 && count > 0 && addSpaceOnNextLineAdded == true && rows % 2 == 1) {
                string += "\n";
            } else if (count % rows == 0 && count > 0 && addSpaceOnNextLineAdded == true) {
                string += "\n ";
                addSpaceOnNextLineAdded = false;
            } else if (count % rows == 0 && count > 0 && addSpaceOnNextLineAdded == false) {
                string += "\n";
                addSpaceOnNextLineAdded = true;
            }

            if (count == 0) {
                string += "#";
            } else if (count % 2 == 0) {
                string += "#";
            } else {
                string += " ";
            }
            count ++;
        }
}

// console.log(loopingATriangle());
// console.log(fizzBuzz());
// console.log(chessBoard(Infinity));
console.log(chessBoard(1));
console.log(chessBoard(1));
console.log(chessBoard(0));
console.log(chessBoard(3));
console.log(chessBoard(7));
console.log(chessBoard(8));

