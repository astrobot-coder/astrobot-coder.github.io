inventory

hold weapons

-Equipment
-battle
-shop


player stats
  atk = how much you hurt
    damage done = your atk - enemy def
    melee weapons
  def = how much you resist
    damage resisted = enemy atk - your def
    armor
  speed = how fast you are
    speed = who goes first per turn
    shoes
  charm = how persuasive you are
    charm = discount from shop
    hats





May 12
  hover descriptions


PROBLEMS
  June 12 
- [&#9745;] added weight from equipment slots to chest. No weight should be added

- [&#9745;] add stats on hover popups for equipments
- [&#9745;] add a name dictoinary for each item in the shop and in game
- [  ]  close inventory with equipment bug D:
- [  ]  you may encounter the ghost boss again after defeeating

  
July/17

Things we can improve upon:
- [ &#9745;]  make equiping items more responsive or easy
- accurate pricing in shop for items
- [ &#9745;]  open shop double press bug (fixed!)
- [ &#9745; ]  shop disappear when we walk away (fixed!)


Fight mechanics



- [ &#9745;]  draw everything
- [ &#9745;]  make lists for monsters and add monster images
- [ &#9745;]  make text
- [ &#9745;] while in battle the inventory is hidden from view, and the items are inaccessible
- [&#9745;] item button: opens the inventory, and  double click on item to use?
      since items are always usesable outside of battle
- [ &#9745;] Check button: uses the console to show you the enemy's stats
- [&#9745; ] Fight button: does math with your str and the enemy's def to figure out damage
- [&#9745;] add health
- [&#9745;] make double clicking event for consumbles only
- [&#9745;] add a health bar to the fighting screen. HP bar has base width and will depend on current/max hp ratio
- [ ] end the player's turn & close the inventory when the player uses an item
DMG Calculate:
- [&#9745;] make sure equipment are shown when inventory is closed
- [ &#9745;] remove weight from inventory when the item is used
- [&#9745;] Item weight needs to go down with item is consumed
- (basepower x  (Attack / Opp_Defense) ) x crit (1.5) x etc

- [&#9745;] get rid of bosses from the map when they're defeated
- [&#9745;] print out the name of the monsters you've encounter
- 





# Map 2

How to add a second map into the game:

1. [&#9745;]create new 2d grid to represent the map layout
2. [&#9745;]import sprites into p5
3. [&#9745;]draw() we have to add the if statements check which tile should be drawn
4. [&#9745;]New enemies and new items ( new stats, new list to choose from)

5. [&#9745;] when player eneters the new level, the new set of stats are forced upon the
   player rendering their current equipment pointless.
   (fix: create an additional dictionary that tracks how many stats are gained when modifying the stats)


# Enemies

1. polish bosses and stats
2. different shop items on level two


# MISC
making the fighting more interactive by a making the player 
stop a sliding line while moving over a area with different
colors.
Fight
red : means miss
yellow: means regular attack
green: critical hit
The size of each color is based on your attack and the enemy's defense

Block/Parry
red: fail to block
yellow: block and take 25-50% damage
green: parry - enemy gets hit with 1.5x more damage they dealt to you
The size of each color is based on your defense and the enemy's attack

Run
red: fail to run
green: run away successfully
The size of each color is based on your speed and the enemy's speed

Check
red: fail the check
green: check the enemy successfully
The size of each color is based on your charisma

button to stop the line ( line 215 script js)

challenges:
 - 1. how do we determine the sizes of each rectangle? base on str and def?
 - 2. draw the slider bar
 - 3. slider move
 - 4. figure out where the slider lands / stop 

1. [ ] display equipment stats on hover 
2. [ ] rework 'item' button into another
    - scan for weakness : make you next attack stronger
    - parry : a mini game where you have to hand
    - 
4. [ ] rework defense equation
5. [&#9745;] bug when discarding item from equipment directly to trash bin , it not remove from equipment
6. [ ] if it is boss fight, figure out a way to not run without giving it god like speed. get rid of run button and put cords off screen


# Map 3
1. [ ] add scrolling map, camera
2. [ ] fix chest in transition


# More Notes
1. [ ] if you drink a potion that is in the chest while you drink it, the weight is removed from your bag, and you can't move afterwards