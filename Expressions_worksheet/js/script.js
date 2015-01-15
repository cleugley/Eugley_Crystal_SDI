/**
 * Created by Ceugley on 1/15/15.
 */
// Crystal Eugley, 1/15/2015, Expressions_Worksheet

//Calculate the area of a rectangle given the width and height of the rectangle
var width = 10;
var height = 5;

// results for area of a rectangle is width times height
var area = width * height;

console.log("The area of the rectangle is" + " " + area);

// Problem: Dog Years
// Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in "dog years." Calculate how old Sparky the pit bull is in dog years based on his actual age.

var sparkysAge = 1;
var humanYears = 7;  //Number of years to one dog year

var age = sparkysAge * humanYears;

console.log("Sparky is " + age + " " + "human years old which is " + sparkysAge + " " + "in dog years.");

// Problem 2: Slice of Pie Part 1

var slices = 10;
var people = 12;
var pizzas = 6;

var slicesPerPerson = pizzas * slices/people;

console.log("Each person ate " +slicesPerPerson+ " " + "slices of pizza at the party.");

//Problem 3: Slices of Pie Part II

var leftOver = slices*pizzas - slicesPerPerson*people;

console.log("Sparky got " +leftOver+ " "+ "slices of pizza.");