let year = 15;
if (year > 10 && year<= 20){
    console.log("Age lies between 10 and 20")
}
else{
    console.log("Age doesn't lie between 10 and 20")
}

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
    break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

let number = 18
if (number % 2 == 0 && number % 3 == 0){
    console.log(
        "Divisible by both 2 and 3"
    );
}
else{
    console.log("Not divisible by both");
}

let num = 9
if(num % 2 == 0 || num % 3 == 0){
    console.log("Divisible by either 2 or 3");
}else{
    console.log("Not divisible");
}

let age = 20;
let result = age >=18 ? "You can Drive" : "You cannot Drive";
console.log(result);
