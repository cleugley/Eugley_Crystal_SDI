
//Crystal Eugley, 1/15/2015, Expressions Assignment
//Comparing the Cost of Dog Food at two different stores

var dogFoodPrice = prompt("Enter the price of your dog food at store 1");  //User is entering the cost of one bag of dog food
var foodDiscount = prompt("Enter the discount percentage as a whole number"); //User is entering the discount being offered by Store 1
var taxes = prompt("Enter your tax rate as a whole number\n ex: 7% would be 7"); //User is entering their sales tax rate for the area

var totalPrice = (dogFoodPrice - foodDiscount*dogFoodPrice/100); //This line is calculating the discount on the original price of the dog food

var totalPriceTax = totalPrice + taxes*totalPrice/100; //This line is adding the taxes to the total amount after discount is applied

alert("Your total cost is "+totalPriceTax); //This is sending an alert to the user to tell them the total cost of the dog food at Store 1

var dogFoodPrice2 = prompt("Enter the price of your dog food at store 2"); //User is entering the cost of one bag of dog food
var foodDiscount2 = prompt("Enter the discount percentage as a whole number"); //User is entering the discount being offered by Store 2
var taxes2 = prompt("Enter your tax rate as a whole number\n ex: 7% would be 7"); //User is entering their sales tax rate for the area

var totalPrice2 = dogFoodPrice2 - foodDiscount2*dogFoodPrice2/100; //This line is calculating the discount on the original price of the dog food
var totalPriceTax2 = totalPrice2 + taxes2*totalPrice2/100; //This line is adding the taxes to the total amount after discount is applied

alert("Your total cost before tax at store 2 is "+totalPriceTax2); //This is sending an alert to the user to tell them the total cost of the dog food at Store 2

alert ("Your before tax price at Store 1 is " + totalPriceTax + " " +"Your before tax price at Store 2 is " + totalPriceTax2); //This is sending an alert to the user showing them the prices at both Store 1 and Store 2
console.log("Your before tax price at Store 1 is " + totalPriceTax + " " +"Your before tax price at Store 2 is " + totalPriceTax2); 

//I typed in 70 for the first dog food price and 7 for the discount percent and 7 for the tax percentage, the total was 69.657. Then I put 70 for the second bag of dog food and 15 for the discount and 7 for the tax rate, the total was 63.665. So store 2 has the dog food cheaper than store 1 and this was inputted to the customer in the form of an alert.