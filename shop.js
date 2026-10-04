var shopinventory = {
	
 1:["p1","p2","p3","boot2","cloak1","armor1","pants1","helmet1"],
 2:["p4","p5","p6","boot3","cloak2","armor2","pants2","helmet2","gloves2","shield1","axe1","dagger2"],
 3:["p7","p8","p9","crown","cloak3","armor3","helmet3","pants3","boot4","sword","axe2","shield2","gloves3"]

}


let shop = document.getElementById("shop")

//this code runs at the start of the game, but will rerun (via adjustprice()) everytime the shop is opened
for (let item of shopinventory[LEVEL]){
	
	
	// --- containers --- 
	let right = document.createElement('div')
	right.classList.add("right")
	
	let left= document.createElement('div')
	left.classList.add("left")
	
	let newlisting = document.createElement("div")
	newlisting.classList.add("shoplisting")
	
	
	// --- name & image ---
	let newshopname = document.createElement("p")
	newshopname.classList.add("shopname")
	newshopname.innerText = ITEM_NAMES[item]
	
	let newshopimage = document.createElement("div")
	newshopimage.classList.add("shopimage")
	let imgpath = IMG_FILES[item]
	newshopimage.style.backgroundImage = `url(${imgpath})`
	
	
	// --- price , description & stats ---
	let newshopprice = document.createElement("p")
	newshopprice.classList.add("shopprice")
	let cost = ( ITEM_INFO[item]["cost"] -  Math.round( playerStats["chr"]/2 )  )
	if ( cost < 2 ){
		cost = 2
	} 
	newshopprice.innerText = `Cost: ${cost} rb`
	
	let newshopdesc = document.createElement("p")
	newshopdesc.classList.add("shopdescription")
  newshopdesc.innerText = ITEM_INFO[item]["description"]

	let newshopstats = document.createElement("div")

	// check if item is an equipment or consumable
  if (ITEM_TYPES[item] == "equipment"){
		newshopstats.classList.add("shopstats")
	  for (let stat in ITEM_STATS[item]){
			let statname = document.createElement("p")
			statname.innerText = ` ${stat} : ${ITEM_STATS[item][stat]} `
			newshopstats.appendChild(statname)
		}
  }

	//create html button

	let shopbutton = document.createElement("button")
	shopbutton.classList.add("buybutton")
	shopbutton.innerHTML = "Buy"

	//program buy button
	shopbutton.addEventListener("click", ()=>{

		// if your bag is full do nothing!
		if (!validWeight(item)){
			return
		}

		//check if the player has enough money!
		if (playerMoney >= ITEM_INFO[item]["cost"]){
			let buycost = ( ITEM_INFO[item]["cost"] -  Math.round( playerStats["chr"]/2 )  )
			if ( buycost < 2 ){
				cost = 2
			} 
			playerMoney -= buycost
			updateMoney()
		}else{
			myprint("You don't have enough money!", type= "warning")
			return
		}
		
		
		let tempdiv = document.createElement("div")
		tempdiv.style.backgroundImage = `url(${IMG_FILES[item]})`
		tempdiv.style.backgroundSize="80%" 
		tempdiv.id = "i"+itemID
		tempdiv.className = "inventory-slot"
		tempdiv.dataset.item = item
		tempdiv.dataset.location = "inventory"
		itemID += 1 // update Id for the next item
		dragElement(tempdiv)

		tempdiv.style.position="absolute"

		//add click to the item's HTML element
		tempdiv.addEventListener("click", (event)=>{
			hoverbox.style.opacity = "0"

		})

		//add onhover event
		tempdiv.addEventListener("mouseover", (event)=>{

			//reset the content of the hoverbox inner HTML
			hoverbox.innerHTML = ""

			// if mouse is dragging DO NOT SHOW UP
			if (mousehold == true){
				return
			}

			//retrieve item info and display it into the hoverbox div
			// use tempdiv.dataset.item)
			let description = ITEM_INFO[ tempdiv.dataset.item]["description"]
			let cost = ITEM_INFO[tempdiv.dataset.item ]["cost"]

			let descriptionPtag = document.createElement("p")
			let costPtag = document.createElement("p")


		

			descriptionPtag.innerText = description
			descriptionPtag.style.fontWeight = "bold"

			if (cost != null){
				costPtag.innerText = `Worth: ${cost} rb`
			}

			hoverbox.appendChild(descriptionPtag)
			hoverbox.appendChild(costPtag)

			//if equipment, find and writedown stats
			if (ITEM_TYPES[tempdiv.dataset.item] == "equipment"){
				console.log("added stats!")
				let strTag = document.createElement("p")
				let defTag = document.createElement("p")
				let spdTag = document.createElement("p")
				let chrTag = document.createElement("p")

				strTag.innerText = `str: ${ITEM_STATS[item]["str"]}`
				defTag.innerText = `def: ${ITEM_STATS[item]["def"]}`
				spdTag.innerText = `spd: ${ITEM_STATS[item]["spd"]}`
				chrTag.innerText = `chr: ${ITEM_STATS[item]["chr"]}`
				hoverbox.appendChild(strTag)
				hoverbox.appendChild(defTag)
				hoverbox.appendChild(spdTag)
				hoverbox.appendChild(chrTag)
			}else{
				console.log("cannot write down stats")
			}


			hoverbox.style.position = "absolute"
			hoverbox.style.left = tempdiv.offsetLeft + tempdiv.offsetWidth  + "px"
			hoverbox.style.top = tempdiv.offsetTop + tempdiv.offsetHeight  + "px"
			hoverbox.style.opacity = "1"
			hoverbox.style.display = "block"
		})

		//add onhover mouseout
		tempdiv.addEventListener("mouseout", (event)=>{
			hoverbox.style.opacity = "0"
			hoverbox.style.display = "none"
		})

		//add consumable
		if ( ITEM_TYPES[item] == "consumable" ){
			
			tempdiv.addEventListener("dblclick", (event)=>{
				
				if (tempdiv.dataset.location == "inventory"){
					USE_CONSUMABLE[tempdiv.dataset.item]( tempdiv.dataset.item )
					let item_index = inventory.indexOf(tempdiv.id)
					inventory.splice(item_index,1)
					tempdiv.remove()
					updateStats()
					modifyWeight(item, "-")
				}else{
					myprint("Potion must be in inventory area to consume.","warning")
				}

			})
		} 

		let htmlinv = document.getElementById("inventory")
		htmlinv.appendChild(tempdiv)
		addToInventory(tempdiv.id)
		
	})
	
	// --- assembly! -----
	right.appendChild(newshopname)
	right.appendChild(newshopimage)
	right.appendChild(shopbutton)

	left.appendChild(newshopdesc)
	left.appendChild(newshopprice)
	left.appendChild(newshopstats)
	
	
	newlisting.appendChild(right)
	newlisting.appendChild(left)

	
	
	shop.appendChild(newlisting)
	
}



