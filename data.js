// for items that can be picked up, can't use p5 image objects
const IMG_FILES = {
	//level 1
	"📏": "/assets/level1/stick.png", 
	"p1": "/assets/level1/potion1.png",
	"p2": "/assets/level1/potion2.png",
	"p3": "/assets/level1/potion3.png",
	"gloves": "/assets/level1/gloves.png",
	"boot1": "/assets/level1/boot1.png",
	"boot2": "/assets/level1/boot2.png",
	"cloak1": "/assets/level1/cloak1.png",
	"armor1": "/assets/level1/armor1.png",
	"pants1": "/assets/level1/pants1.png",
	"helmet1": "/assets/level1/helmet1.png",
	//level 2
	"p4": "assets/level2/potion4.png",
	"p5": "assets/level2/potion5.png",
	"p6": "assets/level2/potion6.png",
	"dagger1": "assets/level2/dagger1.png",
	"dagger2": "assets/level2/dagger2.png",
	"axe1": "assets/level2/axe1.png",
	"shield1": "assets/level2/shield1.png",
	"gloves2": "assets/level2/gloves2.png",
	"helmet2": "assets/level2/helmet2.png",
	"cloak2": "assets/level2/cloak2.png",
	"armor2": "assets/level2/armor2.png",
	"pants2": "assets/level2/pants2.png",
	"boot3": "assets/level2/boot3.png",


	//level 3
	"p7": "/assets/level3/potion7.png",
	"p8": "/assets/level3/potion8.png",
	"p9": "/assets/level3/potion9.png",
	"crown": "/assets/level3/crown.png",
	"axe2": "/assets/level3/axe2.png",
	"sword": "/assets/level3/sword.png",
	"shield2": "/assets/level3/shield2.png",
	"cloak3": "/assets/level3/cloak3.png",
	"gloves3": "/assets/level3/gloves3.png",
	"armor3": "/assets/level3/armor3.png",
	"helmet3": "/assets/level3/helmet3.png",
	"boot4": "/assets/level3/boot4.png",
	"pants3": "/assets/level3/pants3.png",
}




var ITEM_WEIGHTS = {
	"p1": 1,	
	"p2": 2,	
	"p3": 3,	
	"p4": 1,
	"p5": 2,
	"p6": 3,
	"📏": 2,
	"gloves": 2,
	"glove2": 2,
	"dagger1":2,
	"dagger2":3,
	
	"boot1": 2,
	"boot2": 2,
	"boot3":2,

	"cloak1": 1,
	"cloak2":2,
	
	"armor1": 3,
	"armor2": 3,
	"axe1": 3,
	"pants1": 2,
	"pants2": 2,

	"helmet1": 2,
	"helmet2": 2,

	"shield1": 1,
	
	"p7": 1,
	"p8": 2,
	"p9": 3,
	"crown": 2,
	"axe2": 3,
	"sword": 3,
	"shield2": 2,
	"cloak3": 2,
	"gloves3": 2,
	"armor3": 3,
	"helmet3": 2,
	"boot4": 2,
	"pants3": 2,
}

// Where each item goes in your equipment
var ITEM_PLACE = {
	//level 1
	"📏": "hand",
	"gloves": "hand",
	"boot1": "shoes",
	"boot2": "shoes",
	"cloak1": "torso",
	"armor1": "torso",
	"pants1": "pants",
	"helmet1": "hat",
	//level 2
	"dagger1": "hand",
	"dagger2": "hand",
	"axe1": "hand",
	"shield1": "hand",
	"gloves2": "hand",
	"helmet2": "hat",
	"cloak2": "torso",
	"armor2": "torso",
	"pants2": "pants",
	"boot3": "shoes",
	"cloak2": "torso",
	//level 3
	"crown": "hat",
	"axe2": "hand",
	"sword": "hand",
	"shield2": "hand",
	"cloak3": "torso",
	"gloves3": "hand",
	"armor3": "torso",
	"helmet3": "hat",
	"boot4": "shoes",
	"pants3": "pants",
}

