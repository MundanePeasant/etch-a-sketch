//number of squares to load with
var squares = 16;

//creating the canvas
createSquares(squares);

function createSquares(val) {
    const squareSize = calcSize(val);
    var parent = document.getElementsByClassName("frame");

    for (var i = 0; i < val; i++) {
        for (var x = 0; x < val; x++) {
            const newDiv = document.createElement("div");
            newDiv.className = "drawing-tile";
            newDiv.style.height = squareSize + "px";
            newDiv.style.width = squareSize + "px";
            parent[0].appendChild(newDiv);
        }
    }
}

function getDimensions(){
    var div = document.getElementsByClassName("frame");
    var padding = window.getComputedStyle(div[0]).getPropertyValue('padding');
    console.log(padding);
    var width = div[0].offsetWidth - 64;
    return width;
}

function calcSize(val) {
    const size = getDimensions();
    return size/val;
}