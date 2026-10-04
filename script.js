var playerx_display = document.getElementById("playerx")
var playery_display = document.getElementById("playery")

//monster data
var enemy_name = "spider"


// temp stats to use in combat
var enemy_stat = {
    "hp": 0,
    "maxhp": 0,
    "str": 0,
    "def": 0,
    "spd": 0,
    "money":0,
    "pwr":0
}


//fight screen button locations 
var diagramX = 10
var diagramY = 15
var diagramW = 380
var diagramH = 150

var fightX = 10
var fightY = 200
var fightW = 185
var fightH = 75

var itemX = 205
var itemY = 200
var itemW = 185
var itemH = 75

var checkX = 10
var checkY = 300
var checkW = 185
var checkH = 75

var runX = 205
var runY = 300
var runW = 185
var runH = 75



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
var collidables= ["w1", "w2", "w3", "mw1", "mw2", "b3", 
                  "horleft","hormiddle","horright","verttop",
                  "vertmiddle","vertbottom","tdown","tup","vertcrack",
                  "horcrack","crackendtop", "crackendbottom", "ld",
                  "lt1", "lt2", "lt3", "lt4", "lt5", "tor1", "tor2", "keg1",
                  "1horleftwall", "1hormidwall", "1horrightwall",
                  "1verttopwall", "1vertmidwall", "1vertbottomwall",
                  "1toprightcorner", "1bottomleftcorner", "1rightT",
                  "1hormidcrack", "1vertmidcrack",
                  "1horleftmoss", "1hormidmoss", "1horrightmoss",
                  "1verttopmoss", "1vertmidmoss", "1vertbottommoss",
                  "1toprightcornermoss", "1bottomleftcornermoss", "1rightTmoss",
                  "1hormidcrackmoss", "1vertmidcrackmoss","tr1",
                  "2vertbottomcave","2bottomleftcornercave",
                  "2verttopcave","2horleftcave","2Tupcave",
                  "2horrightcave","treetopleft", "treetopmiddle", "treetopmiddle", "treetopright",
                  "treeleft", "treemiddle", "treemiddle", "treeright",
                  "treebottomleft", "treebottommiddle","treebottomright" ,
                  "water2", "water1","2toprightcornercave",


                  
                 ]

//what you can interact with
var interactions= ["🏪", "🧰", "📏", "🚪",
                   "p1", "p2", "p3", "gloves", "boot1", 
                   "boot2", "armor1", "cloak1", "pants1", 
                   "helmet1", "p4", "p5", "p6", "dagger1",
                   "dagger2"," axe1", "shield1", "gloves2",
                   "helmet2", "cloak2", "armor2", "pants2", 
                   "boot3",
                  ]

// player data :
var playerdirection = "left"

var nextx
var nexty

// the canvas changes with level
var canvasWIDTH = 400
var canvasHEIGHT = 400

function showBattleCanvas() {
  const widthOffset = 400 - canvasWIDTH
  canvasWIDTH = 400
  canvasHEIGHT = 400
  resizeCanvas(canvasWIDTH, canvasHEIGHT)
  relocateEquipmentsForLevel(widthOffset, 0)
}

function showMapCanvas() {
  const mapCanvasSizes = {
    1: [400, 400],
    2: [500, 500],
    3: [600, 600],
    4: [250, 400],
  }
  const [mapWidth, mapHeight] = mapCanvasSizes[LEVEL]
  const widthOffset = mapWidth - canvasWIDTH
  canvasWIDTH = mapWidth
  canvasHEIGHT = mapHeight
  resizeCanvas(canvasWIDTH, canvasHEIGHT)
  relocateEquipmentsForLevel(widthOffset, 0)
}

// images
function preload() {
  map1()
  map2()
  map3()
  map4()
  loaditems()
  loadenemies()
  loadenv()
}

