/*
Crystal Eugley
1/19/2015
Conditionals Assignment
 */


var age = prompt("Please enter your age");
var height = prompt("Please enter your height in inches");
var weight = prompt("Please enter your weight in pounds");

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