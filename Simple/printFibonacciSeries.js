let n = 15;

let first = 1,second = 1;

console.log(first);
console.log(second);

let third = 0;

for (let index = 1; index < n; index++)
{
    third = first+second;

    console.log(third);
    
    first = second;
    second = third;
}