function setDraggable(elem) {
    var x;
    var y;
    var oldx;
    var xded;
    var dragging = false;
    elem.style.left = "0px";

    window.onmousemove = function (e) {
        x = e.clientX;
        y = e.clientY;
        if (dragging) drag(toolbox);
    }

    elem.onclick = function () {
        if (!dragging) {
            console.log(this);
            dragging = true;
            xded = parseInt(this.style.left) - x;
        } else {
            dragging = false;
            //oldx = 0;
            return;
        }

    }

    function drag(z) {
        z.style.position = "absolute";

        z.style.right = "0px";
        z.style.bottom = "0px";
        z.style.top = "0px";
        //now we know where the item is, lets move it to the cursor.

        z.style.left = `${x + xded}px`;
        z.style.top = `${y - 5}px`;
    }
}
