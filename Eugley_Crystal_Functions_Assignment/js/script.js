/**
 * Created by Ceugley on 1/26/15.
 */
// Crystal Eugley
// 1/26/2015
// Functions Assignment

// Must have two working functions one normal and one anonymous
// Arguments & Parameters are present and working in every function
// Return values are present and working in each of the functions
// At least one of the examples contains a function that has 3 parameters
// Main code variables are not used inside of functions
// At least 3 user prompts in code that are all correctly validated

// First we will calculate the surface area of a cube

var sideLength = prompt("Please enter the length of one side of the cube"); //prompting the user to enter the length of one side of the cube for the calculation
while(sideLength==="" || isNaN(sideLength)){
    sideLength = prompt("Please do not leave blank and only use numbers!\nPlease type in the length of one side");
} //testing to make sure that the user enters a number for the length of one side of the cube. If not then re-prompting the user to enter a number.

function calcArea(sideLength){
    var area = (6*sideLength)*2;
    return area;

}
var results = calcArea(sideLength);
console.log(results);

