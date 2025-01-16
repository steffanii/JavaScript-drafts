if (1 + 1 === 2) {
    console.log("MATH STILL WORKS")
}
let random = Math.random();
if (random > 0.5) {
    console.log(random, "YOUR NUMBER IS GREATER THAN 0.5!!")
    console.log(random);
}

const dayofweek = 'Wednesday';

if (dayofweek === 'Monday') {
    console.log("I HATE MONDAYS")
} else if (dayofweek === 'Saturday') {
    console.log("YAY I LOVE SATURDAY")
} else {
    console.log("MEH")
}
const dayofWeek = prompt('enter a day!') .toLowerCase();

if (dayofWeek === 'monday') {
    console.log("I HATE MONDAYS")
} else if (dayofWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAY")
} else {
    console.log("MEH")
}
 const password = prompt("imput your password!");
 if (password.length >= 6 ) {
    console.log("Password is long")
 } else {
    console.log("password too short")
 }