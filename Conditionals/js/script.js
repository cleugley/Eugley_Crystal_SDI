/**
 * Created by Ceugley on 1/19/15.
 */
//Conditional Logic

//var oldEnough = false;

/*If child is old enough, print to the console "you can ride!"
if(oldEnough){
   // code performed if condition is true
    console.log("You can ride the coaster!");
}*/


// Conditional Logic - Relational Expressions
/*var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;
// If the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
    console.log("You can ride the coaster!");

}

var kidHeight = 49;
var minHeight = 48;

if (kidHeight > minHeight){
    console.log("You can ride the coaster!");
} else{
    console.log("Sorry kid, you've got some growing to do first!");
} */

// Conditional Logic - Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget ^ wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No Phone for you!");
}

