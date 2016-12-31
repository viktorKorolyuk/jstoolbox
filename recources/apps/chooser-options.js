function listAdd(name, url) {
    document.getElementById("id").innerHTML = `${document.getElementById("id").innerHTML}\n<a class="options" href="${url}">${name}</a>`;
}

/*
 *We need to get the JSON file info that we need to add to the
 *webpage.
 *The following code was given by KryptoniteDove on codepen and uses
 *XMLHttpRequest.
 *[http://codepen.io/KryptoniteDove/post/load-json-file-locally-using-
 *pure-javascript]
 */
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'app-list.json', false); // Replace 'my_data' with the path to your file. [Hi. dev here - The last argument of false is to load the file synchonously... just a test]
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        var json = JSON.parse(response);
        for (var i = 0; i < json.length; i++) {
            listAdd(json[i].name, json[i].url);
        };
    });
}
window.onload = function () { //when document is ready run your code.
    init()
};
