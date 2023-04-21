function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    background(0);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
    text("This is 00-testPost", mouseX-50, mouseY-50);
}