//description and cost of each item
var ITEM_INFO = {
	//level 1 items
	"p1": {"cost": 3,
				"description":"A small vial of mysterious red liquid with medicinal properties, normally used in small villages. It heals 4 health."},	
	"p2": {"cost": 5,
	"description":"A vial of similar liquid to its smaller counterpart. It heals 8 health."},
	"p3": {"cost": 8,
	"description":"A large bottle of medicine. It heals 12 health."},
	"📏": {"cost": null,
	"description":"It's a stick. There's not much more to say."},
	"gloves": {"cost": null,
	"description":"A old, run-down pair of leather gloves."},
	"boot1": {"cost": null,
	"description":"Your average pair of leather boots."},
	"boot2": {"cost": 15,
	"description":"Your above average pair of leather boots."},
	"cloak1": {"cost": 4,
	"description":"It's basically just a blanket with a hood."},
	"armor1": {"cost": 13,
	"description":"Some heavy leather plate armor."},
	"pants1": {"cost": 5,
	"description":"It's a pair of pants. Wear them."},
	"helmet1": {"cost": 6,
		"description":"It's a damaged helmet. Could be used as a bowl."},
	// level 2 items
	"p4": {"cost": 10,
	"description":"A small bottle of a blue liquid. It smells medicinal. It heals 10 health."},
	"p5": {"cost": 13,
		"description":"A jar of the same blue medicine used in cities. It heals 15 health."},
	"p6": {"cost": 16,
		"description":"A large jug blue medicine. It heals 20 health."},
	"dagger1": {"cost": 2,
		"description":"A small dagger or knife."},
	"dagger2": {"cost": 20,
		"description":"A larger, more balanced dagger."},
	"gloves2": {"cost": 8,
		"description":"A pair of leather gloves reinforced with metal."},
	"shield1": {"cost": 15,
		"description":"A shield worn from use."},
	"axe1": {"cost": 15,
		"description":"An axe used for cutting down trees."},
	"pants2": {"cost": 10,
		"description":"A pair of traveler's pants."},
	"boot3": {"cost": 20,
		"description":"A pair of traveler's boots"},
	"armor2": {"cost": 17,
		"description":"A worn set of armor."},
	"helmet2": {"cost": 12,
		"description":"A helmet used by most travelers."},
	"cloak2": {"cost": 10,
		"description":"A modified hood."},
	// level 3 items
	"p7": {"cost": 12,
		"description": "A small potion reserved for servants of royalty. It heals 18 health."},
	"p8": {"cost": 16,
		"description": "A potion used by royal advisors and priests. It heals 25 hp"},
	"p9": {"cost": 20,
		"description": "A potion fit for royalty. It heals 30 hp."},
	"crown": {"cost": 100,
		"description": "The great crown of the king."},
	"axe2": {"cost": 25,
		"description": "An axe used for battle."},
	"sword": {"cost": 25,
		"description": "A old knight's sword. It is somehow still in good condition."},
	"shield2": {"cost": 20,
		"description": "A solid steel shield, used by knights of the king."},
	"cloak3": {"cost": 15,
		"description": "A theif's cloak, the only thing left of someone who dared to steal from the king."},
	"gloves3": {"cost": 13,
		"description": "A solid pair of steel gauntlets used by knights."},
	"armor3": {"cost": 20,
		"description": "A knight's chestplate, used in countless battles."},
	"helmet3": {"cost": 15,
		"description": "The helm of a knight that fell in battle."},
	"boot4": {"cost": 30,
		"description": "A pair of steel boots. Despite their weight, they are easy to move in."},
	"pants3": {"cost": 15,
		"description": "A knight's greaves, worn by knights appointed by the king himself."},
}


