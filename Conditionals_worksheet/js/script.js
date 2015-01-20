/**
 * Created by Ceugley on 1/19/15.
 */
//Crystal Eugley, 1/19/1983, Conditionals Worksheet

//Problem 1: A driver has to determine if they can make it across the desert with their current fuel. They are about to pass the last gas station for the next 200 miles and they need to determine whether they should sop now for gas or not.
//Given: Gas efficiency of the car (in mpg); Gauge reading of the gas tank (in %); Car's gas tank capacity (in gallons)
// Result to Print Out; "Yes, you can make it without stopping for gas!" or "You only have X gallons of gas in your tank, better get gas now while you can!"


var fuelEfficiency = 25;
var gaugeReading = .5;
var gallonsPerTank = 14;
var milesLeft = (gallonsPerTank*gaugeReading)*fuelEfficiency;

if(gaugeReading < .5 && milesLeft < 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + gallonsPerTank*gaugeReading + " gallons of gas in your tank, better get gas now while you can!");
}

