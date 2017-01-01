var draggable = function (id) {

    var winz = 5;
    this.id = id;
    console.log(this.id);
    console.log(document.getElementById(this.id + ""));
    var x, y;
    var offsetX;
    var dragging = false;
    this.elem = document.getElementById(id + "");
    this.elem.style.left = "0px";

    document.addEventListener("mousemove", function (e) {
        x = e.pageX;
        y = e.pageY;
        if (dragging) {
            drag(document.getElementById(currDraggableID), offsetX);
        }
    });
    this.elem.addEventListener("mousedown", function (e) {
        e.preventDefault();
        dragging = true;
        console.log(dragging);
        offsetX = parseInt(this.style.left) - e.pageX;
        console.log(offsetX);
        currDraggableID = this.getAttribute("id");
        console.log(`Current ID selected: ${currDraggableID}`);
    });

    this.elem.addEventListener("mouseup", function (e) {
        dragging = false;
    });

    drag = function (e, oX) {
        e.style.position = "absolute";

        e.style.right = "0px";
        e.style.bottom = "0px";
        e.style.top = "0px";
        //now we know where the item is, lets move it to the cursor.

        e.style.left = `${x + oX}px`;
        e.style.top = `${y - 5}px`;
        e.style.zIndex = e.style.zIndex++;
    }
}
