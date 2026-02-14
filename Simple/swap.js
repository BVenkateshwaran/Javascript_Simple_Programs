let a = 10;
let b = 20;

// ! Swapping two numbers without using a temporary variable

console.log(`Before Swapping: a = ${a} and b=${b}`);

a = a+b;
b = a-b;
a = a-b;

console.log(`After swapping: a = ${a} and b=${b}`);