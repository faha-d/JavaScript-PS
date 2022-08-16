/*
CHAPTER 1
let a = alert("Thanks For Your Input");
 console.log(a);
let b = window.alert("Thanks For Your Input");
*/

/*
CHAPTER 2
var guyWhoKeepsSayingHisOwnName = "Fahad";
var nationality;
nationality = "Pakistani";
console.log(guyWhoKeepsSayingHisOwnName);
console.log(nationality);
*/

/*
CHAPTER 3
var weight = 150;
weight + 50;
console.log(weight);
let originalNumber = 23;
let numToBeAdd = 7;
let newNumber = originalNumber + numToBeAdd;
console.log(newNumber);
let originalNumber1 = "23";
let numToBeAdd1 = 7;
let newNumber1 = originalNumber1 + numToBeAdd1;
console.log(newNumber1);
*/

/*
CHAPTER 4
let 1fahad = "Ali" ;   //That is Illegal
let Fahad1 = "Ali";  //That is Legal
*/

/*
CHAPTER 5
let num = 10;
let anotherNum = 200;
let sum = num + anotherNum;
console.log(sum);
let num1 = 12;
let sum1 = num1 * 100;
console.log(sum1);
*/

/*
CHAPTER 6
let num2 = 1;
num2 = num2++;
console.log(num2);
let num3 = 6;
num3 = --num3;
console.log(num3);
*/

/*
CHAPTER 7
let totalCost = 1 + 3 * 4;
console.log(totalCost);
let totalCost1 = 1 + (3 * 4)
console.log(totalCost1);
resultOfComputation = (2 * 4) * (4 + 2);
console.log(resultOfComputation);
*/

/*
CHAPTER 8
let userName = "Fahad";
let message = "Thanks"
let banger = "!"
let custom = message + " " + userName + " " + banger
console.log(custom);
*/

/*
CHAPTER 9
let  spec = prompt("Your species?", "human");
let species = "Your species?"
let defaultMsg = "human"
let msg = prompt(species , defaultMsg);
let numberOfCats = prompt("How many cats?");
let tooManyCats = numberOfCats + 1;
*/

/*
CHAPTER 10
let ask = prompt("Where do you live?");
if (ask === "pakistan") {
  console.log("Correct");
}
*/

/*
CHAPTER 11
let fullName = prompt("Enter Your Name");
let firstName = "Muhammad Fahad";
if (fullName === firstName){
  console.log("Hi!" + " " + fullName)
}
let yourTicketNumber = 487205;
if (yourTicketNumber !== 487208) {
  alert("Better luck next time.");
}
*/

/*
CHAPTER 12
let ask = prompt("Where do you live?");
if (ask === "pakistan") {
  console.log("Correct");
}
else if (ask === "India"){
  console.log("Okay")
}
else{
  console.log("InCorrect");
}
*/

/*

CHAPTER 13
if (weight > 300 && time < 6) {
  alert("Come to our tryout!");
} else {
  alert("Come to our cookout!");
}

if (weight > 300 && time < 6 && age > 17 && gender === "male") {
  alert("Come to our Gym!");
} else {
  alert("Come to our Club!");
}

if (pos > 15 || gpa > 2.5 || sport === "cricket") {
  alert("Welcome to Pakistani  Team!");
} else {
  alert("Sorry You are not Eligible.");
}
*/

/*
CHAPTER 14
if ((x === y || a === b) && c === d) {
  g = h;
} else {
  e = f;
}

if(a === b){
  if(y === z){
    g = h;
  }
  else if(a === b){
    h = g;
  }
  else{
    e = f
  }
}
else{
  f = e;
}
*/

/*
CHAPTER 15
let cities = ["Karachi", "Kashmir", "Peshawar", "Lahore", "Multan", "Islamabad"];
console.log(cities[2]);
let pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "mouse";
pets[3] = "fish";
pets.pop();
pets.push("lion");
*/

/*
CHAPTER 16
pets.shift();
pets.unshift("bird");
pets.splice( 2 , 0,"Elephant")
let slce = pets.slice(1 ,4);
*/

/*
CHAPTER 17
let cities = [
  "Karachi",
  "Kashmir",
  "Peshawar",
  "Lahore",
  "Multan",
  "Islamabad",
];
for (let i = 0; i <= 5; i++) {
  if (cityToCheck === cities[i]) {
    console.log("Its one of the cleanest cities");
  } else {
    console.log("Its not on the list");
  }
}
*/

/*
CHAPTER 19
var matchFound = false;
for (var i = 0; i <= 4; i++);
if (cityToCheck === cleanestCities[i]) {
  matchFound = true;
  alert("It's one of the cleanest cities");
}
if (matchFound === false) {
  alert("It's not on the list");
}
*/

/*
var matchFound = false;
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}
*/

/*
CHAPTER 20
let firstNames = ["Muhammad", "Muhammad", "Abdul", "Haroon"];
let lastNames = ["Fahad", "Talha", "Rafay", "Arif"];
let fullNames = [];
for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
    
  }
}
*/

