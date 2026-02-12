let n = 1100;

let r=0,i=0,d=0,n1=n;

while(n!=0)
{
    r = n%10;
    n = Math.floor(n/10);
    d += r*Math.pow(2,i);
    i++
}

console.log(`Binary ${n1} = ${d} Decimal`);
