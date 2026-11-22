
var loadProgress = 0;
var totalAssets = 241;

function assetsLoaded() {
  loadProgress += 1;
  var loadingbar = document.getElementById("loadingprog");
  loadingbar.style.width = `${Math.round(loadProgress/totalAssets*100)}%`;
}

function map1(){
	//map 1 tiles
	IMG["t1"] = loadImage("/assets/level1/ruinstile1.png", assetsLoaded)
	IMG["t2"] = loadImage("/assets/level1/ruinstile2.png", assetsLoaded)
	IMG["t3"] = loadImage("/assets/level1/ruinstile3.png", assetsLoaded)
	IMG["t4"] = loadImage("/assets/level1/ruinstile4.png", assetsLoaded)
	IMG["t5"] = loadImage("/assets/level1/ruinstile5.png", assetsLoaded)

	//map 1 walls
	IMG["w1"] = loadImage("/assets/level1/ruinswall1.png", assetsLoaded)
	IMG["w2"] = loadImage("/assets/level1/ruinswall2.png", assetsLoaded)
	IMG["w3"] = loadImage("/assets/level1/ruinswall3.png", assetsLoaded)

	IMG["1horleftwall"] = loadImage("/assets/level1/1horleftwall.png", assetsLoaded)
	IMG["1hormidwall"] = loadImage("/assets/level1/1hormidwall.png", assetsLoaded)
	IMG["1horrightwall"] = loadImage("/assets/level1/1horrightwall.png", assetsLoaded)
	IMG["1verttopwall"] = loadImage("/assets/level1/1verttopwall.png", assetsLoaded)
	IMG["1vertmidwall"] = loadImage("/assets/level1/1vertmidwall.png", assetsLoaded)
	IMG["1vertbottomwall"] = loadImage("/assets/level1/1vertbottomwall.png", assetsLoaded)
	IMG["1toprightcorner"] = loadImage("/assets/level1/1toprightcorner.png", assetsLoaded)
	IMG["1bottomleftcorner"] = loadImage("/assets/level1/1bottomleftcorner.png", assetsLoaded)
	IMG["1rightT"] = loadImage("/assets/level1/1rightT.png", assetsLoaded)
	IMG["1hormidcrack"] = loadImage("/assets/level1/1hormidcrack.png", assetsLoaded)
	IMG["1vertmidcrack"] = loadImage("/assets/level1/1vertmidcrack.png", assetsLoaded)

	IMG["1horleftmoss"] = loadImage("/assets/level1/1horleftmoss.png", assetsLoaded)
	IMG["1hormidmoss"] = loadImage("/assets/level1/1hormidmoss.png", assetsLoaded)
	IMG["1horrightmoss"] = loadImage("/assets/level1/1horrightmoss.png", assetsLoaded)
	IMG["1verttopmoss"] = loadImage("/assets/level1/1verttopmoss.png", assetsLoaded)
	IMG["1vertmidmoss"] = loadImage("/assets/level1/1vertmidmoss.png", assetsLoaded)
	IMG["1vertbottommoss"] = loadImage("/assets/level1/1vertbottommoss.png", assetsLoaded)
	IMG["1toprightcornermoss"] = loadImage("/assets/level1/1toprightcornermoss.png", assetsLoaded)
	IMG["1bottomleftcornermoss"] = loadImage("/assets/level1/1bottomleftcornermoss.png", assetsLoaded)
	IMG["1rightTmoss"] = loadImage("/assets/level1/1rightTmoss.png", assetsLoaded)
	IMG["1hormidcrackmoss"] = loadImage("/assets/level1/1hormidcrackmoss.png", assetsLoaded)
	IMG["1vertmidcrackmoss"] = loadImage("/assets/level1/1vertmidcrackmoss.png", assetsLoaded)


}

