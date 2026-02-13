let d = 12;

function decimalToBinary(n)
{
    let b = [];
    let binary=0;
    let i = 0;
    while(n!=0)
    {
        let r = n%2;
        b[i] = r;
        console.log(b);
        n = Math.floor(n/2);
        i++;
    }
    for(let j=i-1;j>=0;j--)
    {
        binary = binary*10 + b[j];
        console.log(binary);
    }
    return binary;
}

let b = decimalToBinary(d);
console.log(`Decimal ${d} = ${b} Binary`);