// Ici sont déclarées les différentes parties de l'insulte à générer. Vous pouvez en rajouter à loisir.
var Ins1 = [
  "démoniaque",
  "dangereux(se)",
  "monstre",
  "terrifiant(e)",
  "diffamatoire",
  "minable",
  "insupportable",
  "infidèle",
  "détestable",
  "fiévreuse",
  "ridicule",
  "désagréable",
  "tyrannique",
  "totalitaire",
  "irrationnel(le)",
  "petit(e)",
  "grand(e)",
  "incommensurable",
  "honteux(se)",
  "baveux(se)",
  "scandaleux(se)",
  "haineux(se)",
  "discutable"
];

var Ins2 = [
  "vestale",
  "extrémiste",
  "complotiste",
  "dictateur",
  "cancer",
  "troll",
  "tyran",
  "tanche",
  "illettré(e)",
  "migrant(e)",
  "mafieux(se)",
  "terroriste",
  "sadique",
  "gilet jaune",
  "racaille",
  "skinhead",
  "délinquant",
  "fanatique",
  "homophobe",
  "républicain",
  "démocrate",
  "phallocrate",
  "escroc",
  "brony",
  "technocrate",
  "trekkie",
  "menteur(euse)",
  "déchet",
  "emmerdeur(euse)",
  "intégriste",
  "fraudeur(euse) au fisc",
  "zombie",
  "raciste",
  "transsexuel"
];

var Ins3 = [
  "judéo",
  "hitléro",
  "mao",
  "néo",
  "capilo",
  "romano",
  "nippo",
  "mafio",
  "pédo",
  "géronto",
  "sado",
  "slavo",
  "islamo",
  "romano",
  "macho",
  "miso",
  "afro",
  "gaucho",
  "germano"
];

var Ins4 = [
  "gauchiste",
  "maoïste",
  "nazi",
  "centriste",
  "communiste",
  "masochiste",
  "sudiste",
  "syndicaliste",
  "radicaliste",
  "nordiste",
  "sexiste",
  "communautariste",
  "maçonnique",
  "macroniste",
  "sarkoziste",
  "juif",
  "islamiste"
];

// Ici une liste de personnes pour l'insulte. A la fois l'insulteur et l'insulté.
// Parfois les deux sont la même personne. On pourrait éviter ça mais c'est plus drôle comme ça.
var Personnes = [
  "Greta Thunberg",
  "Alexandre Benalla",
  "Eric Zemmour",
  "Donald Trump",
  "Barrack Obama",
  "Nicolas Sarkozy",
  "Bernard Tapie",
  "François Hollande",
  "Emmanuel Macron",
  "Brigitte Macron",
  "François Ruffin",
  "Nicolas Hulot",
  "José Bové",
  "Marine Le Pen",
  "Marion Maréchal-Le Pen",
  "Jean-Luc Mélenchon",
  "Edouard Philippe",
  "Kim Jong Un",
  "Max le Fou"
];

// Ici une fonction super simple pour choisir un élément au hasard dans un array.
// 'asset' étant le nom de l'array en question.
function randNum(asset) {
  return Math.floor(Math.random()*asset.length);
}

// Génération de l'insulte elle-même
var item = Personnes[randNum(Personnes)] + " : " +  Personnes[randNum(Personnes)]
            + " serait un(e) \"" + Ins1[randNum(Ins1)] + " " + Ins2[randNum(Ins2)]
            + " " + Ins3[randNum(Ins3)] + "-" + Ins4[randNum(Ins4)] + "\".";
