/**
 * Created by Ceugley on 1/26/15.
 */
// Crystal Eugley
// 1/26/2015
// Functions Assignment

// Must have two working functions one normal and one anonymous -- Check
// Arguments & Parameters are present and working in every function ---Check
// Return values are present and working in each of the functions -- Check
// At least one of the examples contains a function that has 3 parameters ----Check
// Main code variables are not used inside of functions --- Check
// At least 3 user prompts in code that are all correctly validated --- Check

// First we will calculate the surface area of a cube

var sideLength = prompt("We are going to calculate the area of your cube. \nPlease enter the length of one side of the cube"); //prompting the user to enter the length of one side of the cube for the calculation
while(sideLength==="" || isNaN(sideLength)){
    sideLength = prompt("Please do not leave blank and only use numbers!\nPlease type in the length of one side");
} //testing to make sure that the user enters a number for the length of one side of the cube. If not then re-prompting the user to enter a number.

var calcCube = function(cubeSideLength){
    var area = (6*cubeSideLength)*2;
    return area;
} //using anonymous function to determine the area of the cube

var cubeResults= calcCube(sideLength); //retrieves the information from the function


console.log(cubeResults); //Printing the results to the console from the users input
alert("The area of your Cube is "+cubeResults+".");

// Second we will calculate the surface area of a sphere

var radius = prompt ("We are going to calculate the area of your sphere now. \nPlease enter the radius of your sphere."); //prompting the user to enter the length of one side of the cube for the calculation of their sphere.

while(radius==="" || isNaN(radius)){
    radius = prompt("Please do not leave this blank and only use numbers. \nPlease type in the length of one side");
} //testing to make sure that the user enters a number for the radius of their sphere. If not then this will keep re-prompting the user until they do enter a number.

//Calculating the surface area of the users sphere

function calcSphere(sphereRadius){
    var sphereArea = Math.round((4*3.14*sphereRadius)*2);
    return sphereArea;
}
var sphereResults=calcSphere(radius);
console.log(sphereResults);
alert("The area of your Sphere is "+sphereResults+".");

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

function calcRec(rectLength, rectWidth, rectHeight){
    var recArea = (rectWidth*rectLength+rectHeight*rectLength+rectHeight*rectWidth)*2;
    return recArea;
}
var recResults = calcRec(recLength, recWidth, recHeight);
console.log(recResults);
alert("The area of your Rectangular Prism is "+recResults+".");

// This is to tell the user which item has the largest surface area

if(cubeResults > sphereResults && cubeResults>recResults){
    alert ("The object with the greatest surface area is your cube")
}
if(sphereResults > cubeResults && sphereResults > recResults){
    alert("The object with the greatest surface area is your Sphere")
}
if(recResults > cubeResults && recResults > sphereResults){
    alert("The object with the greatest surface area is your Rectangular Prism.")
}

/*
* So in the first prompt I entered 5 and the Area of of cube was 60, and I was alerted that my area was 60 for the cube. In the second prompt I entered 5 and the area of my sphere is 126, In the length prompt I entered 5, in the width prompt I entered 6 and in the length prompt I entered 7 and my results were given to me in an alert and and the results were 214. After I clicked okay on that prompt it alerted me that the rectangular prism had the most surface area of the three items.
* */