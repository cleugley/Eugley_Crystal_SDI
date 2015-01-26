/**
 * Created by Ceugley on 1/26/15.
 */
// Arguments and Parameters

calcArea(30, 20);


function calcArea(w, h){ // w=30, h=20
  var area =w * h;
    console.log(area);
}


//how old is my dog in human years

function dogYears(age /*holds parameters*/){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old")
}
dogYears(4/*holds definition for the parameter i.e. arguments*/);
dogYears(5);
