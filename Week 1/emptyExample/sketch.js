var button;

function setup() {
    createCanvas(900, 600);
    background(125);

    button = new Button(200, 200, 200, 100);
}

function draw() {    
    button.drawButton();
    

}

function mousePressed(){
    button.flickButton(mouseX, mouseY);
}

class Button {
    constructor(locX, locY, w, h){
        this.state = false; 
        this.locX = locX;
        this.locY = locY;
        this.height = h;
        this.width = w;
    }

    /** draws the button on the canvas, then update the color */
    drawButton(){
        rect(this.locX, this.locY, this.width, this.height);
        this.updateColor();
    }

    /** update the color based on state */
    updateColor(){
        if(this.state) fill(0, 255, 0)
        else fill(255, 0, 0); 
    }

    /** simulates a flick, changes state */
    flickButton(mouseLocX, mouseLocY){
        // if inside button, change state
        if(mouseLocX > this.locX && mouseLocX < this.locX + this.width &&
            mouseLocY > this.locY && mouseLocY < this.locY + this.height){
            this.state = !this.state;
            console.log(`Button Clicked! State: ${this.state}`);

            this.updateColor();
        }
    }
}














function drawClock() {
    // specify hands' dimensions
    var secLength = 160;
    var secWidth = 1;
    var minLength = 140;
    var minWidth = 3;
    var hourLength = 90;
    var hourWidth = 5;

    translate(width/2, height/2);
    ellipse(0, 0, 350, 350);
    
    // draw the 'seconds' hand
    push();
    strokeWeight(secWidth);
    stroke(200, 0, 0)
    var secAngle = map(second(), 0, 60, 0, 360);
    rotate(radians(secAngle));
    line(0, 0, 0, -secLength);
    pop();

    // draw the 'minutes' hand
    push();
    strokeWeight(minWidth);
    stroke(0, 0, 0)
    var minAngle = map(minute(), 0, 60, 0, 360);
    rotate(radians(minAngle));
    line(0, 0, 0, -minLength);
    pop();

    // draw the 'hours' hand
    push();
    strokeWeight(hourWidth);
    stroke(0, 0, 0)
    var hourAngle = map(hour(), 0, 12, 0, 360);
    rotate(radians(hourAngle));
    line(0, 0, 0, -hourLength);

        // draw a small circle for the hours hand
        push();
            translate(0, -hourLength + 20);
            ellipse(0, 0, 20, 20);
        pop();

    pop();

    // draw hours marks
    var hours = 12;
    var hourStep = 360/hours;

    for (var i = 0; i < hours; i++){
        push();
            rotate(radians(hourStep * i));
            translate(0, -155);
            
            if(i === 0){
                text(12, 0, 0);
            } 
            else{
                text(i, 0, 0);
            }
            
            line(0, 0, 0, -20);
        pop();
    }

}

function drawCate(x, y){
    rectMode(CENTER); // draw a rect from the center, not the corners
    strokeWeight(2); // thickness of the lines

    translate(x, y);

    rect(0, 0, 100, 100); // face
    circle(-20, -20, 25, 10); // left eye
    circle(20, -20, 25, 10); // right eye
    rect(0, 5, 7, 25); // nose
    rect(0, 30, 30, 5); // mouth
    triangle(-50, -50, -30, -70, -10, -50); // left ear
    triangle(50, -50, 30, -70, 10, -50); // right ear
}

function drawEllipsesOnRect(x, y){
    translate(200, 200);
    //rotate(radians(45));
    rect(x, y, 200, 200);

    // 'A' corner
    push();
    fill(255, 0, 0);
    ellipse(0, 0, 30, 30);
    pop();

    // 'B' corner
    push();
    translate(200, 0)
    fill(0, 255, 255);
    ellipse(0, 0, 30, 30);
    pop();

    // 'C' corner
    push();
    translate(0, 200)
    fill(255, 0, 255);
    ellipse(0, 0, 30, 30);
    pop();

    // 'D' corner
    push();
    translate(200, 200);
    fill(255, 255, 0);
    ellipse(0, 0, 30, 30);
    pop();

}

function rotatedRect(x, y){
    rectMode(CENTER);
    
    // dark unrotated rect
    rect(x, y,  100, 100);
    fill(200);

    // translate and rotate the canvas
    translate(x, y); 
    rotate(radians(45));
    
    // lighter rotated rect
    rect(0, 0, 100, 100);
    fill(125);
}


