
// IMAGES
const mainImagePath = "images/main.jpg";
const instructionImagePath = "images/bear-instruction.jpg";
const fPartEndImagePath = "images/bear-fpartend.jpg";
const wolfImagePath = "images/wolf.jpg";
const foxImagePath = "images/fox.jpg";
const bearImagePath = "images/bear.jpg";
const roedeerImagePath = "images/roedeer.jpg";
const mooseImagePath = "images/moose.jpg";
const beaverImagePath = "images/beaver.jpg";

const lawnBGF = "images/lawn1.jpg";
const lawnBGS = "images/lawn2.jpg";
const lawnBGT = "images/lawn3.jpg";

// AUTHOR CREDITS
const mainBearCredit = "LTapsaH, Pixabay";
const wolfCredit = "christels, Pixabay";
const foxCredit = "azazelok, Pixabay";
const bearCredit = "Bergadder, Pixabay";
const roedeerCredit = "Luboshouska, Pixabay";
const mooseCredit = "12019, Pixabay";
const beaverCredit = "SteveRaubenstine, Pixabay";

const scenes = [
    {
        name: "main",
        image: "./" + mainImagePath,
        bgImage: "./" + lawnBGF,
        text: "Suomen Eläimet",
        buttonText: ["", "ALOITA"],
        creditText: mainBearCredit
    },
    {
        name: "ohjeet",
        image: "./" + instructionImagePath,
        bgImage: "./" + lawnBGF,
        text: "OHJEET \n Paina 'seuraava' ja 'edellinen' nappeja vaihtaaksesi ruutuja! \n Ylävasemmalla on myös nappula, josta voit nähdä ohjeet mikäli niitä tarvitset.",
        buttonText: ["TAKAISIN", "JATKA"],
        creditText: ""
    },
    {   // preview
        name:"Susi-pre",
        image: "./" + wolfImagePath,
        bgImage: "./" + lawnBGF,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: wolfCredit
    },
    {
        name: "Susi",
        image: "./" + wolfImagePath,
        bgImage: "./" + lawnBGT,
        text: "SUSI \n Tiesitkö, että susi on yöeläin? Tämä tarkoittaa että ne liikkuvat pääosin öisin ja hämärällä. Sudet myös saalistavat usein yöllä.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: wolfCredit
    },
    {   // preview
        name: "Kettu-pre",
        image: "./" + foxImagePath,
        bgImage: "./" + lawnBGF,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: foxCredit
    },
    {
        name: "Kettu",
        image: "./" + foxImagePath,
        bgImage: "./" + lawnBGT,
        text: "KETTU \n Noin 10% Suomen ketuista on 'hopeakettuja', niiden turkin väri vaihtelee hopeanvärisestä lähes mustaan.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: foxCredit
    },
    {   // preview
        name: "Karhu-pre",
        image: "./" + bearImagePath,
        bgImage: "./" + lawnBGF,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: bearCredit
    },
    {
        name: "Karhu",
        image: "./" + bearImagePath,
        bgImage: "./" + lawnBGT,
        text: "KARHU \n Tiesitkö, että karhu ei ole ainoastaan Suomen suurin petoeläin, vaan koko Euroopan! \n Karhujen näköaisti on huono, mutta niiden hajuaisti on hyvin kehittynyt.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: bearCredit
    },
    {   // preview
        name: "Metsäkauris-pre",
        image: "./" + roedeerImagePath,
        bgImage: "./" + lawnBGF,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: roedeerCredit
    },
    {
        name: "Metsäkauris",
        image: "./" + roedeerImagePath,
        bgImage: "./" + lawnBGT,
        text: "METSÄKAURIS \n Metsäkauriit ovat taitavia uimareita!",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: roedeerCredit
    },
    {   // preview
        name: "Hirvi-pre",
        image: "./" + mooseImagePath,
        bgImage: "./" + lawnBGF,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: mooseCredit
    },
    {
        name: "Hirvi",
        image: "./" + mooseImagePath,
        bgImage: "./" + lawnBGT,
        text: "HIRVI \n Aikuinen hirvi voi painaa huimat 800 kilogrammaa, se on jopa noin kolme moottoripyörää! Yleensä ne kuitenkin painavat nlähemmäksi 500 kilogrammaa. \n Hirvet myös aiheuttavat paljon metsävahinkoja ja niiden korvaus maksaa paljon.",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: mooseCredit
    },
    {   // preview
        name: "Majava-pre",
        image: "./" + beaverImagePath,
        bgImage: "./" + lawnBGF,
        text: "",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: beaverCredit
    },
    {
        name: "Majava",
        image: "./" + beaverImagePath,
        bgImage: "./" + lawnBGT,
        text: "MAJAVA \n Tiesitkö, että majavat voivat elää jopa yli 20 vuotiaiksi?",
        buttonText: ["TAKAISIN", "SEURAAVA"],
        creditText: beaverCredit
    },
    {
        name: "end",
        image: "./" + fPartEndImagePath,
        bgImage: "./" + lawnBGF,
        text: "Hyvä! Luit kaikki faktat! Haluatko mennä kysymyksiin?",
        buttonText: ["PALAA", "None"],
        creditText: ""
    }
];

const qaQuestions = [
    {
        name: "wolfQuestion",
        image: "../" + wolfImagePath,
        question: "Milloin sudet saalistavat useimmiten? \n 1. Yöllä \n 2. Päivällä \n 3. Aamulla \n 4. Sudet eivät saalista",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 0,   // option(1/2/3/4) - 1 = correctAnswerIndex
        creditText: wolfCredit
    },
    {
        name: "foxQuestion",
        image: "../" + foxImagePath,
        question: "Kuinka suuri määrä Suomen ketuista on hopeakettuja? \n 1. 1% \n 2. 5% \n 3. 10% \n 4. 20%",
        options: ["1", "2", "3", "4"],  
        correctAnswerIndex: 2,
        creditText: foxCredit
    },
    {
        name: "bearQuestion",
        image: "../" + bearImagePath,
        question: "Mikä on karhun aisteista huonoin? \n 1. Hajuaisti \n 2. Näköaisti \n 3. Kuuloaisti \n 4. Kaikki edellä mainitut",
        options: ["1", "2", "3", "4"], 
        correctAnswerIndex: 1,
        creditText: bearCredit
    },
    {
        name: "roedeerQuestion",
        image: "../" + roedeerImagePath,
        question: "Missä metsäkauriit ovat taitavia? \n 1. Kiipeilyssä \n 2. Piiloutumisessa \n 3. Kalojen nappaamisessa \n 4. Uimisessa",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 3,
        creditText: roedeerCredit
    },
    {
        name: "mooseQuestion",
        image: "../" + mooseImagePath,
        question: "Mikä on hirvien keskimääräinen paino? \n 1. Noin 100kg \n 2. Noin 500kg \n 3. Noin 200kg \n 4. Noin 1000kg",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 1,
        creditText: mooseCredit
    },
    {
        name: "beaverQuestion",
        image: "../" + beaverImagePath,
        question: "Kuinka vanhoiksi majavat voivat elää? \n 1. Noin 10 vuotiaksi \n 2. Noin 5 vuotiaksi \n 3. Noin 15 vuotiaksi 4. Noin 20 vuotiaksi",
        options: ["1", "2", "3", "4"],
        correctAnswerIndex: 3,
        creditText: beaverCredit
    }
];


export { scenes };
export { qaQuestions };