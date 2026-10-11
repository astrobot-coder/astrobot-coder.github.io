
// determine what functions to run whenever you pickup the item
var interact_functions = {
	"📏": pickupItem,
	"🧰": openChest,
	"🏪": openShop,
	"p1": pickupItem,
	"p2": pickupItem,
	"p3": pickupItem,
	"gloves": pickupItem,
	"boot1": pickupItem,
	"boot2": pickupItem,
	"cloak1": pickupItem,
	"armor1": pickupItem,
	"pants1": pickupItem,
	"helmet1": pickupItem,
	"🚪": nextLevel,

	//level 2
	"p4": pickupItem,
	"p5": pickupItem,
	"p6": pickupItem,
	"dagger1": pickupItem,
	"dagger2": pickupItem,
	"axe1": pickupItem,
	"shield1": pickupItem,
	"gloves2": pickupItem,
	"helmet2": pickupItem,
	"cloak2": pickupItem,
	"armor2": pickupItem,
	"pants2": pickupItem,
	"boot3": pickupItem,
}

function nextLevel(item, inv, map, x, y) {
	
	if (LEVEL == 1) {
		
		LEVEL = 2
		canvasWIDTH = 500
		canvasHEIGHT = 500
		resizeCanvas(canvasWIDTH, canvasHEIGHT)
		LEVELMAP = MAP2
		LEVELFORE = MAP2OVERLAY
		playerStats["px"] = 0
		playerStats["py"] = 0


		
		playerStats["hp"] = 30
		playerStats["maxhp"] = 30
		playerStats["str"] = 2
		playerStats["def"] = 3
		playerStats["spd"] = 3
		playerStats["chr"] = 1
		playerStats["pwr"] = 6
		relocateEquipmentsForLevel(100, 0)

		
	}else if ( LEVEL == 2){
		LEVEL = 3
		canvasWIDTH = 600
		canvasHEIGHT = 600
		resizeCanvas(canvasWIDTH, canvasHEIGHT)
		playerStats["px"] = 0
		playerStats["py"] = 0
		LEVELMAP = MAP3
		LEVELFORE = MAP3OVERLAY
		blackGhostPosition()

		playerStats["hp"] = 40
		playerStats["maxhp"] = 40
		playerStats["str"] = 5
		playerStats["def"] = 4
		playerStats["spd"] = 4
		playerStats["chr"] = 2
		playerStats["pwr"] = 7

		let body = document.getElementsByTagName("body")[0]
		body.style.background = "rgb(49,0,71);"
		
		relocateEquipmentsForLevel(100,0)
		
	}else if (LEVEL == 3 ){ // at level 3 going to lvl 4
		vision = 1 
		LEVEL = 4
		canvasWIDTH = 250
		canvasHEIGHT = 400
		resizeCanvas(canvasWIDTH, canvasHEIGHT)
		playerStats["px"] = 2
		playerStats["py"] = 7
		LEVELMAP = MAP4
		LEVELFORE = MAP4OVERLAY
		relocateEquipmentsForLevel(-350,-200)

		//fogg reveal animation 
		vision = 1 
		var animationInterval = setInterval(()=>{
			if (vision == 10){
				clearInterval(animationInterval)
			}
			vision += 1
			
		},600)

	}

	

	updateStats()
}


function openShop(item, inv, map, x, y) {
// the parameters are not going to be used!
	adjustPrice()

	
	let shop = document.getElementById("shop")
	console.log(shop)
	console.log("shop style:", shop.style.display )
	if (shop.style.display == "none" ){
		shop.style.display = "block"
	}else{
		shop.style.display = "none"
	}
}

//track whether the mouse is draggin and the mouse button is helddown
var mousehold = false



