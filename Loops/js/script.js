/**
 * Created by Ceugley on 1/26/15.
 */
//Screencast: While loops

var b = 10; //setups the index

while (b > 0){ //checks the condition
    console.log(b + " kegs on the wall");
    b--; // increments or decrements the index
}

console.log('.......Do While loops........');

var c = 10;

do{
    console.log(c + ' kegs on the wall.');
    c--;
}
while (c > 0);

console.log('...............For Loops................');

for (var i = 10; i > 0; i--){
    console.log(i + ' kegs on the wall.');
}