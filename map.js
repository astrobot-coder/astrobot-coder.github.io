var MAP = [
  ["t1", "t4", "t5", "t5", "t4", "t5", "t2", "t4"],
  ["t4", "1verttopmoss", "t2", "t1", "t5", "1horleftmoss", "1toprightcornermoss", "t5"],
  ["t5", "1bottomleftcorner", "1toprightcornermoss", "t4", "t3", "t4", "1vertbottomwall", "t4"],
  ["t1", "t4", "1bottomleftcorner", "1hormidcrackmoss", "1toprightcornermoss", "t1", "t5", "t1"],
  ["t4", "t1", "t1", "t3", "1vertmidcrack", "t5", "1verttopmoss", "t5"],
  ["1verttopmoss", "t5", "t3", "1horleftmoss", "1rightTmoss", "t4", "1vertmidcrack", "t5"],
  ["1vertmidmoss", "t1", "t2", "t5", "1vertmidmoss", "t2", "1bottomleftcornermoss", "1horrightmoss"],
  ["1bottomleftcornermoss", "1horrightmoss", "t5", "t1", "1vertbottommoss", "t1", "t3", "t1"]
]

var MAPOVERLAY = [
  ["", "gloves", "", "", "", "", "", ""],
  ["", "", "p1", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "p2", ""],
  ["p2", "", "p2", "🧰", "", "", "", ""],
  ["", "", "", "", "", "", "", "🏪"],
  ["", "", "👻", "p3", "", "", "", ""],
  ["", "", "", "📏", "", "", "🐐", "🚪"]
]



var MAP2 = [
  ["gt", "gt", "1horleftmoss", "1toprightcornermoss", "gt", "gt", "gt", "gt", "gt", "gt"],
  ["1verttopmoss", "gt", "gt", "1vertbottommoss", "gt", "gt", "gt", "gt", "gt", "gt"],
  ["1bottomleftcornermoss", "1toprightcornermoss", "gt", "gt", "gt", "gt", "water1", "water2", "gt", "gt"],
  ["gt", "1vertbottommoss", "gt", "gt", "water2", "water2", "water1", "water2", "gt", "gt"],
  ["gt", "gt", "gt", "water1", "water2", "water2", "water1", "water1", "gt", "gt"],
  ["2verttopcave", "gt", "gt", "water2", "water1", "gt", "gt", "gt", "gt", "gt"],
  ["2bottomleftcornercave", "2toprightcornercave", "gt", "water1", "water2", "gt", "gt", "gt", "gt", "gt"],
  ["cavet", "2vertbottomcave", "gt", "gt", "gt", "gt", "gt", "gt", "gt", "gt"],
  ["cavet", "cavet", "cavet", "2verttopcave", "gt", "gt", "gt", "gt", "gt", "gt"],
  ["cavet", "cavet", "2horleftcave", "2Tupcave", "2horrightcave", "gt", "gt", "gt", "gt", "gt"],
]

var MAP2OVERLAY = [
  ["", "", "", "", "", "tr1", "tr1", "", "bear", "🏪"],
  ["", "", "", "", "tr1", "pathtopleftcorner", "pathhormidtexture", "pathhorright", "", "tr1"],
  ["", "", "", "pathtopleftcorner", "pathhormidtexture", "pathbottomrightcorner", "watertopleft", "watertopright", "", ""],
  ["tr1", "", "pathtopleftcorner", "pathbottomrightcorner", "watertopleft", "watertopmid", "watertopleftcorner", "watermidright", "", "tr1"],
  ["", "", "pathvertmidtexture", "watertopleft", "", "waterbottommid", "waterbottommid", "waterbottomright", "tr1", "🧰"],
  ["", "", "pathvertmidtexture", "watermidleft", "watermidright", "", "", "", "", ""],
  ["", "", "pathvertmidtexture", "waterbottomleft", "waterbottomright", "", "treetopleft", "treetopmiddle", "treetopmiddle", "treetopright"],
  ["", "", "pathbottomleftcorner", "pathhormidtexture", "pathhormidtexture", "pathtoprightcorner", "treeleft", "treemiddle", "treemiddle", "treeright"],
  ["", "gobking", "bottomgrassedge", "", "tr1", "pathvertmidtexture", "treebottomleft", "treebottommiddle", "treebottommiddle", "treebottomright"],
  ["dagger1", "", "", "", "", "pathbottomleftcorner", "pathhorright", "", "spart", "🚪"],
]

