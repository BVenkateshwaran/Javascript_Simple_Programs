let n = 15;

// ! Fibonacci Series

// ? 0 1 1 2 3 5 8 13 21 34 55

// ^ The first two numbers of the Fibonacci series are 0 and 1 and each subsequent number is the sum of the previous two numbers. 

let first = 1,second = 1;

console.log(first);

console.log(second);

let third = 0;

for (let index = 1; index < n; index++)
{
    third = first+second;

    console.log(third);
    
    first = second;
    second = third;
}