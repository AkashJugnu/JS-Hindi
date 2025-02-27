let score = "33abs"

//console.log(typeof score); // number    
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); // 33

//console.log(valueInNumber); // NaN

// NOTES:
// typeof - returns the type of the variable
// typeof() - returns the type of the value

// Number() - converts the value to a number
// null - 0
// undefined - NaN
// true - 1
// false - 0
// " " - 0
// "abc" - NaN
// "123" - 123
// "123abc" - NaN
// "abc123" - NaN
// "123.45" - 123.45
// "123.45abc" - NaN
// "abc123.45" - NaN
// "123.45abc123.45" - NaN
// "abc123.45abc123.45" - NaN
// "123.45abc123.45abc" - NaN
// "abc123.45abc123.45abc" - NaN
// "123.45abc123.45abc123.45" - NaN
// "abc123.45abc123.45abc123.45" - NaN
// "123.45abc123.45abc123.45abc" - NaN


let isLoggedIn = " ";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// " " => false; "abc" => true
// "123" => true; "abc123" => true
// "123.45" => true; "abc123.45" => true

let someNumber = 33;

let stringSomeNumber = String(someNumber);

console.log(stringSomeNumber); // "33"
console.log(typeof stringSomeNumber); // typeof 33 is string 