var MAP3 = [
  ["gr2", "gr2", "gr2", "gr2", "gr2", "gr2", "gr2", "ct2", "ct2", "ct2", "ct2", "ct2"],// 0
  ["gr2", "gr2", "gr2", "gr2", "gr2", "gr2", "gr2", "ct2", "ct2", "ct2", "ct2", "ct2"],// 1
  ["gr2", "gr2", "gr2", "gr2", "gr2", "gr2", "gr2", "ct2", "ct2", "ct2", "ct2", "ct2"],// 2
  ["horleft", "horcrack", "hormiddle", "hormiddle", "horcrack", "hormiddle", "tup", "horcrack", "hormiddle", "ct2", "horcrack", "horright"], // 3
  ["ct1", "c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "ct1"], // 4
  ["ct1", "c4", "c5", "c5", "c5", "c5", "c5", "c5", "c5", "c5", "c6", "ct1"], // 5
  ["ct1", "c4", "c5", "c5", "c5", "c5", "c5", "c5", "c5", "c5", "c6", "ct1"], // 6
  ["ct1", "c7", "c8", "c8", "c8", "c8", "c8", "c8", "c8", "c8", "c9", "ct1"], // 7
  ["horleft", "ct1", "hormiddle", "hormiddle", "hormiddle", "horcrack", "tdown", "hormiddle", "horcrack", "ct1", "hormiddle", "horright"], //8
  ["df1", "df1", "df2", "df1", "df3", "df2", "df3", "ct1", "ct1", "ct1", "ct1", "ct1"],
  ["df3", "df2", "df1", "df3", "df2", "df3", "df3", "ct1", "ct1", "ct1", "ct1", "ct1"],
  ["df1", "df3", "df2", "df2", "df1", "df3", "df2", "ct1", "ct1", "ct1", "ct1", "ct1"]
]

var MAP3OVERLAY = [
  ["", "", "", "", "", "", "crackendbottom", "lt4", "lt5", "keg1", "lt4", "lt5"],
  ["", "", "", "", "", "", "", "ge", "", "", "v4", "tor1"],
  ["🏪", "", "", "", "", "", "crackendtop", "ge", "buc1", "", "", "hay"],
  ["", "", "", "", "", "", "", "", "", "owd", "", ""],
  ["v3", "", "", "", "", "", "bluespart", "", "", "", "", "tor1"],
  ["v5", "", "sc", "sc", "sc", "sc", "sc", "sc", "sc", "sc", "", "v5"],
  ["🧰", "", "lt1", "lt2", "lt2", "lt2", "lt2", "lt2", "lt2", "lt3", "redspart", "v4"],
  ["tor2", "yellowspart", "", "", "", "", "", "", "", "", "", "tor2"],
  ["", "dd", "", "", "", "", "", "", "", "ld", "", ""],
  ["", "sk4", "", "", "sk2", "sw3", "crackendbottom", "tor1", "", "", "", "tor2"],
  ["", "", "", "sk6", "sk5", "", "", "skelegolem", "", "", "", ""],
  ["sw4", "sk7", "", "sk3", "", "sw2", "crackendtop", "tor2", "🏪", "", "", "🚪"]
]

var MAP4 = [
  ["ct2", "ct2", "ct2", "ct2", "ct2"],
  ["ct2", "ct2", "ct2", "ct2", "ct2"],
  ["ct2", "ct2", "ct2", "ct2", "ct2"],
  ["ct2", "ct2", "ct2", "ct2", "ct2"],
  ["ct2", "ct2", "ct2", "ct2", "ct2"],
  ["ct2", "ct2", "ct2", "ct2", "ct2"],
  ["ct2", "ct2", "ct2", "ct2", "ct2"],
  ["horleft", "horright", "ct2", "horleft", "horright"],
]

var MAP4OVERLAY = [
  ["tor1", "", "throne", "", "tor1"],
  ["", "", "vampking", "", ""],
  ["statue1", "", "", "", "statue3"],
  ["", "", "", "", ""],
  ["tor1", "", "", "", "tor1"],
  ["", "", "", "", ""],
  ["statue4", "", "", "", "statue2"],
  ["", "", "ld", "", ""],
]



// I couldn't decide where to put the black ghost, so I just came up with potential places and chose them randomly
function blackGhostPosition() {

  var ghostPosition = Math.floor(Math.random() * 5) + 1

  if (ghostPosition == 1) {
    MAP3OVERLAY[2][9] = "blackghost"
  }else if (ghostPosition == 2) {
    MAP3OVERLAY[4][2] = "blackghost"
  }else if (ghostPosition == 3) {
    MAP3OVERLAY[7][7] = "blackghost"
  }else if (ghostPosition == 4) {
    MAP3OVERLAY[10][2] = "blackghost"
  }
}



// tile = 🟪
// obstacle = 🪨
// shop = 🏪
// chest/box = 🧰
// boss = 🐐
// miniboss = 👻
// door/exit = 🚪
// stick = 📏