/*
CHAPTER 21
let fullName = prompt("enter your name")
fullName = fullName.toLowerCase();
let firstNames = ["Muhammad", "Muhammad", "Abdul", "Haroon"];
for (let i = 0; i <= 3; i++){
if(fullName === firstNames[i]){
  console.log("Hi" + fullName);
}
}
*/

/*
CHAPTER 22
let names = "Boston";
let firstChar = cityToCheck.slice(0, 1);
let otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
let cappedCity = firstChar + otherChars;

let month = prompt("Enter month");
let monthChar = month.length;
if(monthChar > 3){
   monthAbbr = month.slice(0 , 3)
   console.log(monthAbbr)
}

let str = prompt("Enter Anything");
let num = str.length;
for(let i = 0; i < num; i++){
  if(str.slice(i, i + 2 ) === " "){
    console.log("No double spaces allowed0");
    break;
  }
}
*/

/*
CHAPTER 23
let firstChar = text.indexOf("World War II")
if(firstChar !== -1){
  text = text.slice(0 , firstChar) + "Second World War" + text.slice(firstChar + 12)
}
let text = "To be or not to be.";
let segIndex = console.log(text.lastIndexOf("be"));
*/

/*
CHAPTER 24
var firstChar = firstName.charAt(0);
var lastChar = names.charAt(names.length - 1);
for (let i = 0; i < Text.length; i++) {
  if (Text.charAt[i] === "!") {
    console.log("Exclamation mark found");
    break;
  }
}
*/

/*
CHAPTER 25
text = text.replace("World War II", "the Second World War");
text = text.replace(/World War II/g, "the Second World War");
*/

/*
CHAPTER 26 
let num = Math.round(num);
let num2 = Math.round(15.6);
let num3 = Math.ceil(.0001)
let num4 = Math.floor(0.9)
*/

/*
CHAPTER 27
let randomNo = Math.random(); 
*/

/*
CHAPTER 28
let currentAge = prompt("Enter your age.");
let qualifyingAge = parseInt(currentAge) + 1;
console.log(qualifyingAge);
let myFractional = parseInt("9.5")
console.log(myFractional)
*/

/*
CHAPTER 29
let x = prompt("Enter number");
x = Number(x)
x = x.toString();
*/
/*
CHAPTER 30
let prettyTotal = total.toFixed();
*/

/*
CHAPTER 31 & 32
let now = new Date();
let day = now.getDay();
let daymonth = now.getDate()
let month = now.getMonth();
let year = now.getFullYear();
let hrs = now.getHours();
let mins = now.getMinutes();
*/

/*
CHAPTER 33 & 34 
let now = new Date("24,October 2004")
let now1 = new Date();
now1.setFullYear(2022);
*/

/*
CHAPTER 35
function time() {
  let now = new Date();
  let hrs = now.getHours();
  let mins = now.getMinutes();
  console.log("Time:" + " " + hrs + " " + mins)
}
time();
*/

/*
CHAPTER 36
function gender(greet) {
  console.log(greet);
}
gender("Fahad");

function add(a,b,c) {
  console.log(a + b + c);
}
add(5,5,5);
*/
/*
CHAPTER 37 & 38
function calcTot(merchTot) {
  let orderTot;
  if (merchTot >= 100) {
    orderTot = merchTot;
  } else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
  } else {
    orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
  }
  return orderTot;
}

function add(a,b) {
  return a + b;
}
console.log(add(5,5));
*/

/*
CHAPTER 39 & 40
switch (dayOfWk) {
  case "Sat":
    alert("Whoopee");
    break;
  case "Sun":
    alert("Whoopee");
    break;
  case "Fri":
    alert("TGIF!");
    break;
  default:
    alert("Shoot me now!");
}
*/

/*
CHAPTER 42 & 43
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++
} while (j > 5 );
*/

/*
CHAPTER 44
<script>
 function sayHi() {
 alert("Hello world!")
 }

 function sayBye() {
 alert("Buh-bye!");
 }
 </script>
*/

/*
CHAPTER 45
<a href="#" onClick="alert('Hi');">Click</a>
*/

/*
CHAPTER 46
<a href="JavaScript:void(0)" onClick="var greet="hi'; alert(greet);">Click</a>
*/

/*
CHAPTER 47
<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"></img>
<p id="loris" onMouseover="expand();">Slow Loris: Mouse over for more info</p>
onMouseout="src='before-pic.jpg'">
*/

/*
CHAPTER 48
<input type="text" size="30" onFocus="this.style.backgroundColor='yellow';">
onBlur="this.style.backgroundColor='white';">
*/

/*
CHAPTER 49
<form onSubmit="checkAddress('email');">
function checkAddress(fieldId) {
 if (document.getElementById(fieldId).value === "") {
 alert("Email address required.");
 }
 }
*/

/*
CHAPTER 50
<form>
ZIP:<br>
<input type="text" id="zip" onBlur="fillCity();"><br>
City:<br>
<input type="text" id="city">
</form>

function fillCity() {
 var cityName;
 var zipEntered = document.getElementById("zip").value;
 switch (zipEntered) {
 case "60608" :
 cityName = "Chicago";
 break;
 case "68114" :
 cityName = "Omaha";
 break;
 case "5321
 }
 document.getElementById("city").value = cityName;
}
*/


