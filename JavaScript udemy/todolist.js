[]
let input = prompt("what would you like to do?");
const todos = ["collect eggs", "clean litter box"];
while(input != 'Quit' && input != 'q') {
    if (input === 'list') {
        console.log('*************')
        console.log("********")
    }
    input = prompt("what would you like to do?")
}
console.log("Okay ,QUit the app ")