var px = 0
var py = 0
var itemID = 0
var bagCapacity = 10	
var curBagCapacity = 0
var storageState = "closed"
var playerMoney = 20
var inventoryState = "open"

playerStats = {
  "px":px,
  "py":py,
  "hp":20,
  "maxhp":20,
  "str":1,
  "def":3,
  "spd":2,
  "chr":0,
  "pwr":5
}

playerEquipmentStats = {
  "str":0,
  "def":0,
  "spd":0,
  "chr":0,
}


playerEquipment = {
  "hat":null,
  "hand":null,
  "torso":null,
  "pants":null,
  "shoes":null
}



function updateMoney(){
  let span = document.getElementById("playermoney")
  span.innerHTML = playerMoney
}
updateMoney()

//write code to take stats from the dictionary and place them onto the html elements

function updateStats(){
  /** Must call this function to update the display whenever the player's stats change */
  for(var key in playerStats){

    if (key =="px" || key == "py"){
      continue
    }
    
    if(playerStats.hasOwnProperty(key)){
      if (key == "hp"){
        let e = document.getElementById(key)
        e.innerText = `${playerStats["hp"]} / ${playerStats["maxhp"]}`
      }else if (key == "pwr" || key == "maxhp"){
        continue
      }else{
        let e = document.getElementById(key)
        e.innerText = playerStats[key] + playerEquipmentStats[key]
      }

    }
    
  }
}

updateStats()

var inventory = [] // ["i0", "i1"..]

var chestinventory = [] // ["i0", "i1"..]

function modifyWeight(itemString, symbol) {
  /** 
   * This function is responsible for changing the weight
   * capacity and updating the graphics
   */
  
  console.log(itemString, symbol)
	if (symbol == "-"){
		curBagCapacity -= ITEM_WEIGHTS[itemString]
	}else{
		curBagCapacity += ITEM_WEIGHTS[itemString]
	}
  let weightbar = document.getElementById("inventory-weight")
  weightbar.style.width = (curBagCapacity/bagCapacity)*100 +"%"
  if(curBagCapacity == bagCapacity){
    weightbar.style.backgroundColor = "darkred"
  }else{
    weightbar.style.backgroundColor = "gray"
  }
}

function modifyStats(itemString, symbol) {
  if (symbol == "-"){
    for (let stat in ITEM_STATS[itemString]){
      playerEquipmentStats[stat] -= ITEM_STATS[itemString][stat]
    }
  }else{
    for (let stat in ITEM_STATS[itemString]){
      playerEquipmentStats[stat] += ITEM_STATS[itemString][stat]
    }
  }
  updateStats()
}