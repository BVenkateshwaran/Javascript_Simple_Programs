let n = 12345;

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