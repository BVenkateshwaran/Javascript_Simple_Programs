let a = 1634;

// ! Armstrong Number

// ? An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

let n = a.toString()

let a1 = a;
let l = n.length;

console.log(`a = ${n} and length of ${n} = ${l}`);

let c = 1,sum=0;
while (a>0)
{
    let last = a%10;
    c = 1;
    for (let index = 1; index <= l; index++)
    {
        c = c * last;           
    }
    console.log(`Cube of ${last} = ${c}`);
    sum = sum+c;
    console.log(`Sum = ${sum}`);
    a = Math.floor(a/10);
}
if(a1 == sum)
{
    console.log(`${a1} is a Armstrong Number`);
}
else
{
    console.log(`${a1} is not a Armstrong Number`);
}