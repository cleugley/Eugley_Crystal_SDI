
//Crystal Eugley, 1/15/2015, Expressions Assignment
//Comparing the Cost of Dog Food at two different stores

var dogFoodPrice = prompt("Enter the price of your dog food at store 1");  //Cost of one bag of dog food
var foodDiscount = prompt("Enter the discount percentage as a whole number"); //The amount of discount store 1 is offering
var taxes = prompt("Enter your tax rate as a whole number\n ex: 7% would be 7");

var totalPrice = (dogFoodPrice - foodDiscount*dogFoodPrice/100); //total cost of dog food before taxes

var totalPricetax = totalPrice + taxes*totalPrice/100; //The total cost of the dog food after the discount being offered plus tax percentage applied

alert("Your total cost is "+totalPricetax); //Stating the total cost before taxes at Store 1

var dogFoodPrice2 = prompt("Enter the price of your dog food at store 2"); //Enter the price of dog food again
var foodDiscount2 = prompt("Enter the discount percentage as a whole number"); //Enter the price of dog food being offered at Store 2
var taxes2 = prompt("Enter your tax rate as a whole number\n ex: 7% would be 7"); //tax rate entered

var totalPrice2 = dogFoodPrice2 - foodDiscount2*dogFoodPrice2/100; //The total cost of the dog food after the discount being offered at Store 2
var totalPriceTax2 = totalPrice2 + taxes2*totalPrice2/100; //total price with discount and taxes

alert("Your total cost before tax at store 2 is "+totalPriceTax2); //Total Price before taxes at Store will be displayed

alert ("Your before tax price at Store 1 is " + totalPrice + " " +"Your before tax price at Store 2 is " + totalPrice2); //This will display a comparison of prices for Store 1 and Store 2
console.log("Your before tax price at Store 1 is " + totalPrice + " " +"Your before tax price at Store 2 is " + totalPrice2);

//I typed in 70 for the first dog food price and 7 for the discount percent and 7 for the tax percentage, the total was 69.657. Then I put 70 for the second bag of dog food and 15 for the discount and 7 for the tax rate, the total was 63.665. So store 2 has the dog food cheaper than store 1 and this was inputted to the customer in the form of an alert.