function map2(){
	//MAP2 
	IMG["b1"] = loadImage("/assets/level2/bush1.png", assetsLoaded)
	IMG["b2"] = loadImage("/assets/level2/bush2.png", assetsLoaded)
	IMG["b3"] = loadImage("/assets/level2/bush3.png", assetsLoaded)
	IMG["gp1"] = loadImage("/assets/level2/grassPatchTile1.png", assetsLoaded)
	IMG["gp2"] = loadImage("/assets/level2/grassPatchTile2.png", assetsLoaded)
	IMG["gp3"] = loadImage("/assets/level2/grassPatchTile3.png", assetsLoaded)
	IMG["gr1"] = loadImage("/assets/level2/grassfloor.png", assetsLoaded)
	IMG["gr2"] = loadImage("/assets/level2/grassfloor2.png", assetsLoaded)
	IMG["g1"] = loadImage("/assets/level2/gravelTile1.png", assetsLoaded)
	IMG["g2"] = loadImage("/assets/level2/gravelTile2.png", assetsLoaded)
	IMG["g3"] = loadImage("/assets/level2/gravelTile3.png", assetsLoaded)
	IMG["g4"] = loadImage("/assets/level2/gravelTile4.png", assetsLoaded)
	IMG["mw1"] = loadImage("/assets/level2/mossWall1.png", assetsLoaded)
	IMG["mw2"] = loadImage("/assets/level2/mossWall2.png", assetsLoaded)
	IMG["mw3"] = loadImage("/assets/level2/mossWall3.png", assetsLoaded)
	IMG["mw3"] = loadImage("/assets/level2/mossWall3.png", assetsLoaded)
	IMG["s1"] = loadImage("/assets/level2/stairsDownRight1.png", assetsLoaded)
	IMG["s3"] = loadImage("/assets/level2/stairsUpRight1.png", assetsLoaded)
	IMG["s4"] = loadImage("/assets/level2/stairsUpRight2.png", assetsLoaded)
	IMG["tr1"] = loadImage("/assets/level2/tree1.png", assetsLoaded)
	IMG["tr2"] = loadImage("/assets/level2/tree2.png", assetsLoaded)
	IMG["tr3"] = loadImage("/assets/level2/tree3.png", assetsLoaded)

	IMG["gt"] = loadImage("/assets/level2.5/grasstile.png", assetsLoaded)
	IMG["water1"] = loadImage("/assets/level2.5/water1.png", assetsLoaded)
	IMG["water2"] = loadImage("/assets/level2.5/water2.png", assetsLoaded)
	IMG["2horleftcave"] = loadImage("/assets/level2.5/2horleftcave.png", assetsLoaded)
	IMG["2horrightcave"] = loadImage("/assets/level2.5/2horrightcave.png", assetsLoaded)
	IMG["2verttopcave"] = loadImage("/assets/level2.5/2verttopcave.png", assetsLoaded)
	IMG["2vertbottomcave"] = loadImage("/assets/level2.5/2vertbottomcave.png", assetsLoaded)
	IMG["2toprightcornercave"] = loadImage("/assets/level2.5/2toprightcornercave.png", assetsLoaded)
	IMG["2bottomleftcornercave"] = loadImage("/assets/level2.5/2bottomleftcornercave.png", assetsLoaded)
	IMG["2Tupcave"] = loadImage("/assets/level2.5/2Tupcave.png", assetsLoaded)
	IMG["cavet"] = loadImage("/assets/level2.5/cavetile.png", assetsLoaded)

	IMG["treetopleft"] = loadImage("/assets/level2.5/treetopleft.png", assetsLoaded)
	IMG["treetopmiddle"] = loadImage("/assets/level2.5/treetopmiddle.png", assetsLoaded)
	IMG["treetopright"] = loadImage("/assets/level2.5/treetopright.png", assetsLoaded)
	IMG["treeleft"] = loadImage("/assets/level2.5/treeleft.png", assetsLoaded)
	IMG["treemiddle"] = loadImage("/assets/level2.5/treemiddle.png", assetsLoaded)
	IMG["treeright"] = loadImage("/assets/level2.5/treeright.png", assetsLoaded)
	IMG["treebottomleft"] = loadImage("/assets/level2.5/treebottomleft.png", assetsLoaded)
	IMG["treebottommiddle"] = loadImage("/assets/level2.5/treebottommiddle.png", assetsLoaded)
	IMG["treebottomright"] = loadImage("/assets/level2.5/treebottomright.png", assetsLoaded)

	IMG["pathbottomleftcorner"] = loadImage("/assets/level2.5/pathbottomleftcorner.png", assetsLoaded)
	IMG["pathbottomrightcorner"] = loadImage("/assets/level2.5/pathbottomrightcorner.png", assetsLoaded)
	IMG["pathtopleftcorner"] = loadImage("/assets/level2.5/pathtopleftcorner.png", assetsLoaded)
	IMG["pathtoprightcorner"] = loadImage("/assets/level2.5/pathtoprightcorner.png", assetsLoaded)
	IMG["pathhorright"] = loadImage("/assets/level2.5/pathhorright.png", assetsLoaded)
	IMG["pathvertmid"] = loadImage("/assets/level2.5/pathvertmid.png", assetsLoaded)
	IMG["pathvertmidtexture"] = loadImage("/assets/level2.5/pathvertmidtexture.png", assetsLoaded)
	IMG["pathhormid"] = loadImage("/assets/level2.5/pathhormid.png", assetsLoaded)
	IMG["pathhormidtexture"] = loadImage("/assets/level2.5/pathhormidtexture.png", assetsLoaded)

	IMG["watertopleft"] = loadImage("/assets/level2.5/watertopleft.png", assetsLoaded)
	IMG["watertopmid"] = loadImage("/assets/level2.5/watertopmid.png", assetsLoaded)
	IMG["watertopright"] = loadImage("/assets/level2.5/watertopright.png", assetsLoaded)
	IMG["watermidleft"] = loadImage("/assets/level2.5/watermidleft.png", assetsLoaded)
	IMG["watermidright"] = loadImage("/assets/level2.5/watermidright.png", assetsLoaded)
	IMG["waterbottomleft"] = loadImage("/assets/level2.5/waterbottomleft.png", assetsLoaded)
	IMG["waterbottommid"] = loadImage("/assets/level2.5/waterbottommid.png", assetsLoaded)
	IMG["waterbottomright"] = loadImage("/assets/level2.5/waterbottomright.png", assetsLoaded)
	IMG["watertopleftcorner"] = loadImage("/assets/level2.5/watertopleftcorner.png", assetsLoaded)

	IMG["bottomgrassedge"] = loadImage("/assets/level2.5/bottomgrassedge.png", assetsLoaded)

	IMG["mossstairup"] = loadImage("/assets/level2.5/mossstairup.png", assetsLoaded)
	IMG["mossstairdown"] = loadImage("/assets/level2.5/mossstairdown.png", assetsLoaded)
	IMG["leftcaveedge"] = loadImage("/assets/level2.5/leftcaveedge.png", assetsLoaded)
	
	//IMG[""] = loadImage("/assets/level2.5/.png", assetsLoaded)
}

