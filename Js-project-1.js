let num1 = Number(prompt("Enter First Number"));
let operator = prompt("Enter the Operator");
let num2 = Number(prompt("Enter Second Number"));

if (operator === "+") {
    alert(`Result: ${num1 + num2}`);
} else if (operator === "-") {
    alert(`Result: ${num1 - num2}`);
} else if (operator === "*") {
    alert(`Result: ${num1 * num2}`);
} else if (operator === "/") {
    if (num2 === 0) {
        alert("Number cannot be divided by Zero");
    } else {
        alert(`Result: ${num1 / num2}`);
    }
} else {
    alert("Invalid Operator");
};