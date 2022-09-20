//Get Username
Username = prompt("Please Enter Your First Name" , "");

//Script of calculator app
function Calculator(){

//User Inputs
let Firstvalue = +prompt("Please Enter Your First Number" , "");
let ArithmeticSymbol = prompt("Please Enter An Arithmetic Symbol You Want\n\nAddition (+)\n\nSubtraction (-)\n\nMultiplication (*)\n\nDivision (/)");
let Secondvalue = +prompt("Please Enter Your Second Number" , "");
let Addition = Firstvalue+Secondvalue;
let Subtraction = Firstvalue-Secondvalue;
let Multiplication = Firstvalue*Secondvalue;
let Division = Firstvalue/Secondvalue;

//Script of calculator start

//Iteration
while (true) {
    
    if (ArithmeticSymbol == "+") {
        alert("Hey " + Username + " Your Output Is = " + Addition + "\n\nThank you " +  Username  + " come again for another calculations...");    
    }
    if (ArithmeticSymbol == "-") {
        alert("Hey " + Username + " Your Output Is = " + Subtraction + "\n\nThank you " +  Username  + " come again for another calculations...");
    }
    if (ArithmeticSymbol == "*") {
        alert("Hey " + Username + " Your Output Is = " + Multiplication + "\n\nThank you " +  Username  + " come again for another calculations...");
    }
    if (ArithmeticSymbol == "/") {
        alert("Hey " + Username + " Your Output Is = " + Division + "\n\nThank you " +  Username  + " come again for another calculations...");
    }
    else{}
    break;

}

}