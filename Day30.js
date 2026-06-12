console.log("10" + 1);
console.log("10" - 1);
console.log(true + false);
console.log(!!"Sheryians");
let age = 17;
let msg = age >= 18 ? 'Adult' : 'Minor';
let marks = 82;
let grades = marks >= 90 ? 'Excellent' : marks >= 75 ? 'Good' : marks >=60 ? 'Average' : 'Fail';

function getGrade(score){
    if (score >= 90 && score <= 100){
        return "A";
    } else if (score >= 80 && score <= 89){
        return "B";
    } else if (score >= 70 && score <=79){
        return "C";
    } else if (score >= 60 && score <= 69){
        return "D";
    } else if (score >= 33 && score <= 59){
        return "E";
    }else if (score >= 0 && score <=32){
        return "Fail";
    } else {
        return "Invalid Marks"
    }
}
console.log(getGrade(78))
console.log(getGrade(28))

function rps(user,computer){
    if (user === computer) return "Draw";
    if (user === "rock" && computer === "scissor") return "You win";
    if (user === "scissor" && computer === "paper") return "You win";
    if (user === "paper" && computer === "rock") return "You win";
    return "Bad Luck";
}
console.log(rps("rock","scissor"))
