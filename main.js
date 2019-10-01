//When title is pressed
var titleButton = document.querySelector(".playTitle");
var swoosh = function(){
    titleButton.classList.add("small");
    document.querySelector(".playPage").classList.remove("hidden");
}
titleButton.addEventListener("click", swoosh);


//Creating the pixel board
var generateBoard = function(){
        //creating the board and giving them a name
        for (var row = 1; row <= 100; row++){
            for (var col = 1; col <= 100; col++) {
                var unique_name = 'grid-'+row+'-'+col;
                var unique_id = row+''+col;
                var button = document.createElement("div");

                button.setAttribute("name", unique_name);
                button.setAttribute("class", 'pixels');
                button.addEventListener("mousedown", startDraw, true);
                button.addEventListener("mouseover", colorThis, true);
                button.addEventListener("mouseup", endDraw, true);
                document.querySelector('.playBoard').appendChild(button);
            }
        };
};



//Choosing the board color
var boardColor = "black";
var colorBoard = function(picker){
    boardColor = "#" + picker.toString();
    document.querySelectorAll(".pixels").forEach(x=>{
        x.style.backgroundColor = boardColor;
    })
    console.log("i changed the board!");
}
//Choosing the pencil color
var draw = false
var colorPalete = "white";
var pencilColor = function(picker){
    colorPalete = "#" + picker.toString();
}
var startDraw = function(){
    draw = true
}
var colorThis = function(event){
    if (draw == true){
        event.target.style.backgroundColor = colorPalete;
        console.log("i entered!");
    } else {
        console.log("Please mouse down on the draw-board!")
    }
}
var endDraw = function(){
    draw = false;
}
//Generating the board
generateBoard();


//Info Buttons
var infoBoard = document.querySelector(".carousel-board");
var removeInfo = function(){
    document.querySelector(".infoBoard").removeChild(infoBoard);
}
removeInfo();
var getInfo = function(){
    document.querySelector(".infoBoard").appendChild(infoBoard);
}
var showInfo = function(){
    setTimeout(function(){infoBoard.style.opacity = '1';}, 800);
    getInfo();
    document.querySelector(".close-button").classList.remove("hidden");
    document.querySelector(".info").classList.add("hidden");
}
var closeInfo = function(){
    infoBoard.style.opacity = '0';
    setTimeout(function(){document.querySelector(".infoBoard").removeChild(infoBoard)}, 800);
    document.querySelector(".close-button").classList.add("hidden");
    document.querySelector(".info").classList.remove("hidden");
}


//Start Button
var start = function(){
    document.querySelector(".playBox").classList.remove("hidden");
    document.querySelector(".reset").classList.remove("hidden");
    document.querySelector(".duplicate").classList.remove("hidden");
    document.querySelector(".colorPicker").classList.remove("hidden");
    document.querySelector(".boardPicker").classList.remove("hidden");
    document.querySelector(".playButton").classList.add("hidden");
}
document.querySelector(".playButton").addEventListener("click", start);



//Reset Button
var reset = function(){
    var pixels = document.querySelectorAll(".pixels")
    pixels.forEach(x=>{
        x.style.backgroundColor = boardColor;
    })
};
document.querySelector(".reset").addEventListener("click", reset);



//Duplicate Button
var copyBoard = function(){
    //Left side copy
    var board = document.querySelectorAll(".pixels");
    var boardCopy = document.querySelector(".boardCopy");
    for(i = 0; i < board.length; i++){
        var clone = board[i].cloneNode( true );
        clone.setAttribute("class", "pixels");
        if(board[i].classList[1] === "white-color"){
            clone.classList.add("white-color")
        }
        boardCopy.appendChild( clone );
    }
    //bottom copy
    var boardCopy2 = document.querySelector(".boardCopy2");
    for(i = 0; i < board.length; i++){
        var clone = board[i].cloneNode( true );
        clone.setAttribute("class", "pixels");
        if(board[i].classList[1] === "white-color"){
            clone.classList.add("white-color")
        }
        boardCopy2.appendChild( clone );
    }
    var boardCopy3 = document.querySelector(".boardCopy3");
    for(i = 0; i < board.length; i++){
        var clone = board[i].cloneNode( true );
        clone.setAttribute("class", "pixels");
        if(board[i].classList[1] === "white-color"){
            clone.classList.add("white-color")
        }
        boardCopy3.appendChild( clone );
    }
    //removing the mouseover event listener once the copy board function has been utilized
    var remove = document.querySelectorAll(".pixels")
    remove.forEach(x=>{
        x.removeEventListener("mouseover", colorThis, true);
    });
}

var duplicate = function(){
    document.getElementById('large').removeAttribute("id");
    document.querySelector(".boardCopy").classList.remove("hidden");
    document.querySelector(".boardCopy2").classList.remove("hidden");
    document.querySelector(".boardCopy3").classList.remove("hidden");
    document.querySelector(".printButton").classList.remove("hidden");
    document.querySelector(".reloadButton").classList.remove("hidden");
    document.querySelector(".colorPicker").classList.add("hidden");
    document.querySelector(".boardPicker").classList.add("hidden");
    document.querySelector(".playButton").classList.add("hidden");
    document.querySelector(".reset").classList.add("hidden");
    document.querySelector(".duplicate").classList.add("hidden");
}
document.querySelector(".duplicate").addEventListener("click", duplicate);
document.querySelector(".duplicate").addEventListener("click", copyBoard);




// //Screenshot function
// var takeScreenShot = function() {
//     html2canvas(document.querySelector(".playBox"), {
//         dpi:500,
//         onrendered: function (canvas) {
//             var tempcanvas=document.createElement('canvas');
//             tempcanvas.width=2100;
//             tempcanvas.height=2100;
//             var context=tempcanvas.getContext('2d');
//             context.drawImage(canvas,0,0,900,900,0,0,2100,2100);
//             var link=document.createElement("a");
//             link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
//             link.download = 'ripple.jpg';
//             link.click();
//         }
//     });
// }

// var takeScreenShot = function() {

//     var scaleBy = 5;
//     var w = 1000;
//     var h = 1000;
//     var div = document.querySelector(".playButton");
//     var canvas = document.createElement('canvas');
//     canvas.width = w * scaleBy;
//     canvas.height = h * scaleBy;
//     canvas.style.width = w + 'px';
//     canvas.style.height = h + 'px';
//     var context = canvas.getContext('2d');
//     context.scale(scaleBy, scaleBy);

//     html2canvas(div, {
//         canvas:canvas,
//         onrendered: function (canvas) {
//             theCanvas = canvas;
//             document.body.appendChild(canvas);

//             Canvas2Image.saveAsPNG(canvas);
//             $(body).append(canvas);
//         }
//     });
// };