//makes things draggable
function dragElement(elmnt) {

	var highlightdiv = document.getElementById("hoverbox");
	//disable hoverbox transition
	highlightdiv.style.opacity = "0"

	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	var ogX, ogY
	elmnt.onmousedown = dragMouseDown;


	function dragMouseDown(e) {
		mousehold = true
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		highlightdiv.style.opacity = "0"


		pos3 = e.clientX;
		pos4 = e.clientY;
		ogX = elmnt.offsetLeft
		ogY = elmnt.offsetTop

		// this callback function must be apply to the document, because item being dragged is moving the "DOCUMENT" itself!
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();


		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		// highlightdiv.style.top = elmnt.style.bottom+"px"
		// highlightdiv.style.left = elmnt.style.right+"px"

	}

	function closeDragElement() {
		mousehold = false
		// highlightdiv.style.transition = "opacity 0.5s"


		// set the element's new position:
		let newY = elmnt.offsetTop
		let newX = elmnt.offsetLeft
		let eW = elmnt.offsetWidth
		let eH = elmnt.offsetHeight

		//center coordinate of the element
		let ecX = newX + (eW/2)
		let ecY = newY + (eH/2)

		let inv = document.getElementById("inventory")
		let invX = inv.offsetLeft
		let invY = inv.offsetTop
		let invW = inv.clientWidth
		let invH = inv.clientHeight

		let chest = document.getElementById("chest-inventory")
		let chestX = chest.offsetLeft
		let chestY = chest.offsetTop
		let chestW = chest.offsetWidth
		let chestH = chest.offsetHeight

		let trash = document.getElementById("trash")
		let trashX = trash.offsetLeft
		let trashY = trash.offsetTop
		let trashW = trash.offsetWidth
		let trashH = trash.offsetHeight

		let hat = document.getElementById("hat")
		let hatX = hat.offsetLeft
		let hatY = hat.offsetTop
		let hatW = hat.offsetWidth
		let hatH = hat.offsetHeight
		console.log(`Hat location:${hatX}, ${hatY}`)

		let torso = document.getElementById("torso")
		let torsoX = torso.offsetLeft
		let torsoY = torso.offsetTop
		let torsoW = torso.offsetWidth
		let torsoH = torso.offsetHeight

		let pants = document.getElementById("pants")
		let pantsX = pants.offsetLeft
		let pantsY = pants.offsetTop
		let pantsW = pants.offsetWidth
		let pantsH = pants.offsetHeight

		let hand = document.getElementById("hand")
		let handX = hand.offsetLeft
		let handY = hand.offsetTop
		let handW = hand.offsetWidth
		let handH = hand.offsetHeight

		let shoes = document.getElementById("shoes")
		let shoesX = shoes.offsetLeft
		let shoesY = shoes.offsetTop
		let shoesW = shoes.offsetWidth
		let shoesH = shoes.offsetHeight

		// if user drags item from inventory or body into chest
		if (newX > chestX && newY > chestY && (newX + eW) < (chestX + chestW) && (newY + eH) < (chestY + chestH)) {
			if (storageState == "opened" && elmnt.dataset.location == "inventory") {
				chestinventory.push(elmnt.id)
				modifyWeight(elmnt.dataset.item, symbol = "-")
				elmnt.dataset.location = "chest"
			} else if (storageState == "opened" && elmnt.dataset.location == "body") {

				chestinventory.push(elmnt.id)
				elmnt.dataset.location = "chest"
				playerEquipment[ITEM_PLACE[elmnt.dataset.item]] = null
				modifyStats(elmnt.dataset.item, "-")


			} else if (storageState == "opened" && elmnt.dataset.location == "chest") {

			} else {
				elmnt.style.top = ogY + "px"
				elmnt.style.left = ogX + "px"
			}
		}

		//check if player let go of mouse over the inventory
		else if (newX > invX && newY > invY && (newX + eW) < (invX + invW) && (newY + eH) < (invY + invH)) {
			// remove the item from the cheststorage list 
			//console.log("dropping off:", elmnt.dataset.item)
			if (storageState == "opened" && validWeight(elmnt.dataset.item) == true && elmnt.dataset.location == "chest") {
				let index = chestinventory.indexOf(elmnt.id)
				//index: the item we want to get rid of; 1: shows how many we are getting rid of
				chestinventory.splice(index, 1)
				modifyWeight(elmnt.dataset.item, symbol = "+")
				elmnt.dataset.location = "inventory"
			} else if (elmnt.dataset.location == "inventory") { // if the item was already in the bag

			} else if (elmnt.dataset.location == "body" && validWeight(elmnt.dataset.item)) { // unequiping
				if (SLIDE){
					myprint("You cannot change equipment while doing an action", 'warning')
					elmnt.style.top = ogY + "px"
					elmnt.style.left = ogX + "px"
					document.onmouseup = null;
					document.onmousemove = null;
					return
				}
				modifyWeight(elmnt.dataset.item, symbol = "+")
				elmnt.dataset.location = "inventory"
				playerEquipment[ITEM_PLACE[elmnt.dataset.item]] = null
				modifyStats(elmnt.dataset.item, "-")

			} else if (elmnt.dataset.location != "inventory" && validWeight(elmnt.dataset.item)) { // if the player drags a item from anywhere else besides storage chest back into the inventory
				modifyWeight(elmnt.dataset.item, symbol = "+")
				elmnt.dataset.location = "inventory"
			} else {
				elmnt.style.top = ogY + "px"
				elmnt.style.left = ogX + "px"
				console.log("GO BACK! inventory full")
			}
		}

		//check if player let go of mouse over the trash
		else if (newX > trashX && newY > trashY && (newX + eW) < (trashX + trashW) && (newY + eH) < (trashY + trashH)) {
			if (elmnt.dataset.location == "inventory") {
				modifyWeight(elmnt.dataset.item, symbol = "-")
				for (let i = 0; i < inventory.length; i++) {
					if (inventory[i] == elmnt.id) {
						inventory.splice(i, 1)
						break
					}
				}
			}
				
			else if (elmnt.dataset.location == "chest") {
				for (let i = 0; i < inventory.length; i++) {
					if (inventory[i] == elmnt.id) {
						inventory.splice(i, 1)
						break
					}
				}
			}
			
			else if (elmnt.dataset.location == "body"){
				modifyStats(elmnt.dataset.item, "-")
				playerEquipment[ITEM_PLACE[elmnt.dataset.item]] = null
				for (let i = 0; i < inventory.length; i++) {
					if (inventory[i] == elmnt.id) {
						inventory.splice(i, 1)
						break
					}
				}
			}

			elmnt.remove()

		}

		//check if player let go of item/mouse over the hat slot
		else if (ecX > hatX && ecY > hatY && ecX < (hatX + hatW) && ecY < (hatY + hatH)) {
			if (ITEM_PLACE[elmnt.dataset.item] == "hat" && playerEquipment["hat"] === null) {
				let index = chestinventory.indexOf(elmnt.id)
				//index: the item we want to get rid of; 1: shows how many we are getting rid of
				chestinventory.splice(index, 1)

				elmnt.style.left = (hatX + 5) + "px"
				elmnt.style.top = (hatY + 10) + "px"
				if (elmnt.dataset.location == "inventory") {
					modifyWeight(elmnt.dataset.item, symbol = "-")
				}
				elmnt.dataset.location = "body"
				playerEquipment["hat"] = elmnt.dataset.item

				// increase the player's stat 
				// lets get the dictionary of stats for the item
				modifyStats(elmnt.dataset.item, "+")
			} else {
				myprint("This isn't a hat", "warning")
				elmnt.style.top = ogY + "px"
				elmnt.style.left = ogX + "px"
			}
		}

		//check if player let go of item/mouse over the torso slot
		else if (ecX > torsoX && ecY > torsoY && ecX < (torsoX + torsoW) && ecY < (torsoY + torsoH)) {
			if (ITEM_PLACE[elmnt.dataset.item] == "torso" && playerEquipment["torso"] === null) {
				let index = chestinventory.indexOf(elmnt.id)
				//index: the item we want to get rid of; 1: shows how many we are getting rid of
				chestinventory.splice(index, 1)

				elmnt.style.left = (torsoX + 5) + "px"
				elmnt.style.top = (torsoY + 10) + "px"
				if (elmnt.dataset.location == "inventory") {
					modifyWeight(elmnt.dataset.item, symbol = "-")
				}
				elmnt.dataset.location = "body"
				playerEquipment["torso"] = elmnt.dataset.item

				// increase the player's stat 
				// lets get the dictionary of stats for the item
				modifyStats(elmnt.dataset.item, "+")
			} else {
				myprint("This isn't armor", "warning")
				elmnt.style.top = ogY + "px"
				elmnt.style.left = ogX + "px"
			}
		}

		//check if player let go of item/mouse over the pants slot
		else if (ecX > pantsX && ecY > pantsY && ecX < (pantsX + pantsW) && ecY < (pantsY + pantsH)) {
			if (ITEM_PLACE[elmnt.dataset.item] == "pants" && playerEquipment["pants"] === null) {
				let index = chestinventory.indexOf(elmnt.id)
				//index: the item we want to get rid of; 1: shows how many we are getting rid of
				chestinventory.splice(index, 1)

				elmnt.style.left = (pantsX + 5) + "px"
				elmnt.style.top = (pantsY + 10) + "px"
				if (elmnt.dataset.location == "inventory") {
					modifyWeight(elmnt.dataset.item, symbol = "-")
				}
				elmnt.dataset.location = "body"
				playerEquipment["pants"] = elmnt.dataset.item

				// increase the player's stat 
				// lets get the dictionary of stats for the item
				modifyStats(elmnt.dataset.item, "+")
			} else {
				myprint("These aren't pants", "warning")
				elmnt.style.top = ogY + "px"
				elmnt.style.left = ogX + "px"
			}
		}

		//check if player let go of item/mouse over the hand slot
		else if (ecX > handX && ecY > handY && ecX < (handX + handW) && ecY < (handY + handH)) {
			if (ITEM_PLACE[elmnt.dataset.item] == "hand" && playerEquipment["hand"] === null) {
				let index = chestinventory.indexOf(elmnt.id)
				//index: the item we want to get rid of; 1: shows how many we are getting rid of
				chestinventory.splice(index, 1)

				elmnt.style.left = (handX + 5) + "px"
				elmnt.style.top = (handY + 10) + "px"
				if (elmnt.dataset.location == "inventory") {
					modifyWeight(elmnt.dataset.item, symbol = "-")
				}
				elmnt.dataset.location = "body"
				playerEquipment["hand"] = elmnt.dataset.item

				// increase the player's stat 
				// lets get the dictionary of stats for the item
				modifyStats(elmnt.dataset.item, "+")
			} else {
				myprint("This isn't a weapon", "warning")
				elmnt.style.top = ogY + "px"
				elmnt.style.left = ogX + "px"
			}
		}

		//check if player let go of item/mouse over the shoes slot
		else if (ecX > shoesX && ecY > shoesY && ecX < (shoesX + shoesW) && ecY < (shoesY + shoesH)) {
			if (ITEM_PLACE[elmnt.dataset.item] == "shoes" && playerEquipment["shoes"] === null) {
				let index = chestinventory.indexOf(elmnt.id)
				//index: the item we want to get rid of; 1: shows how many we are getting rid of
				chestinventory.splice(index, 1)

				elmnt.style.left = (shoesX + 5) + "px"
				elmnt.style.top = (shoesY + 10) + "px"
				if (elmnt.dataset.location == "inventory") {
					modifyWeight(elmnt.dataset.item, symbol = "-")
				}
				elmnt.dataset.location = "body"
				playerEquipment["shoes"] = elmnt.dataset.item

				// increase the player's stat 
				// lets get the dictionary of stats for the item
				modifyStats(elmnt.dataset.item, "+")
			} else {
				myprint("These aren't shoes", "warning")
				elmnt.style.top = ogY + "px"
				elmnt.style.left = ogX + "px"
			}
		}
		else {
			console.log("GO BACK!")
			// set the elmnt's postion to ogx and ogy
			elmnt.style.top = ogY + "px"
			elmnt.style.left = ogX + "px"

		}
		document.onmouseup = null;
		document.onmousemove = null;
	}

}

