// lets make a global array star where we will instert every new instance of Star( ) we create
let stars = [];
// This is the initial setup of our canvas and will only run once,
// We will create the canvas, and create the stars we will used
function setup(){
    createCanvas(600, 600);
    for(var i = 0; i < 800; i++){
        stars[i] = new Star();
    }
}

// This is the draw and will run multiple times (every frame)
function draw(){
    // Creat a variable speed which we will then use to make change the z value of stars faster or slower
    // using our mouse position in the canvas ( mouseX and mouseY)
    speed = map(mouseX, 0 , width, 0 , 50)
    // print is the same as console.log
    print(mouseX + "||" + speed)
    // we need to redraw the background every frame
    background(0);
    // and translate the whole canvas so that the starting point of the stars is relative to the middle and not the top left of the canvas
    translate( width / 2, height / 2);

    // We also need to update and show every star in our array, every frame
    for( var i = 0; i < stars.length; i++ ){
        stars[i].update();
        stars[i].show();
    }
}

