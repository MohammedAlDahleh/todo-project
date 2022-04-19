' use strict ';
var name = prompt  ("Please enter his/her name ?");
console.log("Your name :" + name);
var gender =  prompt ("Please enter your gender his/her ?");
console.log("Your gender : " + gender);
var age;
if (gender === "his")
{
    console.log ("Your gender is Male" );
    
}else if (gender === "her")
{
    console.log("Your gender is Female");
}else{
    console.log("Undefined");
}
age = prompt (`Please enter ${gender} your age ?`)
console.log("Your Age :" + age);

if (age <= 0)
{
    
    alert(`Your age is : ${age}`);
    
}
confirm("Do you want to Skip welcome message?")
if (gender === "his")
{
alert(`Welcome Mr ${name}`);
}else if (gender === "her")
{
    alert(`Welcome Ms ${name}`);
}else{




let kurs = prompt("Are you in class bushra (yes/no) ?");

let kurs1 = prompt("do you like JS (yes/no) ?");

let help = prompt("do need any help (yes/no) ?");

let answersArray = [];

function checkAnswers(answer) {
    if (answer === "") {
        answersArray.push("invalid");
    }else if (answer.toLowerCase() === "yes") {
        answersArray.push("yes");
    }else if (answer.toLowerCase() === "no"){
        answersArray.push("no");
    }
}
checkAnswers(kurs);
checkAnswers(kurs1);
checkAnswers(help);

function printAnswers(){
    for (let i = 0; i < answersArray.length; i++) {
        console.log(answersArray[i]);
    }
}
printAnswers();

