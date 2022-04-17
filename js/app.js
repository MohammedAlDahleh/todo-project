' use strict ' ;
var name = prompt  ("Please enter his/her name ?");
var gender =  prompt ("Please enter you are his/her ?");
var age;
if (gender.toLowerCase === "his")
{
    console.log ("Your gender is Male" );
    
}else if (gender.toLowerCase === "her")
{
    console.log("Your gender is Female");
}else{
    console.log("Undefined");
}
age = prompt ("Please enter his/her your age ?")

if (age <= 0)
{
    console.log(`Your age is : ${age}`);
    alert(`Your age is : ${age}`);
    
}
confirm("Do you want to Skip welcome message?")
if (gender.toLowerCase ==="his")
{
alert(`Welcome Mr ${name}`);
}else if (gender.toLowerCase === "her")
{
    alert(`Welcome Ms ${name}`);
}else{
    alert("Welcome")
}


