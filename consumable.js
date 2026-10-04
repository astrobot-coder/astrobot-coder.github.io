
function heal( potion_type ){

	//prevent the player from comsuming the potion if its in the chest
	
	var amount = 0
	
	if (potion_type == "p1"){
		amount = 4
		myprint("You drank a small potion and recovered 4 health.", "help")
	}else if (potion_type == "p2"){
		amount = 8
		myprint("You drank a medium potion and recovered 8 health.", "help")
	}else if (potion_type == "p3"){
		amount = 12
		myprint("You drank a large potion and recovered 12 health.", "help")
	}else if (potion_type == "p4"){
		amount = 10
		myprint("You drank a small vial and recovered 10 health.", "help")
	}else if (potion_type == "p5"){
		amount = 15
		myprint("You drank a medium vial and recovered 15 health.", "help")
	}else if (potion_type == "p6"){
		amount = 20
		myprint("You drank a large vial and recovered 20 health.", "help")
	}else if (potion_type == "p7"){
		amount = 18
		myprint("You drank a small bottle and recovered 18 health.", "help")
	}else if (potion_type == "p8"){
		amount = 25
		myprint("You drank a large vial and recovered 25 health.", "help")
	}else if (potion_type == "p9"){
		amount = 30
		myprint("You drank a large vial and recovered 30 health.", "help")
	}

	// heal code
  playerStats["hp"] += amount + (LEVEL - 1) * 3
  
  if (playerStats["hp"] >= playerStats["maxhp"]){
    playerStats["hp"] = playerStats["maxhp"]
  }



}

var USE_CONSUMABLE={
	"p1": heal,	
	"p2": heal,	
	"p3": heal,
	"p4": heal,
	"p5": heal,
	"p6": heal,
	"p7": heal,
	"p8": heal,
	"p9": heal
}