let start = 1;
let end = 100;

function isPrime(n)
{
    if(n<=1)
    {
        return false;
    }
    else
    {
        for(let i = 2;i<n;i++)
        {
            if(n%i == 0)
            {
                return false;
            }
        }
    }
    return true;
}

function printPrime(start,end)
{
    for(let s = start;s<=end;s++)
    {
        if(isPrime(s))
        {
            console.log(s);
        }
    }
}

printPrime(start,end)