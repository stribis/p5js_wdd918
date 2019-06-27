// this is the star class from which we will create multiple instance of 
function Star(){
    // Define some variables which for x,y and z position of every star
    // this variables are random and can be anywhere between -600 and 600
    this.x = random(-width, width);
    this.y = random(-height, height);
    // Z is technically our speed/back to front movement
    // this just needs to be a value between 0 and the width
    this.z = random(width);

    // we can create function inside thae class, this are technically methods
    this.update = function() {
        // lets update the z position of the star every frame
        this.z = this.z - speed;

        //We can reset the stars once their z position has reached 0 and they are offscreen
        // by assigning the variables
        if(this.z < 0){
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }
    // This is another method
    // in this case we draw the star using sx and sy which is a mapped value of the x, y an z values to 0 and 1
    this.show = function() {
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        
        fill(255);
        noStroke();
        ellipse(sx, sy, 8, 8);
    }
}