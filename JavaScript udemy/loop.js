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
const Secret = "BabyHippo";

let guess = prompt("Enter the secret code");
while (guess !== Secret) {
    guess = prompt("Enter the secret code");
}
console.log("Congrats, you have gotten the secret code")
*/

let input = prompt("Hey, say something")
while (true) {
    input = prompt(input) ;
    if(input === "stop copying me") break;
}
console.log("Okay you win!")