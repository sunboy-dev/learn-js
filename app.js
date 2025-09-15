console.log("Hello Jinnie");
console.log("Hello Jinnie");
// alert("Hello Jinnie");

var name = "Jinnie";
console.log(name);
name = "John";
console.log(name);

var firstname = "John";
var lastname = "Smith";
console.log(firstname + " " + lastname);

var age = 30;
console.log(typeof name)
console.log(typeof age)
console.log(typeof true)

console.log(10 + 1)
console.log(10 - 2)
console.log(10 * 2)
console.log(0.99999999999999999 < 1)

{
    var globalX = 2;
    let blockY = 3;
    console.log(blockY);

}

var x = 20;
{
    var x = 100;
    let y = 15;
}
console.log(x)

var username = prompt("What is your name?")
document.getElementById("username").innerText = username;
let selectedNumber = prompt("Enter a number")
document.getElementById("buy-number").innerHTML = selectedNumber;
let lotto = Math.floor(Math.random() * 100)

document.getElementById("result").innerText = lotto;