// Global variables
// s is the snake instance
let s;
// scl is our columns in the grid system
let scl = 20;
// food will be our apples
let food;

// The setup only runs at the start of the game
function setup(){
  createCanvas(600, 600)
  // limit the framerate to 10 fps to make the game playable, otherwise snake moves too fast
  frameRate(10)  // you could increase the value to increase the difficulty
  // make sure to create an instance of the Snake class
  s = new Snake()
  // and run picklocation so that we start with one food in the board
  pickLocation()
}

// Draw draws into the canvas every frame
function draw(){
  // we need to redraw the background every frame
  background(51)

  // make sure if the snake eats food, a new apple is added to the board
  if( s.eat(food) ){
    pickLocation();
  }

  //check if the snake died
  s.death()
  //Update position of the snake
  s.update()
  //Show / draw the snake in the canvas
  s.show()

  // fill color of food
  fill(255, 0, 100)
  rect(food.x, food.y, scl, scl)
}

// Picklocation function which adds food to a random place in our canvas
function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl)
}

// We can use the mousePressed function to make the snake bigger if we want to speed up the game
function mousePressed(){
  s.total++;
}

// We controll our snake using keys
// the keyPressed function can recognise which keys were preseed

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1)
  }else if(keyCode === DOWN_ARROW){
    s.dir(0, 1)
  }else if(keyCode === LEFT_ARROW){
    s.dir(-1, 0)
  }else if(keyCode === RIGHT_ARROW){
    s.dir(1, 0)
  }
}