function monsterEncounter() {
  /**
   * This function is only used for regular monster not bossed
   *
   * 
   */

  // generate chance for battle
  var battleChance = Math.floor(Math.random() * 12) + 1
  console.log(battleChance)

  if (battleChance == 5){
    INBATTLE=true
    showBattleCanvas()
    
    closeInventory()
    //pick a random enemy ansd copy their bases into the enemy_stats dictionary
    let monster_options = MONSTER_NAMES[LEVEL]
      
    enemy_name = monster_options[Math.floor(Math.random() * monster_options.length )]

    myprint(`You encountered a ${MONSTER_STATS[enemy_name]['name']}`, type="danger")
    
    enemy_stat["hp"] = MONSTER_STATS[enemy_name]["hp"]
    enemy_stat["maxhp"] = MONSTER_STATS[enemy_name]["maxhp"]
    enemy_stat["str"] = MONSTER_STATS[enemy_name]["str"]
    enemy_stat["def"] = MONSTER_STATS[enemy_name]["def"]
    enemy_stat["spd"] = MONSTER_STATS[enemy_name]["spd"]
    enemy_stat["money"] = MONSTER_STATS[enemy_name]["money"]
    enemy_stat["pwr"] = MONSTER_STATS[enemy_name]["pwr"]

    //console.log(enemy_stat)
  }
}

//displays drawn canvas
const gamedisplay = document.getElementById("gamedisplay")

function setup() {
  createCanvas(canvasWIDTH, canvasWIDTH, gamedisplay);
  purple = color(167, 55, 237)
  yellow = color(235, 221, 33)
  black = color(80,80,80)
  frameRate(60);
  //For debugging  
}

//game settings
var INBATTLE = false;
var GAMEOVER = false;
var LEVELMAP = MAP;
var LEVELFORE = MAPOVERLAY;
var LEVEL = 1;
var SLIDE = false;
var SLIDERSPEED =  380;
var SLIDERX = 10;
var SLIDERDIR = 1; // 1 means right. -1 means left
let SLIDERWIDTH = 10;
let SLIDEPAUSE = false;
var SELECT;  // tracks which button (eg. fight, block ) was clicked
var INCUTSCENE = false; 

let greenX;
let yellowX;
let yellowWidth;
let greenWidth;

updateStats()

myprint("")


