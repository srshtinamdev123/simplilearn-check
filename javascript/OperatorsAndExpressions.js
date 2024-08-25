// Operators and Expressions

// Airthmatic operators

let num1 = "10";
let num2 = 10;

let additionalResult = num1+num2;
console.log('Addition Result -',additionalResult);

let substractionResult = num1+num2;
console.log('substractionResult Result -',additionalResult);

let multiplicationResult = num1*num2;
console.log('multiplicationResult Result -',multiplicationResult);

let divisionResult = num1/num2;
console.log('divisionResult Result -',divisionResult);

let modulusResult = num1%num2;
console.log('modulusResult Result -',modulusResult);

// Comparison Operator

let isEqual = num1 === num2;
console.log('isEqual Result -',isEqual);

let isNotEqual = num1 !== num2;
console.log('isNotEqual Result -',isNotEqual);

let greaterThanOrEquals = num1>=num2;
console.log('greaterThanOrEquals Result -',greaterThanOrEquals);

let lessThanOrEquals = num1<=num2;
console.log('lessThanOrEquals Result -',lessThanOrEquals);

// logical operators

let andOperator = (num1 >0) && (num2 >0);
console.log('andOperator Result -',andOperator);

let orOperator = (num1 >0) || (num2 >0);
console.log('orOperator Result -',orOperator);

let notOperator = !(num1 >0);
console.log('notOperator Result -',notOperator);

// Operator Precedence and associativity

num1 =-2;
num2 =10;
let precedenceResult = num1+num2*3;
console.log('precedenceResult Result -',precedenceResult);

let associativityResult = num1-num2+5;
console.log('associativityResult Result -',associativityResult);

// Expression

let expressionResult1 = num1 *(2 + num2)/2;
console.log('expressionResult1 Result -',expressionResult1);

let expressionResult2 = (num1 +num2) * (num2 -num1);
console.log('expressionResult2 Result -',expressionResult2);

// Bitwise operators

let bitwiseAnd = num1 & num2;
console.log('bitwiseAnd Result -',bitwiseAnd);

let bitwiseOr = num1 | num2;
console.log('bitwiseOr Result -',bitwiseOr);

let bitwiseXor = num1 ^ num2;
console.log('bitwiseXor Result -',bitwiseXor);

let bitwiseNot = ~num1;
console.log('bitwiseNot Result -',bitwiseNot);

let leftShift = num1 << 1;
console.log('leftShift Result -',leftShift);

let rightShift = num1 >> 1;
console.log('rightShift Result -',rightShift);

// Ternary operators

num1 = 20;
num2 = 10;

let ternaryResult = num1 > num2 ? "Number 1 is greater" : "Number 2 is greater";
console.log('ternaryResult Result -',ternaryResult);