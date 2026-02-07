let n = 145;

function findFactorial(num)
{
    let factorial = 1;
    for(let i=num;i>0;i--)
    {
        factorial = factorial * i;
    }
    return factorial;
}

let sum = 0;
let temp = n;

while(temp > 0)
{
    let rem = temp % 10;
    sum = sum + findFactorial(rem);
    temp = Math.floor(temp/10);
}

if(sum == n)
{
    console.log(`${n} is a strong number`);
}
else
{
    console.log(`${n} is not a strong number`);
}