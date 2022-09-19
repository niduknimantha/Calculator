//Get Username
Username = prompt("Please Enter Your Name" , "");
alert("Hello...! " + Username + " Welcome to our calculator website");
document.write("User : " + Username);

//Script of calculator app
function Calculator(){

//User Inputs
let Firstvalue = +prompt("Please Enter Your First Number" , "");
let Secondvalue = +prompt("Please Enter Your Second Number" , "");
let ArithmeticSymbol = prompt("Please Enter An Arithmetic Symbol You Want\n\nAddition (+)\n\nCut Back (-)\n\nMultiplication (*)\n\nDivision (/)");
let Addition = Firstvalue+Secondvalue;
let cut = Firstvalue-Secondvalue;
let Multiplication = Firstvalue*Secondvalue;
let Division = Firstvalue/Secondvalue;

//Script of calculator start

//Iteration
while (true) {
    
    if (ArithmeticSymbol == "+") {
        alert("Hey " + Username + " Your Output Is = " + Addition);    
    }
    if (ArithmeticSymbol == "-") {
        alert("Hey " + Username + " Your Output Is = " + cut);
    }
    if (ArithmeticSymbol == "*") {
        alert("Hey " + Username + " Your Output Is = " + Multiplication);
    }
    if (ArithmeticSymbol == "/") {
        alert("Hey " + Username + " Your Output Is = " + Division);
    }
    else{}
    break;

}

}