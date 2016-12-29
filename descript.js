var copy = $(".toolbox"); //put the element to memory
document.getElementById("toolbox").style.display = "initial"; //remove the element from the page for cleaner result
var a = 3;

var add = document.getElementById("add");
add.onclick = function () {
    copy.clone().appendTo('body'); //make a copy of the element
    $(".toolbox").draggable({
        stack: ".toolbox" //make it draggable
    });

    $(".toolbox").click(function () {
        console.log(this);
    });
    $(".toolbox").on("drag", function () {

    });
}
