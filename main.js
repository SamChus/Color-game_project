var colors = generaterRandomColors(6);
var messageDisplay = document.getElementById("checker"); 
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color");
var square = document.querySelectorAll(".square"); 
var header = document.getElementById("header");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generaterRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colors of squares
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    }
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change the backgrd color of the header
    header.style.backgroundColor = "rgb(35, 35, 35)";
    // clear massage displayed when user try again
    messageDisplay.textContent = "";
});

// always display color at thbe header
colorDisplay.textContent = pickedColor;

for (let i = 0; i < square.length; i++) {
    // add initial colors to squares
    square[i].style.backgroundColor = colors[i];

    // add click listerners to squares
    square[i].addEventListener("click", function (){
        // grab color of clicked square
        var clickedColor = square[i].style.backgroundColor;
        // compare color to picked color (logic)
        // console.log(clickedColor, pickedColor);
        if (pickedColor === clickedColor) {
            messageDisplay.textContent = "correct!!!";
            resetButton.textContent = "Play again?";
            header.style.backgroundColor = pickedColor;
            changeColor(clickedColor);
        }else{
            messageDisplay.textContent = "try again!!";
            this.style.backgroundColor = "rgb(35, 35, 35)";
        }
    });
}

function changeColor(color) {
    // loop through all square
    for (let i = 0; i < square.length; i++) {
        // change each squares to matchch given color 
        square[i].style.backgroundColor = color; 
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterRandomColors(num) {
    // create a new array
    var arr = [];
    // loop through the generate color;
    for (var i = 0; i < num; i++) {
        // randomcolor
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
 