let img2 = [];
let index = 0;
function preload() {
    for (let i = 0; i < 1; i++) {
        img2[i] = loadImage("imgs/cSketch"+i+".jpg");
    }
}
function setup() {
    var canvas = createCanvas(270, 270);
    canvas.parent('sketch2-div');
    background(img2[0]);
}

function keyPressed() {
    index = index + 1;
    if (index == img2.length) {
        index = 0;
    }
}
function draw() {
    textFont('Helvetica');
    textSize(12);
    text('press any key(other than space) to continue!', 10, 20);
    if(keyIsPressed) {
        background(img2[index]);
    }
    if(mouseIsPressed) {
        fill(0);
        ellipse(mouseX, mouseY, 20, 20);
    }
}