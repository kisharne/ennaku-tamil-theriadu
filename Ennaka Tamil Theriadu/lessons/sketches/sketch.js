let sketch1 = function(p) {
    p.img = [];
    p.index = 0;
    p.preload = function() {
        for (p.i = 0; p.i < 12; p.i++) {
            p.img[p.i] = p.loadImage("imgs/aSketch"+p.i+".jpg");
        }
    }
    p.setup = function() {
        p.canvas = p.createCanvas(270, 270);
        p.canvas.parent('sketch-div');
        p.background(p.img[0]);
    }
    
    p.keyPressed = function() {
        p.index = p.index + 1;
        if (p.index == p.img.length) {
            p.index = 0;
        }
    }
    p.draw = function() {
        p.textFont('Helvetica');
        p.textSize(12);
        p.text('press any key(other than space) to continue!', 10, 20);
        if(p.keyIsPressed) {
            p.background(p.img[p.index]);
        }
        if(p.mouseIsPressed) {
            p.fill(0);
            p.ellipse(p.mouseX, p.mouseY, 20, 20);
        }
    }
}
let sketch2 = function(p) {
    let img = [];
    let index = 0;
    p.preload = function() {
        for (p.i = 0; p.i < 2; p.i++) {
            img[p.i] = p.loadImage("imgs/cSketch"+p.i+".jpg");
        }
    }
    p.setup = function() {
        p.canvas = p.createCanvas(270, 270);
        p.canvas.parent('sketch2-div');
        p.background(img[0]);
    }
    
    p.keyPressed = function() {
        index = index + 1;
        if (index == img.length) {
            index = 0;
        }
    }
    p.draw = function() {
        p.textFont('Helvetica');
        p.textSize(12);
        p.text('press any key(other than space) to continue!', 10, 20);
        if(p.keyIsPressed) {
            p.background(img[index]);
        }
        if(p.mouseIsPressed) {
            p.fill(0);
            p.ellipse(p.mouseX, p.mouseY, 20, 20);
        }
    }
}

let vowels = new p5(sketch1);
let cons1 = new p5(sketch2);

