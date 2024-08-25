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