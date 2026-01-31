// let a = 36985;
let a = 5322338;

let s1 = 0;
let s2 = 0;
let a1 = a;
s1 = s1+a%10;
a = Math.floor(a/10);
console.log(`s1 : ${s1}, s2 : ${s2} and a : ${a}`);

while (a>9)
{
    s2 = s2+a%10;
    a = Math.floor(a/10);
    console.log(`s1 : ${s1}, s2 : ${s2} and a : ${a}`);
}

s1 = s1+a;
console.log(`s1 = ${s1} and s2 = ${s2}`);
if (s1==s2) {
    console.log(`The number ${a1} is a Xylum number`);
} else {
    console.log(`The number ${a1} is a Phloen number`);
}