//draws the things on the canvas
function draw() {
  background(220);

  if (GAMEOVER){
    //draw the gameOver screen
      push()
      background(black)
      textFont('pixel font');
      fill("red")
      textSize(50)
      textFont("pixelify sans")
      textAlign(CENTER, CENTER)
      text("GAME OVER", 200, 180)
      pop()
      return
  }

  if (INBATTLE){
    // User Interface!
    text('FIGHT', 50, 50);
    strokeWeight(5);

    // (x,y,w,h)
    rect(10,15, 380, 150); //diagram
    rect(10, 200, 185, 75); // fight
    rect(205, 200, 185, 75); // item
    rect(10, 300, 185, 75); // check
    rect(205, 300, 185, 75); // run

    strokeWeight(1);
    // (text,x,y)
    text("FIGHT", 80, 190);
    text("BLOCK", 280, 190);
    text("CHECK", 80, 290);
    text("RUN", 280, 290);


    // render the fight screen
    let HpbarColor = color(25,255,25)
    let emptyHpBarColor = color(255, 25, 25)


    //player hp bar
    push()
    fill(emptyHpBarColor)
    rect(100, 80, 50, 10)
    pop()

    push()
    fill(HpbarColor)
    let playerHP = playerStats["hp"] / playerStats["maxhp"]
    rect(100, 80, 50 * playerHP , 10)
    pop()

    //monster hp bar container
    push()
    fill(emptyHpBarColor)
    rect(250, 80, 50, 10)
    pop()

    push()
    fill(HpbarColor)
    let monsterHP = enemy_stat["hp"] / enemy_stat["maxhp"]
    rect(250, 80, 50 * monsterHP , 10)
    pop()


    push()
    scale(-1,1)
    image(IMG["👧"], -150, 100, 50, 50)
    pop()

    image(IMG[enemy_name], 250, 100, 50, 50)

    if (SLIDE == true){
      // sliding bar moving code here 
      // draw the 3 bar overlay on top of each other, the size depending on stats
      let redWidth = 380
      let redX = 10
      push()
      let red = color(255,0,0);
      fill(red);
      rect(redX, 15, redWidth, 50);
      pop()

    let ratio 
      //get stat ratio
    if (SELECT == "fight"){
        ratio =Math.round( ( playerStats["str"] + playerEquipmentStats["str"]) / enemy_stat["def"] * 100) / 100;
        console.log("attack ratio:",ratio)
    }else if (SELECT == "block"){
        ratio = Math.round( (playerStats["def"] + playerEquipmentStats["def"]) /  (enemy_stat["str"] + enemy_stat["spd"])* 100) / 100;
        console.log("block ratio:",ratio)
    }
      // else{
      //    let ratio = playerStats[]
      // }

      yellowWidth = (redWidth * 0.5) * ratio
      if (yellowWidth > redWidth){
        yellowWidth = redWidth
      }
      let yemptySpace = redWidth - yellowWidth
      yellowX = redX + yemptySpace/2
      push()
      let yellow = color(255,223,0);
      fill(yellow);
      rect(yellowX, 15, yellowWidth, 50);
      pop()

      //green crit bar: base width * ratio
      greenWidth  = ((1/16)*redWidth) * ratio
      if (greenWidth < SLIDERWIDTH){
        greenWidth = SLIDERWIDTH
      }
      let gemptySpace = yellowWidth - greenWidth
      greenX = redX + yemptySpace/2 + gemptySpace/2
      push()
      let green = color(0,255,0,190);
      fill(green);
      rect(greenX, 15, greenWidth, 50);
      pop()

      //moving slide 
      push()
      let gray = color(50,50,50)
      fill(gray)
      rect(SLIDERX, 15, SLIDERWIDTH, 50);
      pop()


      //move slider ( manipulate slider speed by subtracting SLIDERSPEED )
      SLIDERX += ( (SLIDERSPEED * (enemy_stat["spd"]/( playerStats["spd"]+playerEquipmentStats["spd"] ))   )* (deltaTime/1000) * SLIDERDIR)

      if ( (SLIDERX + SLIDERWIDTH) >= (redX+redWidth)){
        SLIDERDIR *= -1
        SLIDERX = redX+redWidth - SLIDERWIDTH // #make sure slider dont go out of right edge
      }else if (SLIDERX <= redX){
        SLIDERDIR *= -1
        SLIDERX = redX
      }
    }

    return
  }
  
  if(INBATTLE == false){
  
      //render the map
      for (let i = 0; i < LEVELMAP.length;i++){
        for (let j = 0; j < LEVELMAP[i].length; j++){
          if (i>=playerStats["py"]-(vision+1) && i<=playerStats["py"]+(vision+1) && j>=playerStats["px"]-(vision+1) && j <= playerStats["px"]+(vision+1) ){
            
            let back = LEVELMAP[i][j]
            let fore = LEVELFORE[i][j]
            // console.log("back",back, "pos number", i, j)
            // console.log("fore",fore, "pos number:",i, j)

            //background tile
            image(IMG[back], j*size, i*size, size, size)


            //foreground items / interactives
            if (fore != ""){
              image(IMG[fore], j*size, i*size, size, size)
            }
            
            //special foreground items
            if (fore == "🧰"){
              if (storageState == "opened"){
                image(IMG["open 🧰"], j*size, i*size, size, size)
              }
            }
    
            //displays the fog on edge overlay
            if(i==playerStats["py"]-(vision+1) && j==playerStats["px"]-(vision+1)){
              image(IMG["fogupleft"], j*size, i*size, size, size)
            }else if (i==playerStats["py"]-(vision+1) && j==playerStats["px"]+(vision+1)) {
              image(IMG["fogupright"], j*size, i*size, size, size)
            }else if (i==playerStats["py"]+(vision+1) && j==playerStats["px"]-(vision+1)) {
              image(IMG["fogdownleft"], j*size, i*size, size, size)
            }else if (i==playerStats["py"]+(vision+1) && j==playerStats["px"]+(vision+1)) {
              image(IMG["fogdownright"], j*size, i*size, size, size)
            }else if (i==playerStats["py"]-(vision+1)) {
              image(IMG["fogup"], j*size, i*size, size, size)
            }else if(i==playerStats["py"]+(vision+1)){
              image(IMG["fogdown"], j*size, i*size, size, size)
            }else if(j==playerStats["px"]-(vision+1)){
              image(IMG["fogleft"], j*size, i*size, size, size)
            }else if(j==playerStats["px"]+(vision+1)){
              image(IMG["fogright"], j*size, i*size, size, size)
            }
  
           
          }else{
            //everything outside of the fog
            fill(color(35,35,35))
            stroke(color(35,35,35))
            square(j*size, i *size, size )
          }
    
        }
      }// nested forloops for map
      
      
      // displays player image; always above everything
      if (playerdirection=="left"){
        image(IMG["👧"], playerStats["px"]*size, playerStats["py"]*size, size, size)
      }else{
        push()
        scale(-1,1)
        image(IMG["👧"], -playerStats["px"]*size-size, playerStats["py"]*size, size, size)
        pop()
      }
    

    }

  
}

