/**
 * Created by Ceugley on 1/19/15.
 */
//Crystal Eugley, 1/19/1983, Conditionals Worksheet

//Problem 1: A driver has to determine if they can make it across the desert with their current fuel. They are about to pass the last gas station for the next 200 miles and they need to determine whether they should sop now for gas or not.
//Given: Gas efficiency of the car (in mpg); Gauge reading of the gas tank (in %); Car's gas tank capacity (in gallons)
// Result to Print Out; "Yes, you can make it without stopping for gas!" or "You only have X gallons of gas in your tank, better get gas now while you can!"


var fuelEfficiency = 25; //miles per gallon of the vehicle
var gaugeReading = .5; // how full is the gas tank
var gallonsPerTank = 14; // how many gallons can the gas tank hold
var milesLeft = (gallonsPerTank*gaugeReading)*fuelEfficiency; //how many miles can be driven on the fuel remaining in the gas tank

if(gaugeReading < .5 && milesLeft < 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + gallonsPerTank*gaugeReading + " gallons of gas in your tank, better get gas now while you can!");
}

//Problem 2: A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter grade for that number using conditional statements.
//Given: Grade (in percent)
//Result To Print Out: "You have a X%, which means you have earned a(n) X in the class!

var gradePercent = 85;
//Grade Scale: A = 100-90 B = 89-80 C= 79-70 D = 69-60 F = 59-0

var A = (gradePercent > 90);
var B = (gradePercent < 89 && gradePercent> 90);
var C = (gradePercent < 79 && gradePercent> 70);
var D = (gradePercent < 69 && gradePercent> 60);
var F = (gradePercent < 59 && gradePercent > 0);

if(){
    console.log("You have a " +gradePercent + " , which means you have earned a(n)" +  + "in the class!");
}

