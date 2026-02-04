let n = 12345;

// ! Digital Sum of a number
// ? The digital sum of a number is the sum of all its digits.
// * For example, the digital sum of 12345 is 1 + 2 + 3 + 4 + 5 = 15.

let sum=0;
let l=0;
let n1 = n;
while(n>0)
{
    l = n%10;
    sum = sum+l;
    n = Math.floor(n/10);
}
console.log(`The Digital Sum of ${n1} is: ${sum}`);