let n = 6;

// ! Find factorial of a number
// ? Ex : 5! = 5*4*3*2*1 = 120

let factorial = 1;
for(let i=n;i>0;i--)
{
    factorial = factorial * i;
}
console.log(`Factorial of ${n} = ${factorial}`);