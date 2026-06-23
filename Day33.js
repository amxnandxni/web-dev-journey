//Question 1
let fruits = ["Apple", "Banana", "Chikuu"];
fruits.push("Mango");
fruits.unshift("Orange");
console.log(fruits)
fruits.pop();
console.log(fruits)

//Question 2
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");
console.log(colors);

//Question 3
let items = [1, 2, 3, 4, 5, 6];
let newItems = items.slice(2, 4);
console.log(newItems);

//Question 4
let brands = ["Zara", "Uniqlo", "HnM", "Westside"];
brands.sort().reverse();
console.log(brands);

//Question 5
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.map(function (val) {
    return val * val;
});
console.log(newArr);

//Question 6
let newarr = newArr.filter(val => {
    return val >= 15;
})
console.log(newarr);

//Question 7
let sum = arr.reduce((acc, val) => {
    return acc + val;
}, 0);
console.log(sum);

//Question 8
let newSum = newarr.reduce((acc, val) => {
    return acc + val;
}, 0);
console.log(newSum);

//Question 9
let ans = newarr.find(val => {
    return val > 24;
});
console.log(ans);

//Question 10
let result = newarr.some(val => {
    return val < 65;
});
console.log(result);

//Question 11
let even = newarr.every(val => {
    return val % 2 === 0;
})
console.log(even);

+