


//onClick="location.href='http://www.google.com'"

/** Hover Text */
function calcDes() {                             document.getElementById("calcButton").style.background='#4E194E';
                   }
function passDes() {                document.getElementById("passgenButton").style.background='#4E194E';
                   }
function convertDes() { document.getElementById("converterButton").style.background='#4E194E';
                      }
function removeCalcText() {        document.getElementById("calcButton").style.background='purple';
                          }
function removePassText() {          document.getElementById("passgenButton").style.background='purple';
                          }
function removeConvText() {    document.getElementById("converterButton").style.background='purple';
                          }
/** Hover Text */

//Div 1 Code
function divONECALC() {
var calcDIVONE = document.createElement('iframe');
calcDIVONE.src = "CalculatorWebView.html"
document.querySelector('#main1').appendChild(calcDIVONE);
}

function divONEPass() {
 
}

function divONEConv() {

}

function divONEConsole() {

}

function divONEPhoneDec() {
    
}

function divONEstats() {
    
}

//Div 2 Code
function divTWOCALC() {
var calcDIVTWO = document.createElement('iframe');
calcDIVTWO.src = "CalculatorWebView.html"
document.querySelector('#main2').appendChild(calcDIVTWO);
}

function divONEPass() {
 
}

function divONEConv() {

}

function divONEConsole() {

}

function divONEPhoneDec() {
    
}

function divONEstats() {
    
}
