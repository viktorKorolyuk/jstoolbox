setDraggable(document.getElementById("toolbox")); //demo

var add_but = document.getElementById("add");
add_but.onclick = function () { //create a new frame
    var toolbox = document.createElement("div");
    toolbox.setAttribute("class", "toolbox");

    var nav = document.createElement("div");
    nav.setAttribute("class", "navbar");

    var a1 = document.createElement("a");
    var gg = document.createTextNode(`[X]`);
    a1.appendChild(gg);
    nav.appendChild(a1);

    gg = document.createTextNode(`[-]`);
    a1.appendChild(gg);
    nav.appendChild(a1);

    gg = document.createTextNode(`[^]`);
    a1.appendChild(gg);
    nav.appendChild(a1);

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "/CalculatorWebView.html");
    toolbox.appendChild(nav);
    toolbox.appendChild(iframe);
    document.body.appendChild(toolbox);
    console.log(toolbox);
    setDraggable(toolbox);
}
