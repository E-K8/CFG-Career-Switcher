function add() {
    let x = +prompt("Enter number x", 0);
    let y = +prompt("Enter number y", 0);
    alert(`addition result: ` + (x + y));
}

function subtract() {
    let x = prompt("Enter number x", 0);
    let y = prompt("Enter number y", 0);
    alert(`subtraction result: ` + (x - y));
}

function multiply() {
    let x = prompt("Enter number x", 0);
    let y = prompt("Enter number y", 0);
    alert(`multiplication result: ` + (x * y));
}

function divide() {
    let x = prompt("Enter number x", 0);
    let y = prompt("Enter number y", 0);
    alert(`division result: ` + (x / y));
}

function power() {
    let x = prompt("Enter number x", 0);
    let y = prompt("Enter number y", 0);
    let z = x ** y;
    alert(`${x} to the power of ${y} equals: ${z}`);
}

function squareRoot() {
    let x = prompt("Enter a number", 0);
    let y = Math.sqrt(x);
    alert(`Square root of ${x} equals: ${y}.`);
}