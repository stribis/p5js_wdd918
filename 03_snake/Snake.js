// This is our snake class
function Snake() {
  // define global variables for the snake
  // starting x, y
  this.x = 0;
  this.y = 0;
  // vertical and horizontal speed
  this.xspeed = 1;
  this.yspeed = 0;
  // how long is the snake
  this.total = 0;
  // position of the tail
  this.tail = [];

  // this function tests if the snake has eaten an apple by checking the distance
  // between the snakes x,y (head) and the apples x, y (passed through as a parameter)
  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y)
    if( d < 1 ){
      this.total++;
      return true;
    }else{
      return false;
    }
  }

  // Direction of the snake
  // changed every time a key is pressed
  // passing either 0, 1 or -1 as parameter
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }

  // checks if the snake died by checking the distance between the head and the tail
  this.death = function(){
    for( let i = 0; i < this.tail.length; i++){
      var pos = this.tail[i]
      var d = dist(this.x, this.y, pos.x, pos.y)
      if( d < 1){
        console.log("starting over")
        this.total = 0;
        this.tail = [];
      }
    }
  }

  // updates the position of the snake and it's tail

  this.update = function(){
    for(let i = 0; i < this.tail.length - 1; i++){
      this.tail[i] = this.tail[i + 1]
    }
    if (this.total >= 1){
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl)
    this.y = constrain(this.y, 0, height - scl)
  }

  // draws the snakes head and tail squeresinto the canvs
  this.show = function(){
    fill(255)
    for(let i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl)
    }
    rect(this.x, this.y, scl, scl)
  }
}