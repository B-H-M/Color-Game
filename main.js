//  let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// ];
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let colorDisplay  = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let pickedColors = pickColor();
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColors;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColors = pickColor();
    colorDisplay.textContent = pickedColors;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.background = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColors = pickColor();
    colorDisplay.textContent = pickedColors;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.background = "block";
    }
});

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new color from array
    pickedColors = pickColor();
    
    messageDisplay.textContent = ""; 
    //change color display to match picked color
    colorDisplay.textContent = pickedColors;
    this.textContent = "New Colors"
    //change colors of square
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
      let  clickedColors = this.style.background;

      if(clickedColors === pickedColors){
          messageDisplay.textContent = "Correct!!!";
          resetButton.textContent = "Play Again?"
          changeColor(clickedColors);
          h1.style.background = clickedColors;
      }
            
      else{ 
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";          
      }
    });   
}

function changeColor(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a random "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a random "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a random "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    // return "rgb(" + r + ", " + g + ", " + b + ")";
    return `rgb(${r}, ${g}, ${b})`;

}

