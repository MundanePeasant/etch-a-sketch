//number of squares to load with
var squares = 32;

//creating the canvas
createSquares(squares);

function createSquares(val) {
    const squareSize = calcSize(val);
    var parent = document.getElementsByClassName("frame");

    for (var i = 0; i < val; i++) {
        for (var x = 0; x < val; x++) {

            //creating a new div element
            const newDiv = document.createElement("div");

            //applying the class name & correct size
            newDiv.className = "drawing-tile";
            newDiv.style.height = squareSize + "px";
            newDiv.style.width = squareSize + "px";


            newDiv.addEventListener('click', () => {
                newDiv.classList.add("drawn");
            });

            newDiv.addEventListener('dragover', () => {
                newDiv.classList.add("drawn");;
            });

            //adding the new div to the parent
            parent[0].appendChild(newDiv);
        }
    }
}

function getDimensions(){
    var div = document.getElementsByClassName("frame");
    var padding = window.getComputedStyle(div[0]).getPropertyValue('padding');
    var width = div[0].offsetWidth - 64;
    return width;
}

//calculates how big each tile should be
function calcSize(val) {
    const size = getDimensions();
    return size/val;
}

var btn = document.querySelector("button");
btn.addEventListener('click', () => {
    const squares = document.getElementsByClassName("drawing-tile");

    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.remove("drawn");
    }
});
