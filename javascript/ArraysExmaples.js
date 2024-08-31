let myArray = [1,2,3,4,5];
console.log('Array Length: ',myArray.length);
console.log('My Array: ',myArray);

myArray.push(6,7,9);
console.log("My array after push:" ,myArray);
console.log('MyArray Length: ',myArray.length);

let poppedElements = myArray.pop();
console.log('Popped Element' , poppedElements);
console.log("My array after pop:" ,myArray);
console.log('MyArray Length: ',myArray.length);

let shiftedlements = myArray.shift();
console.log('Shifted Element' , shiftedlements);
console.log("My array after shift:" ,myArray);
console.log('MyArray Length: ',myArray.length);

myArray.unshift(0 ,1);
console.log("My array after unshift:" ,myArray);
console.log('MyArray Length: ',myArray.length);

let secondArray = [8,9,10];
console.log("My array after concat:" ,myArray.concat(secondArray));
console.log('MyArray Length: ',myArray.length);

let joinedString = myArray.join(' | ');
console.log("Joined String" ,joinedString);

let slicedArray = myArray.slice(2,6);
console.log('Sliced Array',slicedArray);
console.log("My array after slice:" ,myArray);
console.log('MyArray Length: ',myArray.length);

let splicedArray = myArray.splice(2,3,"a","b","c");
console.log('Spliced Array',splicedArray);
console.log("My array after splice:" ,myArray);
console.log('MyArray Length: ',myArray.length);

// Iterate through the arrays

console.log('For loop iteration');
for(let i =0;i< myArray.length;i++){
    console.log(myArray[i]);
}

console.log("ForEach iteration");
myArray.forEach(element => console.log(element));

var mySplicedArray = myArray.splice(2,3,2,3,4);
console.log(myArray);

//let squaredValueArr = myArray.map(val = val * val);
//console.log('Squared Array',squaredValueArr);

let filteredEvenValuesArray = myArray.filter(num => num !=0 && num % 2 === 0);
console.log('Filtered Even Values Array'+filteredArray);

let sum = myArray((accumulator , currentvalue) => accumulator + currentvalue,0);
console.log("sum :"+ sum);



