// Conditional statements - if,else,switch

let condition =true;

if(condition){
    console.log('This condition is true');
}else{
    console.log('This condition is false');
}

let value =2;

if(value===1){
    console.log('The value is 1.');
}else if(value===2){
    console.log('The value is 2.');
}else{
    console.log('The value is neither 1 or 2.');
}

let fruit ="apple";
switch(fruit){
    case "banana":
        console.log("it's a banana");
        break;
    case "apple":
        console.log("it's an apple");
        break;
    default:
    console.log("It's something else");  
}


// Looping For , While , Do...while , For...in , For...of

console.log('For loop...');

for(let i=1; i<=5; i++){
    console.log(i);
}

console.log('While loop...');

let counter =3;
while(counter >0){
    console.log(counter);
    counter--;
}

console.log('do...While Loop...');

let doWhileCounter = 2;

do{
    console.log(doWhileCounter);
    doWhileCounter--;
}
while(doWhileCounter>0);

console.log('For...in loop - Object iteration');

let person = {
    name: 'jhon',
    age: 30,
    job: 'developer'
}


for(let key in person){
    console.log(key +' : '+ person[key]);
}

console.log('For...of loop...');

let numbers = [1,2,3,4,5];
for(let num of numbers){
    console.log(num);
}

// Break and Continue statement
console.log('Break Statement:');

for(let i=1; i<=5; i++){
    if(i===3){
        break;
    }
    console.log(i);
}

console.log('Continue Statement:');

for(let i=1; i<=5; i++){
    if(i===3){
        continue;
    }
    console.log(i);
}