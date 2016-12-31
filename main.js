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

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "resources/apps/chooser.html");

    nav.appendChild(a1);
    toolbox.appendChild(nav);
    toolbox.appendChild(iframe);
    var id = `${Math.random() * 300}`; //adding an identifier to the element for later use.

    toolbox.setAttribute("id", id);
    document.body.appendChild(toolbox);

    //making the window draggable
    new draggable(id);
    a1.addEventListener("click", function () {
        document.body.removeChild(toolbox);
    });
}
