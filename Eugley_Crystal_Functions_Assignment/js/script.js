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

// We will do calculations for a person who is looking to buy a house.

var listPrice = prompt("Please enter the $ amount on the listing price");
while(listPrice==="" || isNaN(listPrice)){
    listPrice = prompt("Please do not leave blank and only use numbers!\nPlease type in listPrice");
}
var intRate = prompt ("Please enter the interest rate of your loan. (Please enter a whole number. ex. 6.25% you would put .0625");
while(intRate==="" || isNaN(intRate)){
    intRate = prompt("Please do not leave blank and only use numbers! \nPlease type in the interest rate.")
}
var loanTerm = prompt ("Please enter the terms of the loan. (i.e. How many years you are financing for");
while(loanTerm=== || isNaN(loanTerm)){
    loanTerm = prompt("Please do not leave blank and only use number! \n Please type in the interest rate.")
}

function monthlyPayment(listPrice, intRate, loanTerm){
    var moPay = listPrice/loanTerm * intRate;
    return moPay;
}


// actual formula for mortgage payment calculation
// M=P i(1+i)n/(1+i)n-1
//M = monthly payment P = principal i=interest rate n=number of payments

