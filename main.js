var canvas = new fabric.Canvas('myCanvas');
var block_img_width = 30;
var block_img_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("Player girl.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log("Keypressed =" + keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("Shift and P are pressed together");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log("Shift and M are pressed together");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keypressed == 37) {
        console.log("Left Key is Pressed");
        left();
    }

    if (keypressed == 38) {
        console.log("Up Key is Pressed");
        up();
    }

    if (keypressed == 39) {
        console.log("Right Key is Pressed");
        right();
    }

    if (keypressed == 40) {
        console.log("Down Key is Pressed");
        down();
    }

    if (keypressed == 67) {
        console.log("c is Pressed");
        new_img("cloud.jpg");
    }

    if (keypressed == 68) {
        console.log("d is Pressed");
        new_img("dark_green.png");
    }

    if (keypressed == 71) {
        console.log("g is Pressed");
        new_img("ground.png");
    }

    if (keypressed == 76) {
        console.log("l is Pressed");
        new_img("light_green.png");
    }

    if (keypressed == 82) {
        console.log("r is Pressed");
        new_img("roof.jpg");
    }

    if (keypressed == 84) {
        console.log("t is Pressed");
        new_img("trunk.jpg");
    }

    if (keypressed == 85) {
        console.log("u is Pressed");
        new_img("unique.png");
    }

    if (keypressed == 87) {
        console.log("w is Pressed");
        new_img("wall.jpg");
    }

    if (keypressed == 89) {
        console.log("y is Pressed");
        new_img("yellow_wall.png");
    }
}

function control() {
    window.alert("Press c to draw clouds"+
    "\n Press d to draw Dark Green Grass "+
    "\n Press g to draw Ground"+
    "\n Press l to draw Light Green Grass"+
    "\n Press r to draw Roof"+
    "\n Press t to draw Trunk"+
    "\n Press u to draw Unique"+
    "\n Press w to draw Wall"+
    "\n Press y to draw Yellow Wall");
}

function up() {
    if (player_y>0) {
     player_y=player_y-block_img_height;
     canvas.remove(player_object);
     player_update();  
    }
}

function down() {
    if (player_y<500) {
       player_y=player_y+block_img_height;
       canvas.remove(player_object);
       player_update(); 
    }
}

function right() {
    if (player_x<900) {
        player_x=player_x+block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x>0) {
        player_x=player_x-block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}