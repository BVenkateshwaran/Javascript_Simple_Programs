let n = 7;

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