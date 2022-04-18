/*' use strict ' ;
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
    alert("Welcome")
}
alert ("hello");*/