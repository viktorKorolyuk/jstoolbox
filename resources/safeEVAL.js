/**
A CC0 library made by Damian Breitenberg.
I grew tired of eval being misued on my programs, so I have hacked together a simple eval interpreter to block out malicious code injection.
*/
function seval(str) {

    str = str.split(" ").join(""); //removing spaces
    //remove numbers
    // /([0-9+/*-])+/g

    //Single out formula
    //(Math.[A-z]+[(][0-9+/*-]+[)])



}
