let studentName = prompt("Enter Student Name");
let maths = Number(prompt("Enter Maths Marks"));
let science = Number(prompt("Enter Science Marks"));
let english = Number(prompt("Enter English Marks"));

function calculateTotal(maths, science, english) {
    return maths + science + english;
}
function calculatePercentage(total) {
    return total / 3;
}
function calculateGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else if (percentage >= 40) {
        return "E"
    } else {
        return "Fail";
    }
};
let total = calculateTotal(maths, science, english);
let percentage = calculatePercentage(total);
let grade = calculateGrade(percentage);

console.log ("======= Student Report =======");
console.log("Student Name :", studentName);
console.log("Maths :", maths);
console.log("Science :", science);
console.log("English :", english);
console.log("Total :", total);
console.log("Percentage :", percentage);
console.log("Grade :", grade);