//how to interact
function keyReleased(){

  if(INCUTSCENE){
    return
  }
  
  //interaction ( f key)
  if (key === "f" && INBATTLE==false){
    if (interactions.includes(LEVELFORE[playerStats["py"]][playerStats["px"]])){
      interact_functions[ LEVELFORE[playerStats["py"]][playerStats["px"]] ] (
        item = LEVELFORE[playerStats["py"]][playerStats["px"]],
        inv = inventory, 
        foreground = LEVELFORE, 
        x = playerStats["px"], 
        y = playerStats["py"])
    }
  }

  
}

function keyPressed() {

  if (INCUTSCENE){
    return
  }

  // battle == True
  if(INBATTLE == true && SLIDE == true && SLIDEPAUSE == false){
    console.log(`space pressed , selected:${SELECT}` )
    if (keyCode === 32){
      SLIDEPAUSE = true
      // dmg calculation
      let dmg = 0
      if (SELECT == "fight"){
        dmg = getDmg(attacker = playerStats, 
          defender = enemy_stat,  
          equipment_stat = playerEquipmentStats )

      }else if (SELECT == "block"){
        dmg = getDmg(attacker = enemy_stat, 
           defender = playerStats,  
           equipment_stat = playerEquipmentStats,
           enemy = true)
      }

      // ATTACK!!
      if (SELECT == "fight"){
        if (SLIDERX >= greenX && SLIDERX+SLIDERWIDTH <= greenX+greenWidth){
          myprint("You landed a critical hit!", "help")
          dmg = dmg * 2
        }else if (SLIDERX >= yellowX && SLIDERX+SLIDERWIDTH <= yellowX+yellowWidth){
          myprint("You landed a hit.", "help")
        }else{
          myprint("You missed!", "danger")
          dmg = 0
        }

        // check if regular hit
        enemy_stat["hp"] -= dmg
        myprint(`You did ${dmg} damage!`, "help")

        //pauses the slider
        SLIDERDIR = 0
        setTimeout(()=>{
           SLIDE = false
           SLIDEPAUSE = false
           SLIDERDIR = 1
           SLIDERX =  10 // set slider back to the start
        },1000)


        // when enemy is defeated
        if (enemy_stat["hp"] <= 0){
          INBATTLE = false
          showMapCanvas()
          try {
            myprint(`You defeated the ${MONSTER_STATS[enemy_name]["name"]}`)
          }catch(e){
            //if fighting boss get rid of boss
            myprint(`You defeated the ${BOSS_STATS[enemy_name]["name"]}`)
            LEVELFORE[nexty][nextx] = "" // change nexty & nextX to boss location
          }
          let loot = Math.floor( random(1, enemy_stat["money"] + 1))
          myprint(`you gained ${loot} rb`)
          // give money or rb to the player
          playerMoney += loot
          updateMoney()
          updateStats()

          
        }else{
           monsterTurn(playerStats, enemy_stat)
        }

        
      }else if (SELECT == "block"){

        //pauses the slider
        SLIDERDIR = 0
        setTimeout(()=>{
          console.log("slider pause")
           SLIDE = false
           SLIDEPAUSE = false
           SLIDERDIR = 1
           SLIDERX =  10 // set slider back to the start
        },1000)

        // slider within green area when blocking 
        if (SLIDERX >= greenX && SLIDERX+SLIDERWIDTH <= greenX+greenWidth){
          myprint("You parried the enemies attack!", "help")
          dmg = 10 + (dmg * 2)

          // check if regular hit
          enemy_stat["hp"] -= dmg
          myprint(`You did ${dmg} damage!`, "help")

         // when enemy is defeated
          if (enemy_stat["hp"] <= 0){
            INBATTLE = false
            showMapCanvas()

            try {
              myprint(`You defeated the ${MONSTER_STATS[enemy_name]["name"]}`)
            }catch(e){
              //if fighting boss get rid of boss
              myprint(`You defeated the ${BOSS_STATS[enemy_name]["name"]}`)
              LEVELFORE[nexty][nextx] = "" // change nexty & nextX to boss location
            }
            let loot = Math.floor( random(1, enemy_stat["money"] + 1))
            myprint(`you gained ${loot} rb`)
            // give money or rb to the player
            playerMoney += loot
            updateMoney()

          }

        }else if (SLIDERX >= yellowX && SLIDERX+SLIDERWIDTH <= yellowX+yellowWidth){
          myprint(`You blocked! but took ${dmg} damage`, "help")
          dmg = Math.round( dmg * 0.5 )
          playerStats["hp"] -= dmg
          
        }else{
          myprint("You failed to block", "danger")
          playerStats["hp"] -= dmg
        }

        if (playerStats["hp"] <= 0) {
          myprint(`You have been defeated`, "danger")
          GAMEOVER = true;
        }


        updateStats()

        
      }// if block is the option
    }// if space press
  }

  if (INBATTLE == false){
    nexty = playerStats["py"]
    nextx = playerStats["px"]

    // Code to run.
    if (keyCode == UP_ARROW || keyCode == 87){
      if (nexty-1>=0){
        nexty-=1
      }

      
    }
    else if (keyCode == DOWN_ARROW || keyCode == 83){
      if (nexty+1<LEVELMAP.length){
        nexty+=1
      }


    }
    else if (keyCode == RIGHT_ARROW || keyCode == 68){
      playerdirection="right"
  
      if (nextx+1<LEVELMAP[0].length){
        nextx+=1
      }


    }
    else if (keyCode == LEFT_ARROW || keyCode == 65){
      playerdirection="left"
  
      if (nextx-1>=0){
        nextx-=1
      }


    }

    
  
    //if move away from chest
    if (LEVELFORE[nexty][nextx] != "🧰"){
      closeChest()
    }

    //if move away from shop
    if (LEVELFORE[nexty][nextx] != "🏪"){
      document.getElementById("shop").style.display = "none"
    }

    // if we run into walls or collidables
    if (collidables.includes(LEVELMAP[nexty][nextx]) || 
        collidables.includes(LEVELFORE[nexty][nextx]) ){
        nextx=playerStats["px"]
        nexty=playerStats["py"]
    }
    //boss fight
    else if( LEVELFORE[nexty][nextx] in BOSS_STATS ){
      INBATTLE = true
      
      enemy_name = LEVELFORE[nexty][nextx]
      let displayname = BOSS_STATS[enemy_name ]["name"]
      myprint(`you've encountered the ${displayname}!`,type="warning")

      enemy_stat["hp"] = BOSS_STATS[enemy_name]["hp"]
      enemy_stat["maxhp"] = BOSS_STATS[enemy_name]["maxhp"]
      enemy_stat["str"] = BOSS_STATS[enemy_name]["str"]
      enemy_stat["def"] = BOSS_STATS[enemy_name]["def"]
      enemy_stat["spd"] = BOSS_STATS[enemy_name]["spd"]
      enemy_stat["money"] = BOSS_STATS[enemy_name]["money"]
      enemy_stat["pwr"] = BOSS_STATS[enemy_name]["pwr"]
      
      showBattleCanvas()

      return
    
    }  
    else{

    
    //allows player to move
    playerStats["px"]=nextx
    playerStats["py"]=nexty


    //check if scene is triggered
    if (playerStats["px"] == 0 && playerStats["py"] == 0 && 
        LEVEL == 2 && INCUTSCENE == false){
          console.log("PLaying cut scene")
          document.body.style.pointerEvents = 'none'; //disable all mouse interaction
    }


  
    if ( (LEVEL < 4) && 
        (keyCode == 87 || keyCode == 83 ||
        keyCode == 65 || keyCode == 68 || 
         RIGHT_ARROW || LEFT_ARROW || 
         DOWN_ARROW || UP_ARROW ) 
       ){
        monsterEncounter()
    }

      

  }

  }
}


