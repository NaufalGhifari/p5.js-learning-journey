function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    /* background(0);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
    text("This is 00-testPost", mouseX-50, mouseY-50); */
    drawCate(150, 200);
}

function drawCate(x, y){
    rectMode(CENTER); // draw a rect from the center, not the corners
    strokeWeight(2); // thickness of the lines

    rect(x, y, 100, 100); // face

    circle(x-20, y-20, 25, 10); // left eye
    circle(x+20, y-20, 25, 10); // right eye

    rect(x, y+5, 7, 25); // nose
    rect(x, y+30, 30, 5); // mouth

    triangle(x-50, y-50, x-30, y-70, x-10, y-50);
    //triangle(x-50, y-50, x-30, y-70, x-10, y-50);

}