//The stats for each equipment
var ITEM_STATS = {
	//level 1
	"📏": {
		"str": 2,
		"def": 0,
		"spd": 0,
		"chr": 0},
	
	"gloves": {
		"str": 1,
		"def": 1,
		"spd": 0,
		"chr": 0},
	
	"boot1": {
		"str": 0,
		"def": 0,
		"spd": 1,
		"chr": 0},
		
	"boot2": {
		"str": 0,
		"def": 0,
		"spd": 2,
		"chr": 1},
	
	"cloak1": {
		"str": 0,
		"def": 1,
		"spd": 0,
		"chr": 2},
	
	"armor1": {
		"str": 0,
		"def": 2,
		"spd": -1,
		"chr": 1},
	
	"pants1": {
		"str": 0,
		"def": 1,
		"spd": 0,
		"chr": 0},

	"helmet1": {
		"str": 0,
		"def": 2,
		"spd": 0,
		"chr": -1},
	//level 2
	"dagger1": {
		"str": 3,
		"def": 0,
		"spd": 0,
		"chr": 0},

	"dagger2": {
		"str": 4,
		"def": 0,
		"spd": 0,
		"chr": 0},

	"axe1": {
		"str": 3,
		"def": 1,
		"spd": -1,
		"chr": 0},

	"shield1": {
		"str": 1,
		"def": 3,
		"spd": 0,
		"chr": 0},

	"gloves2": {
	"str": 2,
	"def": 2,
	"spd": 0,
	"chr": 0},

	"helmet2": {
		"str": 0,
		"def": 3,
		"spd": 0,
		"chr": 0},

	"cloak2": {
		"str": 0,
		"def": 2,
		"spd": 0,
		"chr": 3},

	"armor2": {
		"str": 0,
		"def": 4,
		"spd": -2,
		"chr": 1},

	"pants2": {
		"str": 0,
		"def": 2,
		"spd": 0,
		"chr": 0},

	"boot3": {
		"str": 0,
		"def": 0,
		"spd": 3,
		"chr": 1},

	//level 3
	"crown": {
		"str": 6,
		"def": 6,
		"spd": 6,
		"chr": 6},
	
	"axe2": {
		"str": 4,
		"def": 2,
		"spd": 0,
		"chr": 0},
	
	"sword": {
			"str": 5,
			"def": 1,
			"spd": 0,
			"chr": 0},
	
	"shield2": {
			"str": 1,
			"def": 5,
			"spd": 0,
			"chr": 0},
	
	"cloak3": {
			"str": 0,
			"def": 3,
			"spd": 1,
			"chr": 4},
	
	"gloves3": {
			"str": 3,
			"def": 3,
			"spd": 0,
			"chr": 0},
	
	"armor3": {
			"str": 0,
			"def": 6,
			"spd": -2,
			"chr": 1},
	
	"helmet3": {
		 "str": 0,
		 "def": 4,
		 "spd": 0,
		 "chr": 1},
	
	"boot4": {
			"str": 1,
			"def": 1,
			"spd": 4,
			"chr": 0},
	
	"pants3": {
			"str": 0,
			"def": 3,
			"spd": 0,
			"chr": 0},
}



var ITEM_NAMES = {
	//level 1
	"p1": "a small potion",	
	"p2": "a medium potion",	
	"p3": "a large potion",	
	"📏": "a stick",
	"gloves": "a pair of gloves",
	"boot1": "a pair of boots",
	"boot2": "a nice pair of boots",
	"cloak1": "a cloak",
	"armor1": "a piece of armor",
	"pants1": "a pair of pants",
	"helmet1": "a leather helmet",
	//level 2
	"p4": "a small vial",	
	"p5": "a medium vial",	
	"p6": "a large vial",	
	"dagger1": "a small dagger",
	"dagger2": "a large dagger",
	"axe1": "a wood-cutting axe",
	"shield1": "a wooden shield",
	"gloves2": "a pair of plated gloves",
	"helmet2": "a metal helmet",
	"cloak2": "a decorated cloak",
	"armor2": "a chainmail chestplate",
	"pants2": "a pair of traveler's pants",
	"boot3": "a pair of traveler's boots",
	//level 3
	"p7": "a small bottle",
	"p8": "a medium bottle",
	"p9": "a large bottle",
	"crown": "an old crown",
	"axe2": "a great axe",
	"sword": "a long sword",
	"shield2": "a metal shield",
	"cloak3": "a theif's hood",
	"gloves3": "a pair of steel gauntlets",
	"armor3": "a knight's chestplate",
	"helmet3": "a knight's helm",
	"boot4": "a pair of steel boots",
	"pants3": "a knight's greaves",
}