function myprint(message, type = "normal") {
	/*** 
	 * types: nomral, warning, help 
	 *
	 */
	let p = document.createElement("p")
	p.innerHTML = message
	p.classList.add("message")
	p.classList.add(type)
	let msgconsole = document.getElementById("messageconsole")
	msgconsole.appendChild(p)
	if (msgconsole.childElementCount >= 50) {
		msgconsole.removeChild(msgconsole.firstElementChild)
	}
	msgconsole.scrollTop = msgconsole.scrollHeight

}

function validWeight(item) {

	/* this function return either true if the given item fits into the
	  player's inventory or false if not. 

		parameter: item (string) of the the item's name
	*/

	if (curBagCapacity + ITEM_WEIGHTS[item] > bagCapacity) {
		myprint("Your bag is full!", "warning")
		return false
	} else {
		return true
	}
}

function pickupItem(item = null, inv = null, foreground = null, x = null, y = null) {
	/**
	 *item -> string of the item name
	 * 
	 */
	if (!validWeight(item)) {
		return
	}

	if (item == null || inv == null) {
		return // get out of function 
	}
	foreground[y][x] = ""
	let tempdiv = document.createElement("div")
	tempdiv.style.backgroundImage = `url(${IMG_FILES[item]})`
	tempdiv.style.backgroundSize = "80%"
	tempdiv.id = "i" + itemID
	tempdiv.className = "inventory-slot"
	tempdiv.dataset.item = item // name of item
	tempdiv.dataset.location = "inventory"
	itemID += 1 // update Id for the next item
	dragElement(tempdiv) // make item draggable

	tempdiv.style.position = "absolute"

	//add click to the item's HTML element
	tempdiv.addEventListener("click", (event) => {
		hoverbox.style.opacity = "0"
	})

	// make this happen for consumbles only
	//determine what hapens when you double click on the item
	if ( !( tempdiv.dataset.item in ITEM_PLACE ) ){
		tempdiv.addEventListener("dblclick", (event)=>{

			if (tempdiv.dataset.location == "inventory"){
				USE_CONSUMABLE[tempdiv.dataset.item]( tempdiv.dataset.item )
				let item_index = inventory.indexOf(tempdiv.id)
				inventory.splice(item_index,1)
				tempdiv.remove()
				updateStats()
				modifyWeight(tempdiv.dataset.item, "-")
			}else{
				myprint("Potion must be in inventory area to consume.","warning")
			}
		})
	} 

	//add onhover event
	tempdiv.addEventListener("mouseover", (event) => {

		//reset the content of the hoverbox inner HTML
		hoverbox.innerHTML = ""

		// if mouse is dragging DO NOT SHOW UP
		if (mousehold == true) {
			return
		}

		//retrieve item info and display it into the hoverbox div
		// use tempdiv.dataset.item)
		let description = ITEM_INFO[tempdiv.dataset.item]["description"]
		let cost = ITEM_INFO[tempdiv.dataset.item]["cost"]

		let descriptionPtag = document.createElement("p")
		let costPtag = document.createElement("p")


		descriptionPtag.innerText = description
		descriptionPtag.style.fontWeight = "bold"

		if (cost != null) {
			costPtag.innerText = `Worth: ${cost} rb`
		}

		hoverbox.appendChild(descriptionPtag)
		hoverbox.appendChild(costPtag)

		hoverbox.style.position = "absolute"
		hoverbox.style.left = tempdiv.offsetLeft + tempdiv.offsetWidth + "px"
		hoverbox.style.top = tempdiv.offsetTop + tempdiv.offsetHeight + "px"
		hoverbox.style.opacity = "1"
		hoverbox.style.display = "block"
	})

	//add onhover mouseout
	tempdiv.addEventListener("mouseout", (event) => {
		hoverbox.style.opacity = "0"
		hoverbox.style.display = "none"
	})

	let htmlinv = document.getElementById("inventory")
	htmlinv.appendChild(tempdiv)
	addToInventory(tempdiv.id)

}

