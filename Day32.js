//Question 1
let multiply = (a, b)=>{
    return a * b;
}
console.log(multiply(2,2)); 

//Question 2
function checkAge(age){
    if (age < 18) return "Too Young";
    return "Allowed";
}
console.log(checkAge(23))

//Question 3
function abcd(val){
    val();
}
abcd(function(){
    console.log("hey");
});

//Question 4
function bmi(weight, height) {
    return weight / (height * height);
}
console.log(bmi(67, 1.8).toFixed(3));

//Question 5
function discountCalc(discount){
    return function(price){
        return price - price * (discount / 100)
    }
}
let discounter = discountCalc(10)
console.log(discounter(200))

//Question 6
let n = (a,b)=>{
    return a + b;
}
console.log(n(500,700))

//Question 7
let square = (num)=>{
    return num * num;
}
console.log(square(5))

//Question 8
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
let counter = outer()
counter();
counter();
counter();

//Question 9
function counting(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let counters = counting();
counters();
counters();
counters();

//Question 10
function addition (a,b){
    return a+b;
}
function substraction (a,b){
    return a - b;
}
function division (a,b){
    return  a / b;
}
console.log(addition(5678, 9876));
console.log(substraction(54321, 67891));
console.log(division(3550,5));

//Question 11
function changeSign(num){
    return -num;
}
console.log(changeSign(876));

//question 12
function findSamller(a,b){
    if (a < b) {
        return a;
    } return b;
}
console.log(findSamller(34,12))


//Question 13
function canVote(age){
    if ( age > 18){
        return "Eligible";
    } return "Better Luck Next Time";
}
console.log(canVote(25));

//Question 14
function cToF(numb){
    return (numb * 9/5) + 32;
}
console.log(cToF(25));

//Question 15 
function sumN(n){
    let total = 0;
    for ( let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
console.log(sumN(5))

//Question 16
function isPrime(num){
    if (num < 2){
        return "Not a Prime Number";
    }
    for (let n = 2; n < num; n++);
    if (n % 2 ===0){
        return "Not a Prime Number";
    } return "Is a Prime Number";
}
console.log(isPrime(5));

//Question 17
function getGrade(marks){
    if (marks >=90){
        return "A";
    } else if (marks >= 80){
        return "B";
    }  else if (marks >= 70){
        return "C";
    } else if (marks >= 60){
        return "D";
    }else{
        return "You're wasting money brthr";
    }
}
console.log(getGrade(78))