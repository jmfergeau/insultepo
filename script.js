// Ici sont déclarées les différentes parties de l'insulte à générer. Vous pouvez en rajouter à loisir.
// male pour les hommes, female pour les femmes, any pour les neutres
// Faudra m'expliquer pourquoi var marche mieux que let ici...
var insPart1 = {
    male: [
        "dangereux",
        "monstrueux",
        "terrifiant",
        "fiévreux",
        "irrationnel",
        "petit",
        "grand",
        "honteux",
        "baveux",
        "scandaleux",
        "haineux",
    ],

    female: [
        "dangereuse",
        "monstrueuse",
        "terrifiante",
        "fiévreuse",
        "irrationnelle",
        "petite",
        "grande",
        "honteuse",
        "baveuse",
        "scandaleuse",
        "haineuse",
    ],

    any: [
        "démoniaque",
        "diffamatoire",
        "minable",
        "insupportable",
        "détestable",
        "ridicule",
        "désagréable",
        "tyrannique",
        "incommensurable",
        "discutable",
    ]
};

var insPart2 = {
    male: [
        "illettré",
        "migrant",
        "mafieux",
        "dictateur",
        "cancer",
        "troll",
        "tyran",
        "connard",
        "délinquant",
        "infecté",
        "escroc",
        "zonard",
        "blouson noir",
        "trader",
        "républicain",
        "démocrate",
        "menteur",
        "déchet",
        "codeur de JS",
        "emmerdeur",
        "fraudeur au fisc",
        "transsexuel",
    ],

    female: [
        "illettrée",
        "migrante",
        "mafieuse",
        "vestale",
        "tanche",
        "infectée",
        "républicaine",
        "racaille",
        "connasse",
        "délinquante",
        "tradeuse",
        "putain",
        "codeuse de JS",
        "menteuse",
        "emmerdeuse",
        "fraudeuse au fisc",
        "transsexuelle",
    ],

    any: [
        "extrémiste",
        "complotiste",
        "infidèle",
        "antivax",
        "provax",
        "terroriste",
        "sadique",
        "gilet jaune",
        "carniste",
        "skinhead",
        "fanatique",
        "homophobe",
        "démocrate",
        "totalitariste",
        "antisémite",
        "phallocrate",
        "brony",
        "saltimbanque",
        "végan",
        "technocrate",
        "trekkie",
        "intégriste",
        "zombie",
        "raciste",
    ]
};

// Les parties 3 et 4 n'ont pas besoin d'être genrés
var Ins3 = [
    "judéo",
    "hitléro",
    "mao",
    "néo",
    "rétro",
    "capilo",
    "romano",
    "nippo",
    "américano",
    "homo",
    "hétéro",
    "mafio",
    "trotsko",
    "pro",
    "anti",
    "anarcho",
    "pédo",
    "géronto",
    "sado",
    "maso",
    "slavo",
    "islamo",
    "romano",
    "macho",
    "miso",
    "afro",
    "gaucho",
    "germano",
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
    "mitterrandiste",
    "LGBT",
    "nordiste",
    "impérialiste",
    "bolchévik",
    "véganiste",
    "papiste",
    "sexiste",
    "communautariste",
    "maçonnique",
    "macroniste",
    "sarkoziste",
    "judaïste",
    "islamiste",
];

// Ici une liste de personnes pour l'insulte. A la fois l'insulteur et l'insulté.
// Parfois les deux sont la même personne. On pourrait éviter ça mais c'est plus drôle comme ça.
// male pour les hommes, female pour les femmes
var pers = {
    male: [
        "Alexandre Benalla",
        "Eric Zemmour",
        "Donald Trump",
        "Barrack Obama",
        "Nicolas Sarkozy",
        "Bernard Tapie",
        "Alain Juppé",
        "Alain Finkielkraut",
        "Alain Delon", // ça fait pas mal de Alains, tiens...
        "Jean-Michel Blanquer",
        "Joachim Son-Forget",
        "Vladimir Poutine",
        "Le pape François",
        "Didier Raoult",
        "Emmanuel Macron",
        "François Ruffin",
        "François Hollande",
        "Nicolas Hulot",
        "Xi Jinping",
        "Manuel Valls",
        "Jeff Bezos",
        "Joe Biden",
        "Mark Zuckerberg",
        "José Bové",
        "Jean-Luc Mélenchon",
        "Edouard Philippe",
        "Kim Jong Un",
    ],

    female: [
        "Greta Thunberg",
        "Anne Hidalgo",
        "Brigitte Macron",
        "Marine Le Pen",
        "Isabelle Balkany",
        "Melania Trump",
        "Michelle Obama",
        "Valérie Pécresse",
        "Hilary Clinton",
        "Marion Maréchal-Le Pen",
        "Ségolène Royale",
    ]
};

// Ici une fonction super simple pour choisir un élément au hasard dans un array.
// 'asset' étant le nom de l'array en question.
function randNum(asset) {
    return Math.floor(Math.random() * asset.length);
};

// la Fonction qui génère le truc
function generate() {

    // Ceci spécifie si l'attaqué est un homme ou une femme au hasard
    // D'abord on choisit l'un ou l'autre avec ce randomisateur de booléen
    var random_boolean = Math.random() >= 0.5;

    if (random_boolean <= 0.5) {
        // Si c'est un homme
        var Ins1 = insPart1.male.concat(insPart1.any), // On concatenne les arrays male et any ensemble
            Ins2 = insPart2.male.concat(insPart2.any),
            Personne = pers.male, // On prend un homme et on lui donne le bon pronom
            unune = "un";
    } else {
        // Si c'est une femme
        var Ins1 = insPart1.female.concat(insPart1.any), // Itou
            Ins2 = insPart2.female.concat(insPart2.any),
            Personne = pers.female,
            unune = "une";
    };

    // On fait en sorte que l'attaquant ne soit pas forcément du même sexe que l'attaqué
    var attacker = pers.male.concat(pers.female);
    var attacker = attacker[randNum(attacker)];

    // Génération de l'insulte elle-même
    var item = attacker + " : " + Personne[randNum(Personne)] +
        " serait " + unune + " « " + Ins1[randNum(Ins1)] + " " + Ins2[randNum(Ins2)] +
        " " + Ins3[randNum(Ins3)] + "-" + Ins4[randNum(Ins4)] + " ».";

    // Retourne la phrase elle-même dans l'élément theText
    var theText = document.getElementById('theText');

    // Change le background du header en fonction du nom de l'attaquant
    var bgheader = document.getElementById('headerpic');
    bgheader.style.background = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url('img/" + attacker + ".jpg')";
    bgheader.style.backgroundRepeat = "no-repeat"; // On aurait pu techniquement foutre ces valeurs dans la ligne au dessus
    bgheader.style.backgroundSize = "cover"; // mais pour une raison inconnue ça ne marche pas autrement que comme ça.
    bgheader.style.backgroundPosition = "center";

    return theText.innerHTML = item; // On balance un return parce qu'on est obligés.
};

// On rappelle la fonction pour qu'elle se lance au démarrage.
generate();
