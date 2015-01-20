/**
 * Created by Ceugley on 1/19/15.
 */

// conditional logic - ternary operators
var age = 6;
var book;

// If the child is under 10, they get Green Eggs and Ham, otherwise they get the Time Machine

if(age <10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);