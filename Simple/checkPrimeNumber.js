let n = 7;

// ! Check if a number is prime or not
// ? A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. 
// ? In other words, a prime number has exactly two distinct positive divisors: 1 and itself.

function isPrime(n)
{
    if(n<=1)
    {
        return false;
    }
    for(let i=2;i<n;i++)
    {
        if(n%i == 0)
        {
            return false;
        }
    }
    return true;
}

if(isPrime(n))
{
    console.log(`${n} is a Prime Number`);
}
else
{
    console.log(`${n} is not a Prime Number`);
}