function map3(){
	//floors
	IMG["c1"] = loadImage("/assets/level3/carpet1.png", assetsLoaded)
	IMG["c2"] = loadImage("/assets/level3/carpet2.png", assetsLoaded)
	IMG["c3"] = loadImage("/assets/level3/carpet3.png", assetsLoaded)
	IMG["c4"] = loadImage("/assets/level3/carpet4.png", assetsLoaded)
	IMG["c5"] = loadImage("/assets/level3/carpet5.png", assetsLoaded)
	IMG["c6"] = loadImage("/assets/level3/carpet6.png", assetsLoaded)
	IMG["c7"] = loadImage("/assets/level3/carpet7.png", assetsLoaded)
	IMG["c8"] = loadImage("/assets/level3/carpet8.png", assetsLoaded)
	IMG["c9"] = loadImage("/assets/level3/carpet9.png", assetsLoaded)
	IMG["ce1"] = loadImage("/assets/level3/carpetEmblem1.png", assetsLoaded)
	IMG["ce2"] = loadImage("/assets/level3/carpetEmblem2.png", assetsLoaded)
	IMG["ce3"] = loadImage("/assets/level3/carpetEmblem3.png", assetsLoaded)
	IMG["ct1"] = loadImage("/assets/level3/checkerTile1.png", assetsLoaded)
	IMG["ct2"] = loadImage("/assets/level3/checkerTile2.png", assetsLoaded)
	IMG["df1"] = loadImage("/assets/level3/gravel1.png", assetsLoaded)
	IMG["df2"] = loadImage("/assets/level3/gravel2.png", assetsLoaded)
	IMG["df3"] = loadImage("/assets/level3/gravel3.png", assetsLoaded)

	//walls

	IMG["horleft"] = loadImage("/assets/level3/horizontalLeftWall.png", assetsLoaded)
	IMG["hormiddle"] = loadImage("/assets/level3/horizontalMiddleWall.png", assetsLoaded)
	IMG["horright"] = loadImage("/assets/level3/horizontalRightWall.png", assetsLoaded)
	IMG["verttop"] = loadImage("/assets/level3/verticalTopWall.png", assetsLoaded)
	IMG["vertmiddle"] = loadImage("/assets/level3/verticalMiddleWall.png", assetsLoaded)
	IMG["vertbottom"] = loadImage("/assets/level3/verticalBottomWall.png", assetsLoaded)
	IMG["tdown"] = loadImage("/assets/level3/tWallDown.png", assetsLoaded)
	IMG["tup"] = loadImage("/assets/level3/tWallUp.png", assetsLoaded)
	IMG["vertcrack"] = loadImage("/assets/level3/verticalCrackedWall.png", assetsLoaded)
	IMG["horcrack"] = loadImage("/assets/level3/horizontalCrackedWall.png", assetsLoaded)
	

	//overlays (collidables)
	IMG["ld"] = loadImage("/assets/level3/lockedDoor.png", assetsLoaded)

	
	IMG["foun"] = loadImage("/assets/level3/fountain.png", assetsLoaded)
	IMG["hay"] = loadImage("/assets/level3/hay.png", assetsLoaded)
	IMG["keg1"] = loadImage("/assets/level3/keg1.png", assetsLoaded)
	IMG["keg2"] = loadImage("/assets/level3/keg2.png", assetsLoaded)
	IMG["lt1"] = loadImage("/assets/level3/longTable1.png", assetsLoaded)
	IMG["lt2"] = loadImage("/assets/level3/longTable2.png", assetsLoaded)
	IMG["lt3"] = loadImage("/assets/level3/longTable3.png", assetsLoaded)
	IMG["lt4"] = loadImage("/assets/level3/longTable4.png", assetsLoaded)
	IMG["lt5"] = loadImage("/assets/level3/longTable5.png", assetsLoaded)
	IMG["sc"] = loadImage("/assets/level3/singleChair.png", assetsLoaded)
	IMG["st"] = loadImage("/assets/level3/singleTable.png", assetsLoaded)
	IMG["tor1"] = loadImage("/assets/level3/torch1.png", assetsLoaded)
	IMG["tor2"] = loadImage("/assets/level3/torch2.png", assetsLoaded)
	IMG["ws1"] = loadImage("/assets/level3/weaponStand1.png", assetsLoaded)
	IMG["ws2"] = loadImage("/assets/level3/weaponStand2.png", assetsLoaded)
	IMG["crackendtop"] = loadImage("/assets/level3/crackedEndWallTop.png", assetsLoaded)
	IMG["crackendbottom"] = loadImage("/assets/level3/crackedEndWallBottom.png", assetsLoaded)

	
	//overlays (not collidable)
	IMG["buc1"] = loadImage("/assets/level3/bucket1.png", assetsLoaded)
	IMG["buc2"] = loadImage("/assets/level3/bucket2.png", assetsLoaded)
	IMG["sk1"] = loadImage("/assets/level3/skull1.png", assetsLoaded)
	IMG["sk2"] = loadImage("/assets/level3/skull2.png", assetsLoaded)
	IMG["sk3"] = loadImage("/assets/level3/skull3.png", assetsLoaded)
	IMG["sk4"] = loadImage("/assets/level3/skull4.png", assetsLoaded)
	IMG["sk5"] = loadImage("/assets/level3/skull5.png", assetsLoaded)
	IMG["sk6"] = loadImage("/assets/level3/skull6.png", assetsLoaded)
	IMG["sk7"] = loadImage("/assets/level3/skull7.png", assetsLoaded)
	IMG["sw1"] = loadImage("/assets/level3/spiderWeb1.png", assetsLoaded)
	IMG["sw2"] = loadImage("/assets/level3/spiderWeb2.png", assetsLoaded)
	IMG["sw3"] = loadImage("/assets/level3/spiderWeb3.png", assetsLoaded)
	IMG["sw4"] = loadImage("/assets/level3/spiderWeb4.png", assetsLoaded)
	IMG["sw5"] = loadImage("/assets/level3/spiderWeb5.png", assetsLoaded)
	IMG["v1"] = loadImage("/assets/level3/vase1.png", assetsLoaded)
	IMG["v2"] = loadImage("/assets/level3/vase2.png", assetsLoaded)
	IMG["v3"] = loadImage("/assets/level3/vase3.png", assetsLoaded)
	IMG["v4"] = loadImage("/assets/level3/vase4.png", assetsLoaded)
	IMG["v5"] = loadImage("/assets/level3/vase5.png", assetsLoaded)
	IMG["owd"] = loadImage("/assets/level3/openWoodenDoor.png", assetsLoaded)
	IMG["dd"] = loadImage("/assets/level3/dungeonDoor.png", assetsLoaded)
	IMG["ge"] = loadImage("/assets/level3/grassEdge.png", assetsLoaded)

	IMG["fancystairup"] = loadImage("/assets/level3/fancystairup.png", assetsLoaded)
	IMG["fencehormid"] = loadImage("/assets/level3/fencehormid.png", assetsLoaded)
	IMG["fencevertmid"] = loadImage("/assets/level3/fencevertmid.png", assetsLoaded)
	IMG["fenceupleftcorner"] = loadImage("/assets/level3/fenceupleftcorner.png", assetsLoaded)
	IMG["fencevertbroken1"] = loadImage("/assets/level3/fencevertbroken1.png", assetsLoaded)
	IMG["fencevertbroken2"] = loadImage("/assets/level3/fencevertbroken2.png", assetsLoaded)
}