//for anything adding to inventory, overworld and chest
function addToInventory(itemID) {
	// item must exist as a html element
	let item = document.getElementById(itemID)
	let itemWeight = ITEM_WEIGHTS[item.dataset.item]
	let itemName = item.dataset.item
	if (curBagCapacity + itemWeight <= bagCapacity) {
		myprint(`You got a ${ITEM_NAMES[itemName]}`, "help")
		//adds image to inventory

		//create a div to represent your item
		inventory.push(itemID)
		item.dataset.location = "inventory"
		
		//increase curBagCapacity
		modifyWeight(item.dataset.item, "+")
		console.log("inv:", inventory)

	} else {
		myprint("Your bag is too heavy.", "warning")
		return // get out of function
	}

}



function openChest(item = null, inv = null, map = null, x = null, y = null) {
	//toggle button
	let chest = document.getElementById("chest-inventory")

	//open chest
	if (storageState == "closed") {
		storageState = "opened"
		chest.style.display = "block"

		//go through all the items in the player's chest and show them
		for (let i = 0; i < chestinventory.length; i++) {
			document.getElementById(chestinventory[i]).style.display = "block"
		}
		
		for (let i = 0; i < inventory.length; i++) {
			let item = document.getElementById(inventory[i])
			if (item.dataset.location == "chest"){
				item.style.display = "block"
			}
		}

		//close chest
	} else if (storageState == "opened") {
		storageState = "closed"
		chest.style.display = "none"

		// iterate through all the chest items and find their ids and set style to hidden

		for (let i = 0; i < chestinventory.length; i++) {
			document.getElementById(chestinventory[i]).style.display = "none"
		}

		for (let i = 0; i < inventory.length; i++) {
			let item = document.getElementById(inventory[i])
			if (item.dataset.location == "chest"){
				item.style.display = "none"
			}
		}

	}
}

