var interact_functions = {
	"📏" : pickupItem,
  "🧰" : openChest
	
}


function pickupItem(item = null,inv = null, map = null, x = null, y = null){
	if (item == null || inv == null){
		return // get out of function 
	}

	// the inventory should only be 8 slots wide
	if(inv.length <8){
		inv.push(item)
		map[y][x] = "t2"
		console.log("you picked up:", item)
		document.getElementById("i"+ inv.length).style.backgroundImage = "url('/assets/stick.png')"
	} else{
		console.log("your invetory is too full")
	}
	console.log("your inventory:", inv )
	

}

function openChest(item = null,inv = null, map = null, x = null, y = null){
  if (storageState == "closed"){
    storageState = "opened"
  } else if (storageState == "opened"){
    storageState = "closed"
  }
}


