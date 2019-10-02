var Ins1 = [
  "démoniaque",
  "dangereux",
  "monstre",
  "terrifiant",
  "diffamatoire",
  "haineux",
  "migrant"
];

var Ins2 = [
  "vestale",
  "extrémiste",
  "complotiste",
  "dictateur",
  "cancer",
  "mafieux(se)",
  "terroriste",
  "escroc",
  "brony",
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
  "nippo",
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
  "sexiste",
  "casher",
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

var item = Personnes[Math.floor(Math.random()*Personnes.length)] + " : " +  Personnes[Math.floor(Math.random()*Personnes.length)] + " serait un(e) \"" + Ins1[Math.floor(Math.random()*Ins1.length)] + " " + Ins2[Math.floor(Math.random()*Ins2.length)] + " " + Ins3[Math.floor(Math.random()*Ins3.length)] + "-" + Ins4[Math.floor(Math.random()*Ins4.length)] + "\".";
