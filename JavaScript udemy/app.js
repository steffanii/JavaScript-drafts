/* if (1 + 1 === 2) {
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
    if (password.indexOf(' ') === -1) {
        console.log(" Valid Password")
     } else {
        console.log('password cannot contain spaces')
     }
    
 } else {
    console.log("password too short")
  }


let userinput = prompt("enter name")

if (userinput) {
    console.log("truthy")
} else {
    console.log("falsy")
} 

const password = prompt("Enter password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid password!!")
} else {
    console.log("Incorrect format")
}  


const age = 90;
if (age < 5 || age >=65)  {
    console.log("FREE")
} 

let firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("enter your first name");
} */


let days = ['Monday', 'Tuesday', 'wednesday'];
days.length
days[0]
days[0][1]
days[2]= "Thurday"
days
let movieLine = ["Tom", "Nancy"]
movieLine.push("Oliver")
movieLine.push("Eva", "harry")
movieLine.pop()
movieLine
movieLine.shift()
movieLine.unshift("VIP")
movieLine
let cats = ["blue",'kitty']
let dogs = ['rusty', 'wyatts']
cats.concat(dogs)
cats.includes('blue')
cats.reverse()