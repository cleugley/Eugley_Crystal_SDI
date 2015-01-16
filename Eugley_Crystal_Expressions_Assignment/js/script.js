
//Crystal Eugley, 1/15/2015, Expressions Assignment
//Comparing the Cost of Dog Food at two different stores

var dogFoodPrice = prompt("Enter the price of your dog food");  //Cost of one bag of dog food
var foodDiscount = prompt("Enter the discount percentage as a whole number"); //The amount of discount the store is offering

var totalPrice = dogFoodPrice - dogFoodPrice/foodDiscount; //The total cost of the dog food after the discount being offered

alert("Your total cost before tax is "+totalPrice);

