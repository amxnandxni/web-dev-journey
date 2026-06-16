// Question-1
for(i = 1; i < 11; i++){
    console.log(i)
}

// Question-2
let a = 10;
while(a>0){
    console.log(a);
    a--;
}

//question-3
for( let b = 1; b < 21; b++){
    if( b%2 === 0){
        console.log(b);
    }
}


//Question-4
let x = 1;
while(x < 16){
    if(x%2 === 1){
        console.log(x);
    }
    x++;
}

//Question-5
for(let y = 1; y < 11; y++){
    console.log(`5 * ${y} = ${5*y}`)
}

//Question-6
let sum = 0;
for(let z = 1; z < 101; z++ ){
    sum = sum + z;
}
console.log(sum)

//Question-7
for(let m = 1; m < 51; m++){
    if(m%3=== 0){
        console.log(m)
    }
}

//Question-8
let val = prompt("give a number");
for ( let n = 1; n <= val; n++){
    if(n%2===0){
        console.log(`${n} is even`);
    }else {
        console.log(`${n} is old`);
    }
}

//Question-9
for( let o = 1; o < 101; o++){
    if(o % 3 === 0 && o % 5 === 0){
        console.log(o)
    }
}

// Question-10
for( let c = 1; c < 101; c++){
    console.log(c)
    if(c % 7 === 0){
        break;
    }
}

//Question-11
for( let d = 1; d < 21; d++){
    if(d % 3 === 0){
        continue;
    }
    console.log(d)
}

//Question-12
let count = 0;
for(let e = 1; e < 101; e++){
    if(e % 2 === 1){
        count++;
        console.log(e)
    }
    if(count === 5) break;
}

//Question-13
let sums = 0;
for(let f = 1; f < 11; f++){
    sums = sums + f;
} console.log(sums);

//Question-14
for(let g = 20; g > 0; g--){
    console.log(g);
}

//Question-15
for( h = 1; h < 101; h++){
    if(h % 4 === 0){
        console.log(h);
    }
}

//Question-16
for(let j = 1; j < 11; j++){
    console.log("*".repeat(j));
}

//Question-17
let fac = 1;
for(let k = 1; k < 6; k++){
    fac = fac * k;
} console.log(fac);