function map4(){
	IMG["statue1"] = loadImage("/assets/level4/statue1.png", assetsLoaded)
	IMG["statue2"] = loadImage("/assets/level4/statue2.png", assetsLoaded)
	IMG["statue3"] = loadImage("/assets/level4/statue3.png", assetsLoaded)
	IMG["statue4"] = loadImage("/assets/level4/statue4.png", assetsLoaded)
	IMG["throne"] = loadImage("/assets/level4/throne.png", assetsLoaded)
}

function loaditems(){
	//stick weapon
	IMG["📏"] = loadImage("/assets/level1/stick.png", assetsLoaded)
	
	//equipment
	IMG["gloves"] = loadImage('/assets/level1/gloves.png', assetsLoaded)
	IMG["boot1"] = loadImage('/assets/level1/boot1.png', assetsLoaded)
	IMG["boot2"] = loadImage('/assets/level1/boot2.png', assetsLoaded)
	IMG["cloak1"] = loadImage('/assets/level1/cloak1.png', assetsLoaded)
	IMG["armor1"] = loadImage('/assets/level1/armor1.png', assetsLoaded)
	IMG["armor2"] = loadImage('/assets/level2/armor2.png', assetsLoaded)
	IMG["axe1"] = loadImage('/assets/level2/axe1.png', assetsLoaded)
	IMG["boot3"] = loadImage('/assets/level2/boot3.png', assetsLoaded)
	IMG["cloak2"] = loadImage('/assets/level2/cloak2.png', assetsLoaded)
	IMG["dagger1"] = loadImage('/assets/level2/dagger1.png', assetsLoaded)
	IMG["dagger2"] = loadImage('/assets/level2/dagger2.png', assetsLoaded)
	IMG["gloves2"] = loadImage('/assets/level2/gloves2.png', assetsLoaded)
	IMG["helmet2"] = loadImage('/assets/level2/helmet2.png', assetsLoaded)
	IMG["pants2"] = loadImage('/assets/level2/pants2.png', assetsLoaded)
	IMG["shield1"] = loadImage('/assets/level2/shield1.png', assetsLoaded)

	IMG["pants1"] = loadImage('/assets/level1/pants1.png', assetsLoaded)
	IMG["helmet1"] = loadImage('/assets/level1/helmet1.png', assetsLoaded)

	IMG["crown"] = loadImage('/assets/level3/crown.png', assetsLoaded)
	IMG["axe2"] = loadImage('/assets/level3/axe2.png', assetsLoaded)
	IMG["sword"] = loadImage('/assets/level3/sword.png', assetsLoaded)
	IMG["shield2"] = loadImage('/assets/level3/shield2.png', assetsLoaded)
	IMG["cloak3"] = loadImage('/assets/level3/cloak3.png', assetsLoaded)
	IMG["gloves3"] = loadImage('/assets/level3/gloves3.png', assetsLoaded)
	IMG["armor3"] = loadImage('/assets/level3/armor3.png', assetsLoaded)
	IMG["helmet3"] = loadImage('/assets/level3/helmet3.png', assetsLoaded)
	IMG["boot4"] = loadImage('/assets/level3/boot4.png', assetsLoaded)
	IMG["pants3"] = loadImage('/assets/level3/pants3.png', assetsLoaded)
	

	//items
	IMG["p1"] = loadImage('/assets/level1/potion1.png', assetsLoaded)
	IMG["p2"] = loadImage('/assets/level1/potion2.png', assetsLoaded)
	IMG["p3"] = loadImage('/assets/level1/potion3.png', assetsLoaded)
	IMG["p4"] = loadImage('/assets/level2/potion4.png', assetsLoaded)
	IMG["p5"] = loadImage('/assets/level2/potion5.png', assetsLoaded)
	IMG["p6"] = loadImage('/assets/level2/potion6.png', assetsLoaded)
	IMG["p7"] = loadImage('/assets/level3/potion7.png', assetsLoaded)
	IMG["p8"] = loadImage('/assets/level3/potion8.png', assetsLoaded)
	IMG["p9"] = loadImage('/assets/level3/potion9.png', assetsLoaded)
}

