/*
Crystal Eugley
1/19/2015
Conditionals Assignment
 */


var age = prompt("Please enter your age");
if(isNaN(age)){
    age = prompt("Please only enter numbers. What is your age!");
}
if(age === ""){
    age = prompt("Again, Please enter your age!")
}

var height = prompt("Please enter your height in inches");
if(isNaN(height)){
    height = prompt("Please only enter numbers. What is your age!");
}
if(height === ""){
    height = prompt("Again, Please enter your age!")
}
var weight = prompt("Please enter your weight in pounds");
if(isNaN(weight)){
    weight = prompt("Please only enter numbers. What is your age!");
}
if(weight === ""){
    weight = prompt("Again, Please enter your age!")
}

if(age < 21){
    console.log("You may NOT enter the bar! You are not old enough");
}else{
    console.log("You may Enter the bar!");}

if(weight < 100){
    console.log("You may NOT enter the bar! You don't weight enough");
}else{
    console.log("You may Enter the bar! You can hold your liquor!");
}

if(height < 60){
    console.log("You may NOT enter the bar! You are not tall enough");
}else{
    console.log("You may ENTER you can see over the bar!")
}
var numOfDrinks;

numOfDrinks = (weight >101 && weight <165) ? "You can have 4 drinks" : "You can have NO Drinks!";
console.log(numOfDrinks);