function adjustPrice(){
	
	
	console.log("adusting price!")
	shop.innerHTML = "" // empty shop and recreate all items to adjust price
	for (let item of shopinventory[LEVEL]){


		// --- containers --- 
		let right = document.createElement('div')
		right.classList.add("right")

		let left= document.createElement('div')
		left.classList.add("left")

		let newlisting = document.createElement("div")
		newlisting.classList.add("shoplisting")


		// --- name & image ---
		let newshopname = document.createElement("p")
		newshopname.classList.add("shopname")
		newshopname.innerText = ITEM_NAMES[item]

		let newshopimage = document.createElement("div")
		newshopimage.classList.add("shopimage")
		let imgpath = IMG_FILES[item]
		newshopimage.style.backgroundImage = `url(${imgpath})`


		// --- price , description & stats ---
		let newshopprice = document.createElement("p")
		newshopprice.classList.add("shopprice")
		let cost = ( ITEM_INFO[item]["cost"] -  Math.round( playerEquipmentStats["chr"]/2 )  )
		if ( cost < 2 ){
			cost = 2
		} 
		newshopprice.innerText = `Cost: ${cost} rb`
		let newshopdesc = document.createElement("p")
		newshopdesc.classList.add("shopdescription")
		newshopdesc.innerText = ITEM_INFO[item]["description"]

		let newshopstats = document.createElement("div")

		// check if item is an equipment or consumable
		if (ITEM_TYPES[item] == "equipment"){
			newshopstats.classList.add("shopstats")
			for (let stat in ITEM_STATS[item]){
				let statname = document.createElement("p")
				statname.innerText = ` ${stat} : ${ITEM_STATS[item][stat]} `
				newshopstats.appendChild(statname)
			}
		}

		//create html button

		let shopbutton = document.createElement("button")
		shopbutton.classList.add("buybutton")
		shopbutton.innerHTML = "Buy"

		//program buy button
		shopbutton.addEventListener("click", ()=>{

			// if your bag is full do nothing!
			if (!validWeight(item)){
				return
			}
			let buycost = ( ITEM_INFO[item]["cost"] -  Math.round( playerEquipmentStats["chr"]/2 )  )
			if ( buycost < 2 ){
				buycost = 2
			} 
			//check if the player has enough money!
			if (playerMoney >= buycost){
				playerMoney -= buycost
				updateMoney()
			}else{
				myprint("You don't have enough money!", type= "warning")
				return
			}


			let tempdiv = document.createElement("div")
			tempdiv.style.backgroundImage = `url(${IMG_FILES[item]})`
			tempdiv.style.backgroundSize="80%" 
			tempdiv.id = "i"+itemID
			tempdiv.className = "inventory-slot"
			tempdiv.dataset.item = item
			tempdiv.dataset.location = "inventory"
			itemID += 1 // update Id for the next item
			dragElement(tempdiv)

			tempdiv.style.position="absolute"

			//add click to the item's HTML element
			tempdiv.addEventListener("click", (event)=>{
				hoverbox.style.opacity = "0"

			})

			//add onhover event
			tempdiv.addEventListener("mouseover", (event)=>{

				//reset the content of the hoverbox inner HTML
				hoverbox.innerHTML = ""

				// if mouse is dragging DO NOT SHOW UP
				if (mousehold == true){
					return
				}

				//retrieve item info and display it into the hoverbox div
				// use tempdiv.dataset.item)
				let description = ITEM_INFO[ tempdiv.dataset.item]["description"]
				let cost = ITEM_INFO[tempdiv.dataset.item ]["cost"]

				let descriptionPtag = document.createElement("p")
				let costPtag = document.createElement("p")


				descriptionPtag.innerText = description
				descriptionPtag.style.fontWeight = "bold"

				if (cost != null){
					costPtag.innerText = `Worth: ${cost} rb`
				}

				hoverbox.appendChild(descriptionPtag)
				hoverbox.appendChild(costPtag)

				hoverbox.style.position = "absolute"
				hoverbox.style.left = tempdiv.offsetLeft + tempdiv.offsetWidth  + "px"
				hoverbox.style.top = tempdiv.offsetTop + tempdiv.offsetHeight  + "px"
				hoverbox.style.opacity = "1"
				hoverbox.style.display = "block"
			})

			//add onhover mouseout
			tempdiv.addEventListener("mouseout", (event)=>{
				hoverbox.style.opacity = "0"
				hoverbox.style.display = "none"
			})

			//add consumable
			if ( ITEM_TYPES[item] == "consumable" ){
				tempdiv.addEventListener("dblclick", (event)=>{
					if (tempdiv.dataset.location == "inventory"){
						USE_CONSUMABLE[tempdiv.dataset.item]( tempdiv.dataset.item )
						let item_index = inventory.indexOf(tempdiv.id)
						inventory.splice(item_index,1)
						tempdiv.remove()
						updateStats()
						modifyWeight(item, "-")
					}else{
						myprint("Potion must be in inventory area to consume.","warning")
					}
				})
			} 

			//finally add to inventory
			let htmlinv = document.getElementById("inventory")
			htmlinv.appendChild(tempdiv)
			addToInventory(tempdiv.id)

		})

		// --- assembly! -----
		right.appendChild(newshopname)
		right.appendChild(newshopimage)
		right.appendChild(shopbutton)

		left.appendChild(newshopdesc)
		left.appendChild(newshopprice)
		left.appendChild(newshopstats)


		newlisting.appendChild(right)
		newlisting.appendChild(left)



		shop.appendChild(newlisting)

	}
}