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
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
colors.slice(2, 5)    /* (start point(included), endpoint(not included))  */
colors.slice(-4)
colors.splice(5,1)  /* (startpoint, howmany you want to delete) */
colors.splice(1,0,'red-orange') /* AT INDEX 1 insert red-orange and delete 0(nothing) */
let sccores = [ 1,50,2500,6,-12, 89]
scores.sort()
const nums = [1,2,4]
nums.push(5)  /* This will work for arrays but if you try creating a new num , it wont work*/
const gameboard = [['X', 'O', 'X'], ["O", null, "X"], ['O', 'O', 'X']]
gameboard[1][1]
typeof []
const person = {firstname: "Nick", lastname: "Jagger"}
const kitchenSink = {
    favNum : 92902244,
    isFunny : true,
    colors : ["red", "orange"]
}
person["lastname"]
kitchenSink["colors"] /* OR */
person.firstname
const midterm= {Danielle : 96, Thomas : 78}
midterm.Thomas = 80;
midterm.Antonio = 45;
midterm["ezra"] = 65;  

const comments = [
    {username : "Tammy", text: "lololol", votes: 9},
    {username: "FishBol", text: "glubglub", votes: 1245}
]
comments[1].text