function loadenemies(){
	//map1
	IMG["👻"] = loadImage("/assets/level1/ghost1.png", assetsLoaded)
	IMG["🐐"] = loadImage("/assets/level1/ruinsboss1.png", assetsLoaded)
	IMG["spider"] = loadImage("/assets/level1/blackspider1.png", assetsLoaded)
	IMG["skele1"] = loadImage("/assets/level1/papyrus1.png", assetsLoaded)
	IMG["skele2"] = loadImage("/assets/level1/sans1.png", assetsLoaded)
	//Map2 
	IMG["bear"] = loadImage("/assets/level2/bear1.png", assetsLoaded)
	IMG["bird"] = loadImage("/assets/level2/blackBird.png", assetsLoaded)
	IMG["dog"] = loadImage("/assets/level2/blackdog.png", assetsLoaded)
	IMG["gobarch"] = loadImage("/assets/level2/goblinArcher.png", assetsLoaded)
	IMG["gobking"] = loadImage("/assets/level2/goblinKing.png", assetsLoaded)
	IMG["gobmage"] = loadImage("/assets/level2/goblinMage.png", assetsLoaded)
	IMG["gobwar"] = loadImage("/assets/level2/goblinWarrior.png", assetsLoaded)
	IMG["gobmin"] = loadImage("/assets/level2/goblinMinion.png", assetsLoaded)
	IMG["spart"] = loadImage("/assets/level2/spartan1.png", assetsLoaded)
	IMG["treemon"] = loadImage("/assets/level2/treeMonster.png", assetsLoaded)
	//Map3
	IMG["redknight"] = loadImage("/assets/level3/redKnight.png", assetsLoaded)
	IMG["blueknight"] = loadImage("/assets/level3/blueKnight.png", assetsLoaded)
	IMG["skelewar"] = loadImage("/assets/level3/skeletonWarrior.png", assetsLoaded)
	IMG["skelemage"] = loadImage("/assets/level3/skeletonMage.png", assetsLoaded)
	IMG["skeleharvest"] = loadImage("/assets/level3/skeletonHarvester.png", assetsLoaded)
	IMG["redspider"] = loadImage("/assets/level3/redSpider.png", assetsLoaded)
	IMG["grayrat"] = loadImage("/assets/level3/grayRat.png", assetsLoaded)
	IMG["brownrat"] = loadImage("/assets/level3/brownRat.png", assetsLoaded)

	IMG["skelegolem"] = loadImage("/assets/level3/skeletonGolem.png", assetsLoaded)
	IMG["blackghost"] = loadImage("/assets/level3/blackGhost.png", assetsLoaded)
	IMG["redspart"] = loadImage("/assets/level3/redSpartan.png", assetsLoaded)
	IMG["bluespart"] = loadImage("/assets/level3/blueSpartan.png", assetsLoaded)
	IMG["yellowspart"] = loadImage("/assets/level3/yellowSpartan.png", assetsLoaded)

	//Map 4
	IMG["vampking"] = loadImage("/assets/level4/vampking.png", assetsLoaded)
}

