let year = 2015;

// ! Leap Year

// ? A leap year is a year that is divisible by 4, but not divisible by 100, unless it is also divisible by 400. 
// ? This means that a leap year occurs every 4 years, except for years that are divisible by 100 but not divisible by 400. 
// ? For example, the year 2000 was a leap year because it is divisible by 400, while the year 1900 was not a leap year because it is divisible by 100 but not by 400.

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{
    console.log(`${year} is a leap year.`);
}
else
{
    console.log(`${year} is not a leap year.`);
}