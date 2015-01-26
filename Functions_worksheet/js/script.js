/**
 * Created by Ceugley on 1/26/15.
 */
// Crystal Eugley  1/26/2015 Functions Worksheet

//Calculate the Area of a Rectangle

var width = 5;
var height = 6;
var area = calcArea (width,height);
console.log("The Area of the Rectangle is " + area);

function calcArea(w, h){
    return w * h
}

// Calculate the Circumference of a circle.

var diameter = 12;

function calcCirc(diameter){
    var circ = diameter * 3.14;
    return circ;
}
var circ = calcCirc (diameter);
console.log("The circumference of the circle is " + circ);

// How many bee stings to kill an animal

var weight = 250;

function beeStings(weight){
    var numStings = weight * 8.666666667;
    return numStings;
}
var numStings = beeStings(weight);
console.log("It takes "+ numStings + " bee stings to kill this animal")