let n = 28;
// ! Check if the number is a Perfect Number or not.
function isPerfect(n)
{
    if (n<=1)
    {
        return false;    
    }
    else
    {
        let sum = 0;
        for(let i=1;i<n;i++)
        {
            if(n%i == 0)
            {
                sum = sum+i;
            }
        }
        if(sum == n)
        {
            return true;
        }
        else
            return false;
    }
}

if (isPerfect(n)) {
    console.log(`${n} is a perfect number.`);
}
else
{
    console.log(`${n} is not a perfect number.`);
}