function closeChest() {
	let chest = document.getElementById("chest-inventory")

	storageState = "closed"
	chest.style.display = "none"

	// iterate through all the chest items and find their ids and set style to hidden

	for (let i = 0; i < chestinventory.length; i++) {
		document.getElementById(chestinventory[i]).style.display = "none"
	}

	
}

function closeInventory() {

	//hides the bag div
	if (inventoryState == "opened"){
		inventoryState = "closed"
	}else{
		return
	}

	let bag = document.getElementById("bag")
	bag.style.display = "none"

	//hides all the items in the bag
	for (let i = 0; i < inventory.length; i++) {
		document.getElementById(inventory[i]).style.display = "none"
	}
	
}

function openInventory(item = null, inv = null, map = null, x = null, y = null) {
	// toggle button 
	
	let bag = document.getElementById("bag")


		
	if (inventoryState == "opened") {
		inventoryState = "closed"
		bag.style.display = "none"

		// iterate through all the inv items and find their ids and set style to hidden
		for (let i = 0; i < inventory.length; i++) {
			document.getElementById(inventory[i]).style.display = "none"
		}

	}
}

function relocateEquipmentsForLevel(widthOffset, heightOffset){
	// this function will be called when the screen is resized
	// moves all items in inventory list by Offset amount of pixels to the right
	console.log("invent before move:", inventory)

	
	for (let i = 0; i < inventory.length; i++) {
		
		let item = document.getElementById(inventory[i])
		if (!item) {
			continue
		}
		console.log("item:", item)
	
		let prev_left = parseFloat(item.style.left)
		let prev_top = parseFloat(item.style.top)

		if (Number.isFinite(prev_left)) {
			item.style.left = (prev_left + widthOffset) +"px"
		}
		if (Number.isFinite(prev_top)) {
			item.style.top = (prev_top + heightOffset) +"px"
		}
	}
}