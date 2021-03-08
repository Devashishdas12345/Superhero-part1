var a = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_width = 30;
var block_height = 30;

var player_object = "";
var image_object = "";

function player_update() {
    fabric.Image.fromURL("Superhero.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
            {top:player_y,left:player_x}
        );
        a.add(player_object);
    });
}

function new_image(get_Img) {
    fabric.Image.fromURL(get_Img,function(Img){
        image_object = Img;
        image_object.scaleToWidth(150);
        image_object.scaleToHeight(140);
        image_object.set(
            {top:player_y,left:player_x}
        );
        a.add(image_object);
    });
}

window.addEventListener ("keydown",my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("P and Shift key pressed together");
        block_width = block_width+10;
        block_height = block_height+10;
        document.getElementById("Width_123").innerHTML = block_width;
        document.getElementById("Height_123").innerHTML = block_height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("M and Shift key pressed together");
        block_width = block_width-10;
        block_height = block_height-10;
        document.getElementById("Width_123").innerHTML = block_width;
        document.getElementById("Height_123").innerHTML = block_height;
    }
}