function mouseClicked(){
  
  if (INBATTLE == false || SLIDE == true){
    return //
  }

  //fight
  if (mouseX >= fightX && mouseY >= fightY && mouseX <= fightX + fightW && mouseY <= fightY +fightH){
    console.log("fight!")
    SELECT = "fight"
    SLIDE = true
  }

  //item
  if (mouseX >= itemX && mouseY >= itemY && mouseX <= itemX + itemW && mouseY <= itemY +itemH){
    console.log("item!")
    SLIDE = true
    SELECT = "block"

  }
  
  //check
  if (mouseX >= checkX && mouseY >= checkY && mouseX <= checkX + checkW && mouseY <= checkY +checkH){
    console.log("check!")

    if (enemy_name in BOSS_STATS){
      myprint(`The ${BOSS_STATS[enemy_name]["name"]}'s stats cannot be inspected!`)
    }
    else{
      myprint("====== "+ MONSTER_STATS[enemy_name]["name"] + "'s stats ======")
      myprint("hp: " + enemy_stat["hp"])
      myprint("str: " + enemy_stat["str"])
      myprint("def: " + enemy_stat["def"])
      myprint("spd: " + enemy_stat["spd"])
    }
  }
  
  //run
  if (mouseX >= runX && mouseY >= runY && mouseX <= runX + runW && mouseY <= runY +runH){
    /**       
     *            ratio                  base    base       
     *     [(p_spd - e_spd) / e_spd ] * (1/3) + (1/3)
     */
    var baseChance = (1/3)

    if (enemy_stat["spd"] > 0){
      var speedRatio = ((playerStats["spd"] + playerEquipmentStats["spd"]) - enemy_stat["spd"]) / enemy_stat["spd"] 
    }else{
      var speedRatio = ((playerStats["spd"] + playerEquipmentStats["spd"]))
    }
    
    var runChance = speedRatio * (1/3) + (1/3)
    
    // console.log("runchance",runChance)

    var percent = Math.floor(Math.random() * 100) + 1

    if (percent <= runChance*100 ){
      INBATTLE=false
      showMapCanvas()

      myprint("You ran from the fight.")
      updateStats()
    }else{
      myprint("You couldn't get away.", "warning")
      monsterTurn(playerStats, enemy_stat)
    }
    
  }
  
}


