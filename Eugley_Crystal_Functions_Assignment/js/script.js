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

var sideLength = prompt("We are going to calculate the area of your cube. \nPlease enter the length of one side of the cube"); //prompting the user to enter the length of one side of the cube for the calculation
while(sideLength==="" || isNaN(sideLength)){
    sideLength = prompt("Please do not leave blank and only use numbers!\nPlease type in the length of one side");
} //testing to make sure that the user enters a number for the length of one side of the cube. If not then re-prompting the user to enter a number.

function calcCube(sideLength){
    var area = (6*sideLength)*2;
    return area;

}//Computing the calculation using the user input of the side of the cube. This function will return the area result to the main code.
var cubeResults = calcCube(sideLength);//catching the return area data
console.log(cubeResults); //Printing the results to the console from the users input


// Second we will calculate the surface area of a sphere

var radius = prompt ("We are going to calculate the area of your sphere now. \nPlease enter the radius of your sphere."); //prompting the user to enter the length of one side of the cube for the calculation of their sphere.

while(radius==="" || isNaN(radius)){
    radius = prompt("Please do not leave this blank and only use numbers. \nPlease type in the length of one side");
} //testing to make sure that the user enters a number for the radius of their sphere. If not then this will keep re-prompting the user until they do enter a number.

//Calculating the surface area of the users sphere
function calcSphere(radius){
    var sphereArea = Math.round((4*3.14*radius)*2);
    return sphereArea;
}
var sphereResults=calcSphere(radius);
console.log(sphereResults);

//Third we will calculate the surface area of a right rectangular prism for the user

var recLength = prompt("We are going to calculate the surface area of your rectangular prism. \n Please enter the length");
while(recLength==="" || isNaN(recLength)){
    recLength = prompt("Please do not leave this blank and only use numbers. \nPlease type in the length!");
} //testing to make sure that the user enters a number for the length. If not then this will keep re-prompting the user until they do enter a number.


var recWidth = prompt("Please enter the width of your rectangular prism.");
while(recWidth==="" || isNaN(recWidth)){
    recWidth = prompt("Please do not leave this blank and only use numbers. \nPlease type in the width!");
} //testing to make sure that the user enters a number for the width. If not then this will keep re-prompting the user until they do enter a number.


var recHeight = prompt("Please enter the height of your rectangular prism.");
while(recHeight==="" || isNaN(recHeight)){
    recHeight = prompt("Please do not leave this blank and only use numbers. \nPlease type in the height!");
} //testing to make sure that the user enters a number for the height. If not then this will keep re-prompting the user until they do enter a number.
