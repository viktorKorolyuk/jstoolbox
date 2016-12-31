/**

new draggable("toolbox"); //demo
var app;
*/
var currDraggableID = "toolbox";

var add_but = document.getElementById("add");
add_but.onclick = function () { //add a new frame to the "scene"

    //creating a new window
    var toolbox = document.createElement("div");
    toolbox.setAttribute("class", "toolbox");

    var nav = document.createElement("div");
    nav.setAttribute("class", "navbar");

    var a1 = document.createElement("div");
    a1.setAttribute("class", "close");

    nav.appendChild(a1);

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "CalculatorWebView.html");
    toolbox.appendChild(nav);
    toolbox.appendChild(iframe);
    var id = `${Math.random() * 300}`;
    toolbox.setAttribute("id", id);
    document.body.appendChild(toolbox);

    console.log(document.getElementById(id));
    //making the window draggable
    new draggable(id);
    a1.addEventListener("click", function () {
        document.body.removeChild(toolbox);
    });
}
