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
  "Irrationnel(le)",
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
  "illettré(e)",
  "migrant(e)",
  "mafieux(se)",
  "terroriste",
  "sadique",
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
  "sado",
  "slavo",
  "macho",
  "miso",
  "afro",
  "gaucho",
  "germano",
  "islamo"
];

var Ins4 = [
  "gauchiste",
  "maoïste",
  "nazi",
  "centriste",
  "communiste",
  "masochiste",
  "sudiste",
  "radicaliste",
  "nordiste",
  "sexiste",
  "casher",
  "communautariste",
  "maçonnique",
  "macroniste",
  "sarkoziste",
  "juif",
  "islamiste"
];

var Personnes = [
  "Greta Thunberg",
  "Alexandre Benalla",
  "Eric Zemmour",
  "Donald Trump",
  "Nicolas Sarkozy",
  "Bernard Tapie",
  "François Hollande",
  "Emmanuel Macron",
  "Brigitte Macron",
  "Marine Le Pen",
  "Marion Maréchal-Le Pen",
  "Jean-Luc Mélenchon",
  "Edouard Philippe",
  "Kim Jong Un",
  "Max le Fou"
];

function randNum(asset) {
  return Math.floor(Math.random()*asset.length);
};

var item = Personnes[randNum(Personnes)] + " : " +  Personnes[randNum(Personnes)] + " serait un(e) \"" + Ins1[randNum(Ins1)] + " " + Ins2[randNum(Ins2)] + " " + Ins3[randNum(Ins3)] + "-" + Ins4[randNum(Ins4)] + "\".";
