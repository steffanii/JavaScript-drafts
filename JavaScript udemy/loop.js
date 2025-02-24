/* console.log(1)
console.log(2)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10) 


for(let i=1; i<=10; i++) {
    console.log(i);
} 

for(i=0; i<=20; i +=2) {
    console.log(i) 
} 
for(i=100; i>=0; i-=10) {
    console.log(i)
} 

animals = ["lion", "Giraffe", "cats", "Dogs" ]
for(let i=0; i <= animals.length; i++) {
    console.log(i,  animals[i])
}

animals = ["lion", "Giraffe", "cats", "Dogs" ]
for(let i= animals.length -1; i>=0 ; i--) {
    console.log(i, animals[i])
}
for (let i = 0; i <=10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`   j is: ${j}`)
    }
} 


 const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', "Erika"]
 ]   
 for (let i= 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW ${i +1}`)
    for (let j=0; j < row.length; j++)
        console.log(row[j])
 }    
let count = 0
while (count < 10) {
    console.log(count)
    count++;
}  


for (let row of seatingChart) {
    for (let student of row) {
        console.log(students);
    }
}
 const Secret = "BabyHippo";

let guess = prompt("Enter the secret code");
while (guess !== Secret) {
    guess = prompt("Enter the secret code");
}
console.log("Congrats, you have gotten the secret code")

let input = prompt("Hey, say something")
while (true) {
    input = prompt(input) ;
    if(input === "stop copying me") break;
}
console.log("Okay you win!")   

let maximum = parseInt(prompt("Enter the maximum number "))
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));

}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseint(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess ==="q") break;
    attempt ++;
    if (guess > targetNum) {
        guess =parseInt(prompt("Too high! Enter a new guess"));
    } else {
        guess =parseInt(prompt("Too Low! Enter a new guess"));
    }
}

if (guess ==="q") {
    console.log("Ok, YOU QUIT!")
} else {
    console.log("YOU GOT IT")
    console.log(`You got! it took you ${attempts} guesses`)
} 


const subreddits = ["Cringe", "books", "Chicken", "funny", "pics", "Soccer"]

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (let sub of subreddits) {
    console.log(sub)
}   

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE
for (let num of numbers) {
    product = num * num;
    console.log(product)
} }

const testScores = {
    keenan: 80,
    Damian: 76,
    kim: 90,
    marlon: 56,
    vonnie:60,

}
/*
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

Object.keys(testScores)
Object.values(testScores)
Object.entries(testScores) 

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
   
}
console.log(total/ scores.length) */