var ITEM_TYPES = {
	//level 1
	"p1": "consumable",	
	"p2": "consumable",	
	"p3": "consumable",	
	"📏": "equipment",
	"gloves": "equipment",
	"boot1": "equipment",
	"boot2": "equipment",
	"cloak1": "equipment",
	"armor1": "equipment",
	"pants1": "equipment",
	"helmet1": "equipment",
	//level 2
	"p4": "consumable",
	"p5": "consumable",
	"p6": "consumable",
	"dagger1": "equipment",
	"dagger2": "equipment",
	"axe1": "equipment",
	"shield1": "equipment",
	"gloves2": "equipment",
	"helmet2": "equipment",
	"cloak2": "equipment",
	"armor2": "equipment",
	"pants2": "equipment",
	"boot3": "equipment",
	//level 3
	"p7": "consumable",
	"p8": "consumable",
	"p9": "consumable",
	"crown": "equipment",
	"axe2": "equipment",
	"sword": "equipment",
	"shield2": "equipment",
	"cloak3": "equipment",
	"gloves3": "equipment",
	"armor3": "equipment",
	"helmet3": "equipment",
	"boot4": "equipment",
	"pants3": "equipment",
}




var MONSTER_NAMES = {
	1 : ["spider", "skele1", "skele2",],
	2 : ["gobarch", "dog", "bird", "gobmage", "gobwar", "gobmin", "treemon"],
	3 : ["redknight", "blueknight", "skelewar", "skelemage", "skeleharvest", "redspider", "grayrat", "brownrat"],
	4 : []
}
	
	

var MONSTER_STATS = {
	//------- Level 1 -------
	"spider": {
		"name": "spider",
		"hp": 6,
		"maxhp": 6,
		"str": 4,
		"def": 2,
		"spd": 4,
		"money": 2,
		"pwr": 3,
	},

	"skele1": {
		"name": "skeleton archer",
		"hp": 7,
		"maxhp": 7,
		"str": 3,
		"def": 5,
		"spd": 3,
		"money": 3,
		"pwr": 4,
	},

	"skele2": {
		"name": "skeleton",
		"hp": 10,
		"maxhp": 10,
		"str": 5,
		"def": 5,
		"spd": 2,
		"money": 3,
		"pwr": 4,
	},
	
	//------- Level 2 --------
	"bird": {
		"name": "black bird",
		"hp": 2,
		"maxhp": 2,
		"str": 3,
		"def": 6,
		"spd": 7,
		"money": 0,
		"pwr": 4,
	},

	"dog": {
		"name": "rabid dog",
		"hp": 8,
		"maxhp": 8,
		"str": 7,
		"def": 4,
		"spd": 6,
		"money": 0,
		"pwr": 4,
	},

	"gobarch": {
		"name": "goblin archer",
		"hp": 11,
		"maxhp": 11,
		"str": 6,
		"def": 6,
		"spd": 7,
		"money": 7,
		"pwr": 6,
	},

	"gobmage": {
		"name": "goblin mage",
		"hp": 9,
		"maxhp": 9,
		"str": 9,
		"def": 5,
		"spd": 6,
		"money": 9,
		"pwr": 6,
	},

	"gobwar": {
		"name": "goblin warrior",
		"hp": 14,
		"maxhp": 14,
		"str": 8,
		"def": 8,
		"spd": 3,
		"money": 10,
		"pwr": 7,
	},

	"gobmin": {
		"name": "goblin minion",
		"hp": 8,
		"maxhp": 8,
		"str": 4,
		"def": 4,
		"spd": 9,
		"money": 8,
		"pwr": 5,
	},

	"treemon": {
		"name": "tree monster",
		"hp": 10,
		"maxhp": 10,
		"str": 6,
		"def": 7,
		"spd": 1,
		"money": 5,
		"pwr": 6,
	},

	//------- Level 3 --------
	"redknight": {
		"name": "red knight",
		"hp": 17,
		"maxhp": 17,
		"str": 10,
		"def": 7,
		"spd": 8,
		"money": 10,
		"pwr": 9,
	},
	
	"blueknight": {
		"name": "blue knight",
		"hp": 17,
		"maxhp": 17,
		"str": 7,
		"def": 10,
		"spd": 8,
		"money": 10,
		"pwr": 9,
	},
	
	"skelewar": {
		"name": "skeleton warrior",
		"hp": 15,
		"maxhp": 15,
		"str": 7,
		"def": 9,
		"spd": 5,
		"money": 8,
		"pwr": 8,
	},

	"skelemage": {
		"name": "skeleton mage",
		"hp": 10,
		"maxhp": 10,
		"str": 12,
		"def": 7,
		"spd": 8,
		"money": 7,
		"pwr": 9,
	},

	"skeleharvest": {
		"name": "skeleton harvester",
		"hp": 20,
		"maxhp": 20,
		"str": 10,
		"def": 9,
		"spd": 7,
		"money": 15,
		"pwr": 10,
	},

	"redspider": {
		"name": "red spider",
		"hp": 10,
		"maxhp": 10,
		"str": 7,
		"def": 7,
		"spd": 12,
		"money": 6,
		"pwr": 7,
	},
	
	"grayrat": {
		"name": "gray rat",
		"hp": 9,
		"maxhp": 9,
		"str": 6,
		"def": 10,
		"spd": 7,
		"money": 6,
		"pwr": 6,
	},

	"brownrat": {
		"name": "brown rat",
		"hp": 9,
		"maxhp": 9,
		"str": 9,
		"def": 6,
		"spd": 7,
		"money": 6,
		"pwr": 6,
	},

	// "": {
	// 	"name": "",
	// 	"hp": ,
	// 	"maxhp": ,
	// 	"str": ,
	// 	"def": ,
	// 	"spd": ,
	// 	"money": ,
	// 	"pwr": ,
	// },


}