function loadenv(){
	//shop
	IMG["🏪"] = loadImage("/assets/level1/well.png", assetsLoaded);

	//chest
	IMG["🧰"] = loadImage("/assets/level1/chest1.png", assetsLoaded)
	IMG["open 🧰"] = loadImage("/assets/level1/chest2.png", assetsLoaded)


	//door
	IMG["🚪"] = loadImage("/assets/level1/door1.png", assetsLoaded)

	//player sprite
	IMG["👧"] = loadImage("/assets/level1/human_unarmed1.png", assetsLoaded)

	//fog
	IMG["fogup"] = loadImage("/assets/level1/fog_top.png", assetsLoaded)
	IMG["fogdown"] = loadImage("/assets/level1/fog_bottom.png", assetsLoaded)
	IMG["fogleft"] = loadImage("/assets/level1/fog_left.png", assetsLoaded)
	IMG["fogright"] = loadImage("/assets/level1/fog_right.png", assetsLoaded)
	IMG["fogupleft"] = loadImage("/assets/level1/fogupleft.png", assetsLoaded)
	IMG["fogupright"] = loadImage("/assets/level1/fogupright2.png", assetsLoaded)
	IMG["fogdownleft"] = loadImage("/assets/level1/fogdownleft.png", assetsLoaded)
	IMG["fogdownright"] = loadImage("/assets/level1/fogdownright2.png", assetsLoaded)

}