function monsterTurn(player_stats, enemy_stat){
  /*
  This function should only subtract the player's hp  
  */
  
  let dmg = getDmg(attacker = enemy_stat, 
                   defender = player_stats,  
                   equipment_stat = playerEquipmentStats,
                   enemy = true)



    player_stats["hp"] -= dmg
    myprint(`You lost ${dmg} health!`, "danger")
    updateStats()
  
    if (playerStats["hp"] <= 0) {
      myprint(`You have been defeated`, "danger")
      GAMEOVER = true;
    }
  
}


function getDmg(attacker,defender,equipment_stat,  enemy = false){
  
  let dmg = 0;
    // enemy attacking
   if (enemy == true){
      dmg = (attacker["pwr"] * (1+ ( 5*attacker["str"]/100))) * (130/ (100+15*(defender["def"]+equipment_stat["def"]) ) )
   }else{
      //player attacking
      dmg = (attacker["pwr"] * (1+ ( 5*(attacker["str"] + equipment_stat["str"])/100))) * (130/ (100+10*(defender["def"]) ) )
   }

  // decide if you crit or not
  if (enemy == true){
    let critChance = random(1,101)
    if (critChance <=5 && critChance >=1){
      myprint("You were hit by a critical hit!", "danger")
      dmg = dmg * 1.5
    }
  }

  
  dmg = Math.round( dmg )
  return dmg
}