var BOSS_STATS = {
	//------- Level 1 -------
	"🐐": {
		"name": "Wizard",
		"hp": 18,
		"maxhp": 18,
		"str": 5,
		"def": 6,
		"spd": 6,
		"money": 10,
		"pwr": 5,
	},

	"👻": {
		"name": "Ghost",
	  "hp": 13,
		"maxhp": 13,
		"str": 2,
		"def": 1000,
		"spd": 2,
		"money": 8,
		"pwr": 5,
	},
	//------- Level 2 -------
	"spart": {
		"name": "Spartan",
			"hp": 45,
			"maxhp": 45,
			"str": 9,
			"def": 10,
			"spd": 11,
			"money": 25,
			"pwr": 8,
	},
	"bear": {
		"name": "Bear",
		"hp": 30,
		"maxhp": 30,
		"str": 3,
		"def": 10,
		"spd": 5,
		"money": 0,
		"pwr": 7,
	},
	
	"gobking": {
		"name": "Goblin King",
		"hp": 25,
		"maxhp": 25,
		"str": 9,
		"def": 5,
		"spd": 7,
		"money": 15,
		"pwr": 6,
	},

	//------- Level 3 -------
	"skelegolem": {
		"name": "Skeleton Golem",
		"hp": 50,
		"maxhp": 50,
		"str": 14,
		"def": 20,
		"spd": 7,
		"money": 22,
		"pwr": 12,
	},

	"blackghost": {
		"name": "Black Ghost",
		"hp": 40,
		"maxhp": 40,
		"str": 9,
		"def": 100000,
		"spd": 9,
		"money": 25,
		"pwr": 9,
	},

	"redspart": {
		"name": "Red Spartan",
		"hp": 45,
		"maxhp": 45,
		"str": 17,
		"def": 10,
		"spd": 10,
		"money": 30,
		"pwr": 10,
	},

	"bluespart": {
		"name": "Blue Spartan",
		"hp": 45,
		"maxhp": 45,
		"str": 10,
		"def": 17,
		"spd": 10,
		"money": 30,
		"pwr": 10,
	},

	"yellowspart": {
		"name": "Yellow Spartan",
		"hp": 45,
		"maxhp": 45,
		"str": 10,
		"def": 10,
		"spd": 17,
		"money": 30,
		"pwr": 10,
	},

	//------- Level 3 -------
	"vampking": {
		"name": "Vampire King",
		"hp": 60,
		"maxhp": 60,
		"str": 20,
		"def": 20,
		"spd": 20,
		"money": 50,
		"pwr": 15,
	},
	
}