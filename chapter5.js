// Higher-Order Functions

console.log("Matt was here.");

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function whereAreYou() {
    console.log("WHERE ARE YOU?")
}

repeat(7, whereAreYou);