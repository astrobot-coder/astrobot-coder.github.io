var playerx_display = document.getElementById("playerx")
var playery_display = document.getElementById("playery")

//colors
var purple
var yellow
var black

//size of everything
//do not change unless map size changes
var size = 50

//how far you can see
var vision = 1

var IMG = { }

//what you can't walk through
var collidables= ["w1", "w2", "w3"]

//what you can interact with
var interactions= ["🏪", "🧰", "📏", "🚪"]

// player data :
var playerdirection = "left"

// images
function preload() {
  //shop
  IMG["🏪"] = loadImage('/assets/well.png');

  //tiles
  IMG["t1"] = loadImage("/assets/ruinstile1.png")

  IMG["t2"] = loadImage("/assets/ruinstile2.png")
  
  IMG["t3"] = loadImage("/assets/ruinstile3.png")

  IMG["t4"] = loadImage("/assets/ruinstile4.png")

  IMG["t5"] = loadImage("/assets/ruinstile5.png")

  //walls
  IMG["w1"] = loadImage("/assets/ruinswall1.png")

  IMG["w2"] = loadImage("/assets/ruinswall2.png")

  IMG["w3"] = loadImage("/assets/ruinswall3.png")

  //chest
  IMG["🧰"] = loadImage("/assets/chest1.png")
  IMG["open 🧰"] = loadImage("/assets/chest2.png")

  //ghost enemy
  IMG["👻"] = loadImage("/assets/ghost1.png")

  //stick weapon
  IMG["📏"] = loadImage("/assets/stick.png")

  //door
  IMG["🚪"] = loadImage("/assets/door1.png")

  //goat enemy
  IMG["🐐"] = loadImage("/assets/ruinsboss1.png")

  //player sprite
  IMG["👧"] = loadImage("/assets/human_unarmed1.png")

  //fog
  IMG["fogup"] = loadImage("/assets/fog_top.png")

  IMG["fogdown"] = loadImage("/assets/fog_bottom.png")

  IMG["fogleft"] = loadImage("/assets/fog_left.png")

  IMG["fogright"] = loadImage("/assets/fog_right.png")

  IMG["fogupleft"] = loadImage("/assets/fogupleft.png")

  IMG["fogupright"] = loadImage("/assets/fogupright2.png")

  IMG["fogdownleft"] = loadImage("/assets/fogdownleft.png")

  IMG["fogdownright"] = loadImage("/assets/fogdownright2.png")
}

//displays drawn canvas
const gamedisplay = document.getElementById("gamedisplay")
function setup() {
  createCanvas(400, 400, gamedisplay);
  console.log(MAP)
  purple = color(167, 55, 237)
  yellow = color(235, 221, 33)
  black = color(80,80,80)
}


//draws the things on the canvas
function draw() {
  background(220);
  for (let i = 0; i < MAP.length;i++){
    for (let j = 0; j < MAP[i].length; j++){
      if (i>=py-(vision+1) && i<=py+(vision+1) && j>=px-(vision+1) && j<=px+(vision+1) ){
        
        image(IMG["t3"], j*size, i*size, size, size)
  
        if (MAP[i][j]=="🏪"){
          image(IMG["t5"], j*size, i*size, size, size);
          image(IMG["🏪"], j*size, i*size, size, size);
        }
        if (MAP[i][j]=="t1"){
          image(IMG["t1"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="t2"){
          image(IMG["t2"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="t4"){
          image(IMG["t4"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="t5"){
          image(IMG["t5"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="w1"){
          image(IMG["w1"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="w2"){
          image(IMG["w2"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="w3"){
          image(IMG["w3"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="🧰"){
          image(IMG["t1"], j*size, i*size, size, size);
          if (storageState == "closed"){
            image(IMG["🧰"], j*size, i*size, size, size)
          }else if (storageState == "opened"){
            image(IMG["open 🧰"], j*size, i*size, size, size)
          }
          
        }
        if (MAP[i][j]=="🐐"){
          image(IMG["t5"], j*size, i*size, size, size);
          image(IMG["🐐"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="👻"){
          image(IMG["t4"], j*size, i*size, size, size);
          image(IMG["👻"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="🚪"){
          image(IMG["t1"], j*size, i*size, size, size);
          image(IMG["🚪"], j*size, i*size, size, size)
        }
        if (MAP[i][j]=="📏"){
          image(IMG["t2"], j*size, i*size, size, size);
          image(IMG["📏"], j*size, i*size, size, size)
        }

        //displays the fog
        if(i==py-(vision+1) && j==px-(vision+1)){
          image(IMG["fogupleft"], j*size, i*size, size, size)
        }else if (i==py-(vision+1) && j==px+(vision+1)) {
          image(IMG["fogupright"], j*size, i*size, size, size)
        }else if (i==py+(vision+1) && j==px-(vision+1)) {
          image(IMG["fogdownleft"], j*size, i*size, size, size)
        }else if (i==py+(vision+1) && j==px+(vision+1)) {
          image(IMG["fogdownright"], j*size, i*size, size, size)
        }else if (i==py-(vision+1)) {
          image(IMG["fogup"], j*size, i*size, size, size)
        }else if(i==py+(vision+1)){
          image(IMG["fogdown"], j*size, i*size, size, size)
        }else if(j==px-(vision+1)){
          image(IMG["fogleft"], j*size, i*size, size, size)
        }else if(j==px+(vision+1)){
          image(IMG["fogright"], j*size, i*size, size, size)
        }
      
        //everything outside of the fog
      }else{
        fill(color(35,35,35))
        stroke(color(35,35,35))
        square(j*size, i *size, size )
      }
      
      }
  }// displays player image; always above everything
  if (playerdirection=="left"){
    image(IMG["👧"], px*size, py*size, size, size)
  }else{
    push()
    scale(-1,1)
    image(IMG["👧"], -px*size-size, py*size, size, size)
    pop()
  }


  //render inventory 
  if (storageState == "opened"){
    //write code to draw the chest inventory
  }


}
//how to interact
function keyReleased(){
  //interaction

  if (key === "i"){
    if (interactions.includes(MAP[py][px])){
      interact_functions[ MAP[py][px] ] (item = MAP[py][px], inv = inventory, map = MAP, x = px, y = py)
    }
  }
}

function keyPressed() {
  var nexty = py
  var nextx = px
  // Code to run.
  if (keyCode == UP_ARROW){
    if (nexty>0){
      nexty-=1
    }
  }
  if (keyCode == DOWN_ARROW){
    if (nexty<7){
      nexty+=1
    }
  }
  if (keyCode == RIGHT_ARROW){
    playerdirection="right"

    if (nextx<7){
      nextx+=1

    }
  }
  if (keyCode == LEFT_ARROW){
    playerdirection="left"

    if (nextx>0){
      nextx-=1
    }
  }

  //collision

  if (collidables.includes(MAP[nexty][nextx])){
    nextx=px
    nexty=py
  }

  px=nextx
  py=nexty


}

