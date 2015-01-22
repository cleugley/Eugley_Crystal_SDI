/*
Crystal Eugley
1/19/2015
Conditionals Assignment
 */


var age = prompt("Please enter your age"); //Prompting the user to enter their age
if(isNaN(age)){
    age = prompt("Please only enter numbers. What is your age!");
} //Checking to make sure that the user actually entered a number for their age. And re-prompting if necessary.
if(age === ""){
    age = prompt("Again, Please enter your age!")
} //Checking to make sure tha the user didn't leave this field blank.  And re-prompting if necessary.

var height = prompt("Please enter your height in inches"); //Prompting the user to enter their height
if(isNaN(height)){
    height = prompt("Please only enter numbers. What is your age!");
}//Checking to make sure that the user actually entered a number for their height. And re-prompting if necessary.
if(height === ""){
    height = prompt("Again, Please enter your age!")
}//Checking to make sure that the user actually entered something and didn't leave the field blank.  And re-prompting if necessary.

var weight = prompt("Please enter your weight in pounds"); //Prompting the user to enter their weight
if(isNaN(weight)){
    weight = prompt("Please only enter numbers. What is your age!");
}//Checking to be sure that the user entered a number for their weight. And re-prompting if necessary.
if(weight === ""){
    weight = prompt("Again, Please enter your age!")
}//Checking to make sure that the user did not leave this field blank. And re-prompting if necessary.

if(age < 21){
    console.log("You may NOT enter the bar! You are not old enough");
}else{
    console.log("You may Enter the bar!");} //This is checking to make sure that he user is over the age of 21 and able to enter the bar

if(weight < 100){
    console.log("You may NOT enter the bar! You don't weight enough");
}else{
    console.log("You may Enter the bar! You can hold your liquor!");
} //This conditional statement is checking the weight to see if they will be able to hold their liquor. If they don't meet the requirement they will not be allowed to enter the bar.

if(height < 60){
    console.log("You may NOT enter the bar! You are not tall enough");
}else{
    console.log("You may ENTER you can see over the bar!")
}//This conditional statement is verifying that they are tall enough to see over the bar counter if so they can enter the bar.
var numOfDrinks;

numOfDrinks = (weight >101 && weight <165 + age) ? "You can have 4 drinks" : "You can have NO Drinks!";
console.log(numOfDrinks);//This is the number of drinks that the person will be allowed if they fall in the weight restricted category. If they are outside the weight restriction they cannot drink in the bar.

var notAllowed;
notAllowed = (age>21 && weight >100 && height >60) ? "Come on in and have a drink" : "You do not meet one of our requirements...You are not allowed in our bar!";
alert(notAllowed);//Sending an alert to the user telling them that they can either enter the bar and have a drink or if they do not meet all of the requirements for my bar.