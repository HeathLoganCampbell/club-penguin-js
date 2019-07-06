import { example } from './sled_racer/sled_racer.mjs';

var mode = "sled_racer"

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas_parent');
}

function draw() {
    if (mode == "sled_racer") {
        console.log(example)
    }
}

//export the main functions to the main namespace
window.setup = setup;
window.draw = draw;